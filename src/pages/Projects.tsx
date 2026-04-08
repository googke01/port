import BottomNav from "@/components/BottomNav";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Operations Manager, MediaFlow Inc.",
    text: "Dhyan automated our entire content scheduling pipeline. What used to take our team 6 hours a day now runs on autopilot. We barely even think about it anymore.",
    avatar: "SM",
    metric: "6hrs/day saved",
  },
  {
    name: "Raj Mehta",
    role: "Founder, NovaBrand Studio",
    text: "I was skeptical about AI automation at first. But Dhyan didn't just build a system — he understood our business. Three weeks in, we had cut our response time by 70%.",
    avatar: "RM",
    metric: "70% faster",
  },
  {
    name: "Emily Chen",
    role: "CEO, Freshly Packed",
    text: "We went from drowning in manual order processing to having everything just work. Dhyan's approach is clean, fast, and exactly what we needed.",
    avatar: "EC",
    metric: "100% automated",
  },
  {
    name: "James O'Brien",
    role: "Head of Marketing, TrendVault",
    text: "The best part? I forgot the automation was even there. That's when you know it's done right. Our weekly reports just appear now — no one has to lift a finger.",
    avatar: "JO",
    metric: "Zero manual work",
  },
  {
    name: "Priya Sharma",
    role: "COO, ScaleUp Labs",
    text: "Most consultants give you a deck. Dhyan gave us a working system in 10 days. Our onboarding flow went from 45 minutes to under 5.",
    avatar: "PS",
    metric: "45min → 5min",
  },
  {
    name: "Marcus Lee",
    role: "Director, Vault Media Group",
    text: "We tried three different automation tools before Dhyan. None of them stuck. His did — because he actually watched how we work before building anything.",
    avatar: "ML",
    metric: "Finally stuck",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" as const },
});

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <h2 className="text-text-muted text-[15px] mb-5 font-normal">
          testimonials
        </h2>

        {/* Style 1: Classic card with quote icon */}
        <motion.div {...fadeUp(0)} className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card p-5 mb-4">
          <Quote size={18} className="text-foreground/20 mb-3" />
          <p className="text-[14px] text-text-tertiary leading-[1.75] italic">
            "{testimonials[0].text}"
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-[12px] font-semibold text-foreground/60">
              {testimonials[0].avatar}
            </div>
            <div>
              <p className="text-[13px] font-semibold text-foreground leading-tight">{testimonials[0].name}</p>
              <p className="text-[11px] text-text-muted">{testimonials[0].role}</p>
            </div>
          </div>
        </motion.div>

        {/* Style 2: Minimal left border */}
        <motion.div {...fadeUp(0.05)} className="border-l-2 border-foreground/15 pl-4 py-1 mb-4">
          <p className="text-[14px] text-text-tertiary leading-[1.75]">
            {testimonials[1].text}
          </p>
          <div className="mt-3">
            <p className="text-[13px] font-semibold text-foreground">{testimonials[1].name}</p>
            <p className="text-[11px] text-text-muted">{testimonials[1].role}</p>
          </div>
        </motion.div>

        {/* Style 3: Stars with subtle bg */}
        <motion.div {...fadeUp(0.1)} className="bg-foreground/[0.03] rounded-xl p-5 mb-4">
          <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="fill-foreground/30 text-foreground/30" />
            ))}
          </div>
          <p className="text-[14px] text-text-tertiary leading-[1.75]">
            {testimonials[2].text}
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center text-[12px] font-semibold text-foreground/50">
              {testimonials[2].avatar}
            </div>
            <div>
              <p className="text-[13px] font-semibold text-foreground">{testimonials[2].name}</p>
              <p className="text-[11px] text-text-muted">{testimonials[2].role}</p>
            </div>
          </div>
        </motion.div>

        {/* Style 4: Centered big quote */}
        <motion.div {...fadeUp(0.15)} className="text-center py-6 px-2 mb-4">
          <span className="text-[40px] leading-none text-foreground/10 font-serif">"</span>
          <p className="text-[15px] text-foreground/80 leading-[1.8] -mt-3 font-medium">
            {testimonials[3].text}
          </p>
          <div className="mt-4">
            <p className="text-[13px] font-semibold text-foreground">{testimonials[3].name}</p>
            <p className="text-[11px] text-text-muted">{testimonials[3].role}</p>
          </div>
          <div className="mt-3 h-[1px] w-12 bg-foreground/10 rounded-full mx-auto" />
        </motion.div>

        {/* Style 5: Metric-led — big number on top */}
        <motion.div {...fadeUp(0.2)} className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card p-5 mb-4">
          <p className="text-[22px] font-semibold text-foreground tracking-tight leading-none">
            {testimonials[4].metric}
          </p>
          <p className="text-[14px] text-text-tertiary leading-[1.75] mt-3">
            {testimonials[4].text}
          </p>
          <div className="h-[1px] w-full bg-foreground/5 my-4" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold text-foreground">{testimonials[4].name}</p>
              <p className="text-[11px] text-text-muted">{testimonials[4].role}</p>
            </div>
            <ArrowUpRight size={14} className="text-foreground/20" />
          </div>
        </motion.div>

        {/* Style 6: Chat bubble / conversational */}
        <motion.div {...fadeUp(0.25)} className="mb-4">
          <div className="bg-foreground/[0.04] rounded-2xl rounded-bl-md px-4 py-3.5">
            <p className="text-[14px] text-text-tertiary leading-[1.75]">
              {testimonials[5].text}
            </p>
          </div>
          <div className="flex items-center gap-2.5 mt-2.5 ml-1">
            <div className="w-7 h-7 rounded-full bg-foreground/8 flex items-center justify-center text-[10px] font-semibold text-foreground/50">
              {testimonials[5].avatar}
            </div>
            <div>
              <p className="text-[12px] font-semibold text-foreground leading-tight">{testimonials[5].name}</p>
              <p className="text-[10px] text-text-muted">{testimonials[5].role}</p>
            </div>
          </div>
        </motion.div>

        {/* Style 7: Two-column compact grid */}
        <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 gap-2.5 mb-4">
          {testimonials.slice(0, 2).map((t) => (
            <div key={t.name} className="bg-surface/90 border border-border-subtle/40 rounded-lg p-3.5">
              <p className="text-[11.5px] text-text-tertiary leading-[1.65] line-clamp-4">
                "{t.text}"
              </p>
              <p className="text-[11px] font-semibold text-foreground mt-2.5">{t.name.split(" ")[0]}</p>
              <p className="text-[9.5px] text-text-muted">{t.role.split(",")[0]}</p>
            </div>
          ))}
        </motion.div>

        {/* Style 8: Typewriter / monospace feel */}
        <motion.div {...fadeUp(0.35)} className="border border-dashed border-foreground/10 rounded-lg p-5 mb-4">
          <p className="text-[13px] text-foreground/70 leading-[1.85] font-mono">
            &gt; {testimonials[3].text}
          </p>
          <p className="text-[11px] text-foreground/40 font-mono mt-3">
            — {testimonials[3].name}, {testimonials[3].role}
          </p>
        </motion.div>

      </main>
      <BottomNav />
    </div>
  );
};

export default Projects;
