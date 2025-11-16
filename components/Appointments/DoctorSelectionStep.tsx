import { useAvailableDoctors } from "@/hooks/use-doctors";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { InfoIcon, MapPinIcon, PhoneIcon, StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import DoctorLoading from "./DoctorLoading";

interface DoctorSelectionStepProps {
  selectedDentistId: string | null;
  onSelectDentist: (dentistid: string) => void;
  onContinue: () => void;
}

export default function DoctorSelectionStep({ onContinue, onSelectDentist, selectedDentistId }: DoctorSelectionStepProps) {

  // fetching some data which is aviable using hook for appointmentdoctor

  const { data: doctors = [], isLoading } = useAvailableDoctors();

  if (isLoading) return <div>
    <DoctorLoading />
  </div>

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Select a Doctor</h2>

      {/* this div for the card return */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {doctors.map((doctor) => (
          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${selectedDentistId === doctor.id ? "ring ring-primary" : ""}`}
            key={doctor.id}
            onClick={() => onSelectDentist(doctor.id)}
          >
            <CardHeader className="pb-5">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={doctor.imageUrl || ""} alt={doctor.name} />
                  <AvatarFallback>{doctor.name?.charAt(0) || "D"}</AvatarFallback>
                </Avatar>

                {/* for the image section along side with  you name  */}

                <div className="flex-1">
                  <CardTitle className="text-lg">
                    {doctor.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-bold">
                    {doctor.specialty || "General Dentist"}
                  </CardDescription>

                  {/* for the   star icons and appointment count*/}
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex items-center gap-2">
                      <StarIcon className="w-4 h-4 fill-amber-300 text-amber-400" />
                      <span className="text-sm font-medium">5</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({doctor._count?.appointments || 0} appointments)
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground gap-2 items-center flex">
                <MapPinIcon className="w-5 h-5" />
                <span>Doctrology</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PhoneIcon className="w-5 h-5" />
                <span>{doctor.phone}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <InfoIcon className="w-5 h-5" />
                <p className="text-sm text-muted-foreground">
                  {doctor.bio || "Experienced dental professional providing quality care"}
                </p>
              </div>

              <Badge className="text-primary bg-primary-foreground" variant={"secondary"}>Licensed Professional</Badge>

            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end">
        <Button onClick={onContinue} disabled={!selectedDentistId}>
          Continue
        </Button>
      </div>
    </div>
  )
}