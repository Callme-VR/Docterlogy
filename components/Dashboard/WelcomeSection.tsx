import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function WelcomeSection() {
  const user = await currentUser();
  return (
    <div className="relative z-10 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20 mb-12 overflow-hidden">
      {/* for welcome section box upper one */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/20 rounded-full border border-primary/30">
          <div className="size-3 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-primary">
            Online & Ready
          </span>
        </div>

        {/* for the welcome text of icon */}
        <div>
          <h1 className="text-4xl font-bold mb-3">
            Good{" "}
            {new Date().getHours() < 12
              ? "Morning"
              : new Date().getHours() < 18
              ? "Afternoon"
              : "Evening"}
            ,{user?.firstName}
          </h1>
          <p className="text-muted-foreground">
            Your Personal Ai health Doctor is Ready to Help for Perfect Health.
          </p>
        </div>
      </div>

      {/* for the Badge of icon */}
      <div className="lg:flex hidden items-center size-33 bg-linear-to-br from-primary/30 to-primary/40 rounded-fit">
          <Image src="/logo.png" alt="doctor" width={60} height={60} />
        
      </div>
    </div>
  );
}
