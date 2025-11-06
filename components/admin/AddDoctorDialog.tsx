import { Gender } from "@prisma/client";
import { useState } from "react";

interface AddDoctorDialogProps {
    isOpen: boolean,
    onClose: () => void;
}
export default function AddDoctorDialog({ isOpen, onClose }: AddDoctorDialogProps) {


    const [newDoctor,setNewDoctor]=useState({
        name:"",
        email:"",
        phone:"",
        specialty:"",
        gender:"MALE" as Gender,
        isActive:true
    })










    return (
        <div>Add Doctor Dialog</div>
    )
}