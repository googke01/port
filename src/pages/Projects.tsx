import BottomNav from "@/components/BottomNav";
import { Quote, Star } from "lucide-react";

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
        <h2 className="text-text-muted text-[15px] mb-4 font-normal">
          testimonials
        </h2>

        {/* Style 1: Classic card with quote icon */}
        <div className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card p-5 mb-3">
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
        </div>

        {/* Style 2: Minimal with left border accent */}
        <div className="border-l-2 border-foreground/15 pl-4 py-1 mb-3">
          <p className="text-[14px] text-text-tertiary leading-[1.75]">
            {testimonials[1].text}
          </p>
          <div className="mt-3">
            <p className="text-[13px] font-semibold text-foreground">{testimonials[1].name}</p>
            <p className="text-[11px] text-text-muted">{testimonials[1].role}</p>
          </div>
        </div>

        {/* Style 3: Highlighted with stars and background */}
        <div className="bg-foreground/[0.03] rounded-xl p-5 mb-3">
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
        </div>

        {/* Style 4: Big quote, centered layout */}
        <div className="text-center py-6 px-2 mb-3">
          <span className="text-[40px] leading-none text-foreground/10 font-serif">"</span>
          <p className="text-[15px] text-foreground/80 leading-[1.8] -mt-3 font-medium">
            {testimonials[3].text}
          </p>
          <div className="mt-4">
            <p className="text-[13px] font-semibold text-foreground">{testimonials[3].name}</p>
            <p className="text-[11px] text-text-muted">{testimonials[3].role}</p>
          </div>
          <div className="mt-3 h-[1px] w-12 bg-foreground/10 rounded-full mx-auto" />
        </div>

      </main>
      <BottomNav />
    </div>
  );
};

export default Projects;
