

import { prisma } from "../prisma";

export async function getDoctors() {
  try {
    const doctors = await prisma.doctor.findMany({
      include: {
        _count: { select: { appointments: true } },
      }, 
      orderBy: { createdAt: "desc" },
    });
    return doctors.map((doctor) => ({
      ...doctor,
      appointmentCount: doctor._count.appointments,
    }));
  } catch (error) {
    console.log("Error while Fetching the doctors:", error);
    throw new Error("Failed to fetch doctors");
  }
} 
