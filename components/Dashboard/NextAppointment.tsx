import { getUserAppointments } from "@/lib/actions/appointments";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import { format, isAfter, isSameDay, parseISO } from "date-fns";
import NoNextAppointment from "./NoNextAppointment";

export default async function NextAppointment() {
  const appointments = await getUserAppointments();
  // Filter for upcoming CONFIRMED appointments only (today or future)

  const upcomingAppointment =
    appointments?.filter((appointment) => {
      const appointmentDate = parseISO(appointment.date);
      const today = new Date();
      const isComing =
        isSameDay(appointmentDate, today) || isAfter(appointmentDate, today);
      return isComing && appointment.status === "CONFIRMED";
    }) || [];

  // get next appointment(eralist upcoming one)

  const NextAppointment = upcomingAppointment[0];
  if (!NextAppointment) return <NoNextAppointment />;

  const appointmentDate = parseISO(upcomingAppointment[0]?.date || "");
  const formattedDate = format(appointmentDate, "EEE, MMMM d, yyyy");
  const isToday = isSameDay(appointmentDate, new Date());

  return (
    <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-background">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarIcon className="size-5 text-primary" />
          Next Appointments
        </CardTitle>
      </CardHeader>
      {/* Status Badge */}

      <div className="flex items-center jussit-between">
        <div className="inline-flex itme-cneters gap-2 px-3 py-2 bg-primary/10 text-primary border border-primary/20 ">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-primary">
            {isToday ? "today" : formattedDate}
          </span>
        </div>
        <span className="text-xs text-muted-foreground bg-muted/50 px-2 rounded"></span>
      </div>

      {/* appointment shcdules detials */}

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <UserIcon className="size-4 text-primary" />
          </div>
          {/* for appointment detail seen here in this div */}
          <div>
            <p className="font-medium text-sm">{NextAppointment.DoctorName}</p>
            <p className="text-xs text-muted-foreground">
              {NextAppointment.reason}
            </p>
          </div>
          {/* for icons of claneder */}
          <div className="flex items-center gap-3">
            <div className="w-8  h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <CalendarIcon className="size-4 text-primary" />
            </div>
            {/* for claender icon badge */}
            <div>
              <p className="font-medium text-sm">{formattedDate}</p>
              <p className="text-xs text-muted-foreground">
                {isToday ? "Today" : format(appointmentDate, "EEEE")}
              </p>
            </div>
          </div>

          {/* for clockicons div
           */}

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <ClockIcon className="size-4 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">{NextAppointment.time}</p>
              <p className="text-xs text-muted-foreground">Local time</p>
            </div>
          </div>
        </div>
        {/* More Appointments Count */}
        {upcomingAppointment.length > 1 && (
          <p className="text-xs text-center text-muted-foreground">
            +{upcomingAppointment.length - 1} more upcoming appointment
            {upcomingAppointment.length > 2 ? "s" : ""}
          </p>
        )}
      </div>
    </Card>
  );
}
