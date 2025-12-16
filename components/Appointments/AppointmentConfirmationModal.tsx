import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, MailIcon, CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AppointmentConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointmentDetails: {
    doctorName: string;
    appointmentDate: string;
    appointmentTime: string;
    userEmail: string;
  };
  // Allow for the bookedAppointment prop as used in page.tsx
  bookedAppointment?: any;
}

export function AppointmentConfirmationModal({
  open,
  onOpenChange,
  appointmentDetails,
  bookedAppointment
}: AppointmentConfirmationModalProps) {
  // Use bookedAppointment data if available, otherwise use appointmentDetails
  const details = bookedAppointment || appointmentDetails;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircleIcon className="h-8 w-8 text-primary" />
          </div>

          <DialogTitle className="text-xl font-semibold text-center">
            Appointment Confirmed!
          </DialogTitle>

          <DialogDescription className="text-center text-muted-foreground">
            Your appointment has been successfully booked
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Email Notification Section */}
          <div className="flex flex-col items-center space-y-3">
            <div className="relative">
              <Image
                src="/email-sent.png"
                alt="Email sent"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>

            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary">
                <MailIcon className="h-4 w-4" />
                Details sent to your inbox
              </div>
              {details?.userEmail && (
                <p className="text-xs text-muted-foreground">{details.userEmail}</p>
              )}
            </div>
          </div>

          {/* Appointment Summary */}
          {details && (
            <div className="bg-muted/30 rounded-lg p-4 space-y-3">
              <h4 className="font-medium text-sm text-center mb-3">Quick Summary</h4>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <UserIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{details.doctorName}</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{details.appointmentDate || (details.date && new Date(details.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }))}</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{details.appointmentTime || details.time}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/appointments" className="w-full">
              <Button className="w-full" onClick={() => onOpenChange(false)}>
                View My Appointments
              </Button>
            </Link>

            <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-center text-xs text-muted-foreground border-t pt-4">
            <p>
              Please arrive 15 minutes early for your appointment.
              <br />
              Need to reschedule? Contact us 24 hours in advance.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}