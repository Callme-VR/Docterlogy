import Navbar from "@/components/Navbar";
import { PricingTable } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { CrownIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Propage() {
  const user =  currentUser();

  if (!user) redirect("/");

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <div className="mb-12 overflow-hidden">
          <div className="flex items-center justify-between bg-linear-to-br from-primary/10 to-background rounded-3xl p-8 border border-primary/30">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">
                  Upgrade To Pro
                </span>
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Unlock Premium Ai Health Care
                </h1>
                <p className="text-sm text-muted-foreground">
                  Get Unlimited Ai Consultation,advanced health
                  insights,priority support,and exclusive features by upgrading
                  to Pro.
                </p>
              </div>
            </div>

            {/* crown section */}

            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-linear-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center">
                <CrownIcon className="w-16 h- text-primary" />
              </div>
            </div>
          </div>
        </div>



        {/* Pricing section */}

        <div className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Choose Your Plan</h2>
            <p className="text-muted-foreground max-2xl mx-auto">
                Select the perfect plan to elevate your health care experience
            </p>
          </div>
        </div>

        <PricingTable/>




      </div>
    </>
  );
}
