"use client"

import { createDoctor, getDoctors } from "@/lib/actions/doctors";
import { useMutation, useQuery } from "@tanstack/react-query"

export function useGetDoctors(){
    const result=useQuery({
        queryKey:["getDoctors"], /* get getdoctors from action/lib
        */
        queryFn:getDoctors,
    });

    return result;
}

export function useCreateDoctor(){
    const result = useMutation({
        mutationFn:createDoctor,
        onSuccess:()=>console.log("Doctor created successfully"),
        onError:()=>console.log("Error creating doctor")
    })
    return result
}