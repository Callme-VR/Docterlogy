"use server";
import type { Gender } from "@prisma/client";
import { prisma } from "../prisma";
import { generateAvatar } from "../utils";
import { revalidatePath } from "next/cache";

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

export type CreateDoctorInput = {
  name: string;
  email: string;
  phone: string;
  specialty: string;
  gender: Gender;
  isActive: boolean;
};

export async function createDoctor(input: CreateDoctorInput) {
  try {
    if (!input.name || !input.email)
      throw new Error("Name and email are required");
    const doctor = await prisma.doctor.create({
      data: {
        ...input,
        imageUrl: generateAvatar(input.name, input.gender),
      },
    });
    revalidatePath("/admin");
    return doctor;
  } catch (error: any) {
    console.error("Error creating doctor:", error);
    if (error?.code === "P2002") {
      throw new Error("Email already exists");
    }
    throw error;
  }
}

// Partial-is basically for the some alreadt existing data in present,and we want one thing which is unique like(doctor -id)

interface updateDoctorInput extends Partial<CreateDoctorInput> {
  id: string;
}

export async function updateDoctor(input: updateDoctorInput) {
  try {
    // Check if doctor exists
    const currentDoctor = await prisma.doctor.findUnique({
      where: {
        id: input.id,
      },
      select: {
        email: true,
      },
    });

    // If we're changing the email, check if it's already taken by another doctor
    if (input.email && currentDoctor && currentDoctor.email !== input.email) {
      const existingDoctor = await prisma.doctor.findUnique({
        where: {
          email: input.email,
        },
      });
      
      if (existingDoctor) {
        throw new Error("Email already exists");
      }
    }

    const doctor = await prisma.doctor.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name,
        email: input.email,
        phone: input.phone,
        specialty: input.specialty,
        gender: input.gender,
        isActive: input.isActive,
      },
    });
    
    // revalidatePath("/admin");
    return doctor;
  } catch (error: any) {
    console.error("Error updating doctor:", error);
    if (error?.code === "P2002") {
      throw new Error("Email already exists");
    }
  }
}
  