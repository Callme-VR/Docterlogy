import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, UserCheck, Clock, User } from "lucide-react";


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
}: AdminStatsProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-3 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center">
                            <User className="size-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">
                                {totalDoctors}
                            </div>
                            <div className="text-sm text-muted-foreground">Total Doctors</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="border-3 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center">
                            <UserCheck className="size-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">
                                {activeDoctors}
                            </div>
                            <div className="text-sm text-muted-foreground">Active Doctors</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="border-3 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center">
                            <Calendar className="size-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">
                                {totalAppointments}
                            </div>
                            <div className="text-sm text-muted-foreground">Total Appointments</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="border-3 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center">
                            <Clock className="size-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">
                                {completedAppointments}
                            </div>
                            <div className="text-sm text-muted-foreground">Completed Appointments</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}