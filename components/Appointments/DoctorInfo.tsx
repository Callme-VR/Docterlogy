import { useAvailableDoctors } from "@/hooks/use-doctors";
import Image from "next/image";
export default function DoctorInfo({ doctorId }: { doctorId: string }) {
  const { data: doctors = [] } = useAvailableDoctors();
  const doctor = doctors.find((doctor) => doctor.id === doctorId);

  return (
    <div className="flex items-center gap-4">
      <Image
        src={doctor?.imageUrl!}
        alt={doctor?.name!}
        width={50}
        height={50}
        className="w-12 h-12 rounded-full object-cover"
      />
    </div>
  );
}
