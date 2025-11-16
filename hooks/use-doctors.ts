"use client";
import { createDoctor, getAvailableDoctors, getDoctors, updateDoctor } from "@/lib/actions/doctors";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";



export function useGetDoctors() {
  const result = useQuery({
    queryKey: ["getDoctors"],
    /* get getdoctors from action/lib
     */ queryFn: getDoctors,
  });

  return result;
}

/**
 * useCreateDoctor is a hook that creates a doctor
 * @returns {object} result of useMutation
 */

export function useCreateDoctor() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: createDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
    },
    onError: () => console.log("Error creating doctor"),
  });
  return result;
}

export function useUpdateDoctor() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: updateDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
    },
    onError: () => console.log("Error updating doctor"),
  });
  return result;
}

// get the Available Doctors for Appointments

export function useAvailableDoctors() {
  const result = useQuery({
    queryKey: ["getAvailableDoctors"],
    queryFn: getAvailableDoctors,
  });
  return result;
}
