import ProPlanRequired from "@/components/voice/ProPlanRequired";
import { auth } from "@clerk/nextjs/server";


export default async function Voice() {

    const { has } = await auth();
    const hasProPlan = has({ plan: "ai_basic" }) || has({ plan: "ai_pro" });
    if (!hasProPlan) return <ProPlanRequired />;


    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
            </div>
        </div>
    )
}