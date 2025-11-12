import HealthOverview from "./HealthOverview";
import NextAppointment from "./NextAppointment";

export default function ActivityOverview() {
    return (
        <div className="grid lg:grid-cols-3 gap-6">
          <HealthOverview/>
          <NextAppointment/>
        </div>
    )
}