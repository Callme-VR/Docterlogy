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
        <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="border-3 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center">
                            <User className="size-6" />

                        </div>
                        <div>
                            <div className="text-2xl font-bold">
                                {totalDoctors}
                            </div>
                            <div className="text-sm text-muted-foreground">Total Doctors
                            </div>
                        </div>
                    </div>
                </CardContent>
            </div>
        </div>
    );
}