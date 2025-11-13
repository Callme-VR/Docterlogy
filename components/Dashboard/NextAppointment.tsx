import { getUserAppointments } from "@/lib/actions/appointments";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { CalendarIcon } from "lucide-react";
import { format, isAfter, isSameDay, parseISO } from "date-fns";
import NoNextAppointment from "./NoNextAppointment";

export default async function NextAppointment() {
     const appointments = await getUserAppointments();

     // Filter for upcoming CONFIRMED appointments only (today or future)

     const upcomingAppointment = appointments?.filter((appointment) => {
          const appointmentDate = parseISO(appointment.date);
          const today = new Date();
          const isComing = isSameDay(appointmentDate, today) || isAfter(appointmentDate, today);
          return isComing && appointment.status === "CONFIRMED";
     }) || [];

     // get next appointment(eralist upcoming one)

     const NextAppointment = upcomingAppointment[0];
     if (!NextAppointment) return <NoNextAppointment />






     const appointmentDate = parseISO(upcomingAppointment[0]?.date || "");
     const formattedDate = format(appointmentDate, "EEE, MMMM d, yyyy");
     const isToday = isSameDay(appointmentDate, new Date())




     return (
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-background">
               <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                         <CalendarIcon className="size-5 text-primary" />
                         Next Appointments
                    </CardTitle>
               </CardHeader>
               {/* Status Badge */}



          </Card>
     )
}