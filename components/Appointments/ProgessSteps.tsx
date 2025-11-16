import { ChevronRightIcon } from "lucide-react";

const PROGRESS_STEPS = [
  "Select Dentist",
  "Select Time",
  "Confirm",
];

export default function ProgessSteps({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center gap-4 mb-7">
      {PROGRESS_STEPS.map((stepName, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep >= stepNumber;
        
        return (
          <div className="flex items-center gap-3" key={stepNumber}>
            {/* step circle badge icon */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
              {stepNumber}
            </div>
            {/* stepname 1->2-> */}
            <span className={`text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
              {stepName}
            </span>
            {/* right chevron icon */}
            {index < PROGRESS_STEPS.length - 1 && (
              <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        );
      })}
    </div>
  );
}