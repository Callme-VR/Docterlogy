import AppointmentConfirmation from "@/components/emails/AppointmentConfirmation";
import resend from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      userEmail,
      doctorName,
      appointmentDate,
      appointmentTime,
      duration,
      price,
      appointmentType,
    } = body;

    if (
      !userEmail ||
      !doctorName ||
      !appointmentDate ||
      !appointmentTime ||
      !duration ||
      !price ||
      !appointmentType
    ) {
      return new Response("All fields are required", { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Doctrology <onboarding@resend.dev>",
      to: [userEmail],
      subject: "Your appointment is confirmed",
      react: AppointmentConfirmation({
        doctorName,
        appointmentDate,
        appointmentTime,
        duration,
        appointmentType,
        price,
      }),
    });
    if (error) {
      return new Response("Failed to send email", { status: 500 });
    }
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
