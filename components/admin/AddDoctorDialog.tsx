import { useCreateDoctor } from "@/hooks/use-doctors";
import { Gender } from "@prisma/client";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { formatPhoneNumber } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface AddDoctorDialogProps {
    isOpen: boolean,
    onClose: () => void;
}
export default function AddDoctorDialog({ isOpen, onClose }: AddDoctorDialogProps) {


    const [newDoctor, setNewDoctor] = useState({
        name: "",
        email: "",
        phone: "",
        specialty: "",
        gender: "MALE" as Gender,
        isActive: true
    })

    const createDoctor = useCreateDoctor();

    const handlePhoneChange = (value: string) => {
        const formattedNumber = formatPhoneNumber(value);
        setNewDoctor({ ...newDoctor, phone: formattedNumber })
    }
    const handleSave = () => {
        createDoctor.mutate({ ...newDoctor }, { onSuccess: () => { handleClose(); } });

    }
    const handleClose = () => {
        onClose();
        setNewDoctor({
            name: "",
            email: "",
            phone: "",
            specialty: "",
            gender: "MALE",
            isActive: true
        })
    }











    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>

            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>
                        Add new Doctor
                    </DialogTitle>
                    <DialogDescription>
                        Add a new Doctor to your practice.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="new-name">Name *</Label>
                            <Input id="new-name" value={newDoctor.name}
                                onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                                placeholder="Enter the name" />
                        </div>
                        <div className="space-y-2">
                            <Label className="new-specialty">Speciality *</Label>
                            <Input id="new-specialty" value={newDoctor.specialty}
                                onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
                                placeholder="Enter the Speciality" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-email">Email*
                        </Label>
                        <Input id="new-email" value={newDoctor.email}
                            onChange={(e) => setNewDoctor({ ...newDoctor, email: e.target.value })}
                            placeholder="Enter the email" />

                    </div>
                    <div className="space-y-2">
                        <Label className="new-phone">Phone
                        </Label>
                        <Input
                            id="new-phone"
                            value={newDoctor.phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            placeholder="(91+)"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* this dive for single two select option */}


                    <div className="space-y-2">
                        <Label htmlFor="new-gender">Gender

                        </Label>
                        <Select
                            value={newDoctor.gender || ""}
                            onValueChange={(value) => setNewDoctor({ ...newDoctor, gender: value as Gender })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="select Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="MALE">
                                    Male
                                </SelectItem>
                                <SelectItem value="FEMALE">
                                    Female
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="new-status">
                            Status
                        </Label>
                        <Select
                            value={newDoctor.isActive ? "ACTIVE" : "INACTIVE"}
                            onValueChange={(value) => setNewDoctor({ ...newDoctor, isActive: value === "ACTIVE" })}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ACTIVE">
                                    Active
                                </SelectItem>
                                <SelectItem value="INACTIVE">
                                    Inactive
                                </SelectItem>
                            </SelectContent>
                    </Select>
                </div>
                {/* </div> */}
                </div>
                <div className="flex justify-end gap-3 mt-4">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={createDoctor.isPending}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        {createDoctor.isPending ? "Saving..." : "Save"}
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}