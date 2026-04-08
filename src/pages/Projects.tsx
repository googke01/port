import BottomNav from "@/components/BottomNav";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Operations Manager, MediaFlow Inc.",
    text: "Dhyan automated our entire content scheduling pipeline. What used to take our team 6 hours a day now runs on autopilot. We barely even think about it anymore.",
    avatar: "SM",
  },
  {
    name: "Raj Mehta",
    role: "Founder, NovaBrand Studio",
    text: "I was skeptical about AI automation at first. But Dhyan didn't just build a system — he understood our business. Three weeks in, we had cut our response time by 70%.",
    avatar: "RM",
  },
  {
    name: "Emily Chen",
    role: "CEO, Freshly Packed",
    text: "We went from drowning in manual order processing to having everything just work. Dhyan's approach is clean, fast, and exactly what we needed.",
    avatar: "EC",
  },
  {
    name: "James O'Brien",
    role: "Head of Marketing, TrendVault",
    text: "The best part? I forgot the automation was even there. That's when you know it's done right. Our weekly reports just appear now — no one has to lift a finger.",
    avatar: "JO",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <h2 className="text-text-muted text-[15px] mb-5 font-normal">
          testimonials
        </h2>

        <div className="flex flex-col gap-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" as const }}
              className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card p-5 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <Quote size={16} className="text-foreground/15 mt-0.5" />
                <div className="w-8 h-8 rounded-full bg-foreground/[0.04] flex items-center justify-center text-[11px] font-semibold text-foreground/40 tracking-tight">
                  {t.avatar}
                </div>
              </div>
              <p className="text-[14px] text-text-tertiary leading-[1.75]">
                {t.text}
              </p>
              <div className="h-[1px] w-full bg-foreground/[0.04] my-4" />
              <div>
                <p className="text-[13px] font-semibold text-foreground leading-tight">{t.name}</p>
                <p className="text-[11px] text-text-muted mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Projects;
