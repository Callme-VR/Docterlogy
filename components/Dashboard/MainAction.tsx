import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { CalendarIcon, MessageSquareIcon } from "lucide-react";

export default function MainAction() {
    return (
        <div className="grid md:grid-cols-2 gap-6 mb-11">
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">

                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
                <CardContent className="relative  p-8">
                    <div className="flex items-center gap-5 mb-6">
                        {/* this div for the icon  */}
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Image src="/audio.png" alt="Voice AI" width={32} height={32} className="w-10" />
                        </div>

                        {/* this div for the title and paragraph  */}
                        <div>
                            <h3 className="text-2xl font-semibold ">Ai voice Assistant</h3>
                            <p className="text-sm text-muted-foreground">
                                Talk to our AI voice assistant for 24/7 support.
                            </p>
                        </div>
                    </div>

                    {/* this div for the point refrences in the card */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                                24/7 Support
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                                Professional Health guidance
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                                Instant Pain Relief advice
                            </span>
                        </div>
                    </div>

                    {/* this div for the Buttons components */}
                    <Link href={"/voice"} className={buttonVariants({
                        variant: "default", className: "w-full mt-6 bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/80 hover:to-primary/90 font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    })} >
                        <MessageSquareIcon className="mr-2 h-4 w-4" />
                        Get Started
                    </Link>
                </CardContent>
            </Card>

            {/* second card for the appopintment booking page */}
            
            {/* Book Appointment */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="relative p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Image src="/calendar.png" alt="Calendar" width={32} height={32} className="w-10" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Book Appointment</h3>
                            <p className="text-muted-foreground">Schedule with verified dentists in your area</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">Verified dental professionals</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">Flexible scheduling</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">Instant confirmations</span>
                        </div>
                    </div>

                    <Link href="/appointments">
                        <Button
                            variant="outline"
                            className="w-full mt-6 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 font-semibold py-3 rounded-xl transition-all duration-300"
                        >
                            <CalendarIcon className="mr-2 h-5 w-5" />
                            Schedule Now
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}

