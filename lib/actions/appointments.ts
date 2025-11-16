import { auth } from "@clerk/nextjs/server";
import { prisma } from "../prisma";

function transformAppointments(appointment: any) {
  return {
    ...appointment,
    patientName: `${appointment.user.firstName} ${appointment.user.lastName}`,
    patientEmail: appointment.user.email,
    doctorName: appointment.doctor.name,
    doctorImage: appointment.doctor.imageUrl,
    date: appointment.date.toISOString().split("T")[0],
  };
}

export async function getAppointments() {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        doctor: { select: { name: true, imageUrl: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return appointments.map(transformAppointments);
  } catch (error) {
    console.error("Error fetching appointments", error);
    throw new Error("Failed to fetch appointments");
  }
}

export async function getUserAppointments() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
    // find user by clerkid from authenticated session
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    if (!user) throw new Error("User not found");

    const appointments = await prisma.appointment.findMany({
      where: { userId: user.id },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        doctor: { select: { name: true, imageUrl: true } },
      },
      orderBy: { createdAt: "asc" },
    });

    return appointments.map(transformAppointments);
  } catch (error) {
    console.error("Error fetching user appointments", error);
    throw new Error("Failed to fetch user appointments");
  }
}

// for get user appointments count
export async function getUserAppointmentstats() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) throw new Error("User not found");

    const [totalCount, completedCount] = await Promise.all([
      prisma.appointment.count({
        where: { userId: user.id },
      }),
      prisma.appointment.count({
        where: { userId: user.id, status: "CONFIRMED" },
      }),
    ]);

    return {
      totalAppointments: totalCount,
      completedAppointments: completedCount,
      pendingAppointments: totalCount - completedCount,
    };
  } catch (error) {
    console.error("Error fetching user appointments", error);
    throw new Error("Failed to fetch user appointments");
  }
}

// this fucntion for the timeselection booking process

export async function getBookTimeSlots(doctorId: string, date: string) {
  try {
    const appointments = await prisma.appointment.findMany({
      where: {
        doctorId,
        date: new Date(date),
        status: {
          in: ["CONFIRMED", "CANCELLED"],
        },
      },
      select: { time: true },
    });
    return appointments.map((appointment) => appointment.time);
  } catch (error) {
    console.log("Error fetching booked time slots", error);
    return [];
  }
}


interface BookAppointmentInput {
  doctorId: string;
  date: string;
  time: string;
  type: string;
  reason: string;
}


export async function Bookappointmentconfirm(input: BookAppointmentInput) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    if (!input.doctorId || !input.date || !input.time) {
      throw new Error("Invalid input");
    }
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    if (!user) throw new Error("User not found");

    const appointment = await prisma.appointment.create({
      data: {
        userId: user.id,
        doctorId: input.doctorId,
        date: input.date,
        time: input.time,
        reason: input.reason,
        status: "CONFIRMED",

      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          }
        },
        doctor: {
          select: {
            name: true,
            imageUrl: true,
          }
        }
      }
    });
    return transformAppointments(appointment);
  } catch (error) {
    console.error("Error booking appointment", error);
    throw new Error("Failed to book appointment");
  }
}
