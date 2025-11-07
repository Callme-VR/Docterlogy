/** biome-ignore-all assist/source/organizeImports: <explanation> */

"use client";

import Adminstats from "@/components/admin/Adminstats";
import Doctormanagement from "@/components/admin/DoctorsManagements";
import Navbar from "@/components/Navbar";
import { useGetAppointments } from "@/hooks/use-appointments";
import { useGetDoctors } from "@/hooks/use-doctors";
import { useUser } from "@clerk/nextjs";
import { LoaderIcon, SettingsIcon } from "lucide-react";









export default function AdminDashboardClient() {
  const { user } = useUser();
  const { data: doctors = [], isLoading } = useGetDoctors(); /*tanstack hook*/

  const { data: appointments = [], isLoading: AppointmentsLoading } =
    useGetAppointments();

  // calculate the States
  const stats = {
    totalDoctors: doctors.length,
    activeDoctors: doctors.filter((doc) => doc.isActive).length,
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter((app) => app.status === "CONFIRMED").length,
  };







  if (isLoading || AppointmentsLoading)
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="flex flex-col items-center justify-center animate-fade-in">
          {/* Glowing Spinner */}
          <div className="relative w-20 h-20 mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-primary/30" />
            <div className="absolute inset-0 rounded-full border-4 border-t-primary border-transparent animate-spin" />
            <div className="absolute inset-2 rounded-full bg-primary/10 blur-md animate-pulse" />
          </div>

          {/* Text */}
          <p className="text-lg font-medium text-muted-foreground tracking-wide">
            Loading your dashboard...
          </p>
        </div>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* ADmin Welcome Section Div */}
        {/* ADMIN WELCOME SECTION */}
        <div className="mb-12 flex items-center justify-between bg-linear-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                Admin Dashboard
              </span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, {user?.firstName || "Admin"}!
              </h1>
              <p className="text-muted-foreground">
                Manage doctors, oversee appointments, and monitor your dental
                practice performance.
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
              <SettingsIcon className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>
        <Adminstats
          totalDoctors={stats.totalDoctors}
          totalAppointments={stats.totalAppointments}
          activeDoctors={stats.activeDoctors}
          completedAppointments={stats.completedAppointments}
        />
        <Doctormanagement />
      </div>
    </div>
  );
}

