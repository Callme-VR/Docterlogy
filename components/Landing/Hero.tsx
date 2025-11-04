import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
      {/* Background grid */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-linear-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-linear-to-r from-primary/15 to-primary/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16 items-center">
            {/* Left section */}
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6 md:space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm animate-fade-in">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-primary">
                    AI-Powered Healthcare Assistant
                  </span>
                </div>

                {/* Main heading with responsive typography */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="block bg-linear-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                    Your Health
                  </span>
                  <span className="block bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Questions Answered
                  </span>
                  <span className="block bg-linear-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                    Instantly
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Chat with our AI Doctor Assistant for all your health concerns
                  and smart AI-based appointments. Available 24/7 to provide
                  reliable medical information and support.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <SignUpButton mode="modal">
                    <Button
                      size={"lg"}
                      className="w-full sm:w-auto transition-transform hover:scale-105"
                    >
                      <MicIcon className="mr-2 size-5" />
                      Try Voice AI Agent
                    </Button>
                  </SignUpButton>

                  <SignUpButton mode="modal">
                    <Button
                      size={"lg"}
                      variant={"outline"}
                      className="w-full sm:w-auto transition-transform hover:scale-105"
                    >
                      <CalendarIcon className="mr-2 size-5" />
                      Book Appointment
                    </Button>
                  </SignUpButton>
                </div>

                {/* User testimonials */}
                <div className="pt-6 md:pt-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    {/* User avatars */}
                    <div className="flex -space-x-3">
                      {[
                        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face",
                      ].map((src, index) => (
                        <div
                          key={index}
                          className="relative h-10 w-10 sm:h-12 sm:w-12"
                        >
                          <Image
                            src={src}
                            alt={`User ${index + 1}`}
                            fill
                            className="rounded-full object-cover border-2 border-background transition-transform hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon
                              key={star}
                              className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="text-sm font-bold text-foreground">
                          4.9/5
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Trusted by{" "}
                        <span className="font-semibold text-foreground">
                          1,200+ patients
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section - Hero Image */}
            <div className="relative lg:pl-8">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-primary/15 to-primary/5 rounded-full blur-2xl opacity-70"></div>

              {/* Hero Image */}
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-3xl -rotate-3 -z-10"></div>
                <div className="relative">
                  <Image
                    src={"/hero.png"}
                    alt="AI Healthcare Assistant"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-xl border border-border/30"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
