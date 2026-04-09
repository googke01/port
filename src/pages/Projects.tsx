import BottomNav from "@/components/BottomNav";
import { Quote } from "lucide-react";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { motion } from "framer-motion";

// Toggle this to show/hide testimonials
const SHOW_TESTIMONIALS = false;

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Operations Manager, MediaFlow Inc.",
    text: "Dhyan automated our entire content scheduling pipeline. What used to take our team 6 hours a day now runs on autopilot. We barely even think about it anymore.",
    avatar: "SM",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">

        {SHOW_TESTIMONIALS ? (
          <>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card p-5 mb-4"
              >
                <Quote size={16} className="text-foreground/15 mb-3" />
                <p className="text-[14px] text-text-tertiary leading-[1.75]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-9 h-9 rounded-full bg-foreground/[0.04] flex items-center justify-center text-[11px] font-semibold text-foreground/40">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground leading-tight">{t.name}</p>
                    <p className="text-[11px] text-text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center mt-24 gap-3">
            <TextShimmer
              duration={2.5}
              className="text-[15px] font-medium text-text-muted"
            >
              real stories coming · stay tuned
            </TextShimmer>
          </div>
        )}

      </main>
      <BottomNav />
    </div>
  );
};

export default Projects;
