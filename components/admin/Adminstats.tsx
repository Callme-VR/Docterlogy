interface AdminStatsProps {
    totalDoctors: number;
    totalAppointments: number;
    activeDoctors: number;
    completedAppointments: number;
}

export default function Adminstats({
    totalDoctors,
    totalAppointments,
    activeDoctors,
    completedAppointments
}: AdminStatsProps){
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-muted-foreground">Total Doctors</h3>
                <p className="text-2xl font-bold">{totalDoctors}</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-muted-foreground">Active Doctors</h3>
                <p className="text-2xl font-bold">{activeDoctors}</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-muted-foreground">Total Appointments</h3>
                <p className="text-2xl font-bold">{totalAppointments}</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-muted-foreground">Completed</h3>
                <p className="text-2xl font-bold">{completedAppointments}</p>
            </div>
        </div>
    );
}