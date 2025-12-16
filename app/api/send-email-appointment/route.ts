import AppointmentConfirmation from "@/components/emails/AppointmentConfirmation";
import resend from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received email request body:", body);
    
    const {
      userEmail,
      doctorName,
      appointmentDate,
      appointmentTime,
      duration,
      appointmentType,
      price,
    } = body;

    console.log("Extracted fields:", {
      userEmail,
      doctorName,
      appointmentDate,
      appointmentTime,
      duration,
      appointmentType,
      price,
    });

    if (
      !userEmail ||
      !doctorName ||
      !appointmentDate ||
      !appointmentTime ||
      !duration ||
      !price ||
      !appointmentType
    ) {
      console.error("Missing required fields");
      return new Response("All fields are required", { status: 400 });
    }

    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log("RESEND_API_KEY length:", process.env.RESEND_API_KEY?.length);

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
