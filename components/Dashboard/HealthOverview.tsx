import { getUserAppointments } from "@/lib/actions/appointments";

export default async function HealthOverview() {
  const appointments = await getUserAppointments();
  return <div></div>;
}
