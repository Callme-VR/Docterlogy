/** biome-ignore-all lint/complexity/noUselessFragments: <explanation> */

import { useGetDoctors } from "@/hooks/use-doctors";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  PlusIcon,
  StethoscopeIcon,
  MailIcon,
  PhoneIcon,
  EditIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";
// import AddDoctorDialog from "./AddDoctorDialog";

export default function Doctormanagement() {
  const { data: doctors = [] } = useGetDoctors(); /*hook for doctor data fecthing*/

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleEditDoctor = () => {};
  const handleClosedEditDialog = () => {};

  return (
    <>
      <Card className="mb-12">
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <StethoscopeIcon className="size-5 text-primary" />
              Doctors Managements
            </CardTitle>
            <CardDescription className="text-shadow-muted-foreground">
              Manages and Overseas all doctors.
            </CardDescription>
          </div>

          <Button
            className="bg-linear-to-r from-primary to-primary/90 hover:from-primary"
            onClick={() => setIsAddDialogOpen(true)}
          >
            <PlusIcon className="mr-2 size-5" />
            Add Doctor
          </Button>
        </CardHeader>

        <CardContent>
          <div className="space-y-5">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex items-center justify-between p-4 bg-muted/40 rounded-xl border border-border/50"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    width={47}
                    height={47}
                    className="size-12 rounded-full object-cover ring-2 ring-background"
                  />
                  <div>
                    <div className="font-semibold">{doctor.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {doctor.specialty}
                      <span className="ml-2 px-2 py-0.5 bg-muted rounded text-xs">
                        {doctor.gender === "MALE" ? "Male" : "Female"}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MailIcon className="h-3 w-3" />
                        {doctor.email}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <PhoneIcon className="h-3 w-3" />
                        {doctor.}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="font-semibold text-primary">
                      {doctor.appointmentCount}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Appointments
                    </div>
                  </div>

                  {doctor.isActive ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Active
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Inactive</Badge>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3"
                    onClick={() => handleEditDoctor()}
                  >
                    <EditIcon className="size-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddDoctorDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
      />
    </>
  );
}
