import { getAppointments } from "@/lib/actions/appointments"

export default async function NextAppointment() {
     const appointment = await getAppointments();
     
     return (
          <div>

          </div>
     )
}