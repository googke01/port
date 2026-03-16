import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { processSteps } from "@/data/mock";
import BottomNav from "@/components/BottomNav";

const KEY_PHRASES = [
  "biggest bottlenecks",
  "automation",
  "where time is being lost",
  "Not a template",
  "Yours",
  "clear breakdown",
  "timeline",
  "cost",
  "No vague scope",
  "no surprises later",
  "50% upfront",
  "keep you updated",
  "real scenarios",
  "walk you through it",
  "Monthly audits",
  "maintenance",
];

const highlightPhrases = (text: string) => {
  const regex = new RegExp(
    `\\b(${KEY_PHRASES.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`,
    "gi"
  );
  const parts = text.split(regex);
  return parts.map((part, i) =>
    KEY_PHRASES.some((kp) => kp.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="underline decoration-foreground/30 underline-offset-2 text-foreground font-medium">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const Writing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-[13px] text-text-secondary hover:text-foreground mb-6 transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          back
        </button>

        <div className="bg-surface/90 backdrop-blur-sm rounded-card border border-border-subtle/40 shadow-card p-6">
          <p className="text-[14px] text-text-tertiary leading-[1.75] mb-6">
            No long onboarding. No guessing games. Here is exactly what happens from first conversation to live system.
          </p>

          {processSteps.map((step, idx) => (
            <div key={step.heading} className={idx !== 0 ? "mt-5" : ""}>
              <h3 className="text-[15px] font-semibold text-foreground mb-1">
                {idx + 1}. {step.heading}
              </h3>
              <p className="text-[14px] text-text-tertiary leading-[1.75]">
                {highlightPhrases(step.text)}
              </p>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Writing;
