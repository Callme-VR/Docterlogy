import { APPOINTMENT_TYPES } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DoctorInfo from "./DoctorInfo";

interface BookConfirmationStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  isBooking: boolean;
  onBack: () => void;
  onModify: () => void;
  onConfirm: () => void;
}

export default function BookConfirmationStep({
  selectedDentistId,
  selectedDate,
  selectedTime,
  selectedType,
  isBooking,
  onBack,
  onModify,
  onConfirm,
}: BookConfirmationStepProps) {
  const appointmentType = APPOINTMENT_TYPES.find(
    (type) => type.id === selectedType
  ) || {
    name: "N/A",
    duration: "N/A",
    price: "N/A",
  };

  if (!selectedDate || !selectedTime || !selectedType) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">
          Please complete all the required selections.
        </p>
        <Button onClick={onBack} className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-7">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={onBack} disabled={isBooking}>
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Appointment Details</CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Doctor Info card */}
          <DoctorInfo doctorId={selectedDentistId} />

          {/* Appointment Details card */}
          <div className="grid grid-cols-2 gap-4 pt-5 border-t">
            {/* Appointment Type */}
            <div>
              <p className="text-sm text-muted-foreground">Appointment Type</p>
              <p className="font-medium">{appointmentType.name}</p>
            </div>

            {/* Duration */}
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium">{appointmentType.duration}</p>
            </div>

            {/* Date */}
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium">
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Time */}
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-medium">{selectedTime}</p>
            </div>

            {/* Location */}
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">Dental Center</p>
            </div>

            {/* Cost */}
            <div>
              <p className="text-sm text-muted-foreground">Cost</p>
              <p className="font-medium text-primary">
                {appointmentType.price}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button variant="outline" onClick={onModify} disabled={isBooking}>
          Modify appointment
        </Button>
        <Button
          onClick={onConfirm}
          className="bg-primary"
          disabled={isBooking}
          aria-busy={isBooking}
          aria-live="polite"
        >
          {isBooking ? "Booking..." : "Confirm"}
        </Button>
      </div>
    </div>
  );
}
