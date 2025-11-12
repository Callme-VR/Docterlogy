import { auth } from "@clerk/nextjs/server";
import { prisma } from "../prisma";

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

    return appointments;
  } catch (error) {
    console.error("Error fetching appointments", error);
    throw new Error("Failed to fetch appointments");
  }
}

// for get user appointments 
export async function getUserAppointments() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    });

    if (!user) throw new Error("User not found");

    const [totalCount, completedCount] = await Promise.all([
      prisma.appointment.count({
        where: { userId: user.id }
      }),
      prisma.appointment.count({
        where: { userId: user.id, status: "CONFIRMED" }
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