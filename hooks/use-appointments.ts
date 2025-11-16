
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Bookappointmentconfirm, getAppointments, getBookTimeSlots, getUserAppointments } from "@/lib/actions/appointments";

export function useGetAppointments() {
  const result = useQuery({
    queryKey: ["getAppointments"],
    queryFn: getAppointments,
  });
  return result;
}

export function useBookingAppointments(doctorId: string, date: string) {
  return useQuery({
    queryKey: ["bookingAppointments", doctorId, date],
    queryFn: () => getBookTimeSlots(doctorId, date),
    enabled: !!doctorId && !!date,
  });
}


export function useBookAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: Bookappointmentconfirm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUserAppointments"] });
    },
    onError: (error) => console.error("Failed to book appointment:", error),
  });
}

export function UserSpecificAppointments() {
  const result = useQuery({
    queryKey: ["getUserAppointments"],
    queryFn: getUserAppointments,
  });
  return result;
}