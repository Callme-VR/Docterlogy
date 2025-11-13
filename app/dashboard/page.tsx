import ActivityOverview from "@/components/Dashboard/ActivityOverview";
import MainAction from "@/components/Dashboard/MainAction";
import WelcomeSection from "@/components/Dashboard/WelcomeSection";
import Navbar from "@/components/Navbar";

export default function dashboard() {
  return (
    <>
      <Navbar />
      {/* WelcomeSection */}

      <div className="max-w-7xl mx-auto px-6 py-6 pt-24">
        <WelcomeSection />
        <MainAction />
        <ActivityOverview />
      </div>
    </>
  );
}
