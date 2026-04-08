import BottomNav from "@/components/BottomNav";
import { Quote } from "lucide-react";

const t = {
  name: "Sarah Mitchell",
  role: "Operations Manager, MediaFlow Inc.",
  text: "Dhyan automated our entire content scheduling pipeline. What used to take our team 6 hours a day now runs on autopilot. We barely even think about it anymore.",
  avatar: "SM",
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <h2 className="text-text-muted text-[15px] mb-5 font-normal">
          testimonials — pick a style
        </h2>

        {/* V1: Quote top-left, avatar bottom-left beside name */}
        <p className="text-[11px] text-text-muted mb-2 uppercase tracking-wider">Version 1</p>
        <div className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card p-5 mb-6">
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
        </div>

        {/* V2: Avatar top-right, divider before name */}
        <p className="text-[11px] text-text-muted mb-2 uppercase tracking-wider">Version 2</p>
        <div className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card p-5 mb-6">
          <div className="flex items-start justify-between mb-3">
            <Quote size={16} className="text-foreground/15 mt-0.5" />
            <div className="w-8 h-8 rounded-full bg-foreground/[0.04] flex items-center justify-center text-[11px] font-semibold text-foreground/40">
              {t.avatar}
            </div>
          </div>
          <p className="text-[14px] text-text-tertiary leading-[1.75]">
            {t.text}
          </p>
          <div className="h-[1px] w-full bg-foreground/[0.05] my-4" />
          <div>
            <p className="text-[13px] font-semibold text-foreground leading-tight">{t.name}</p>
            <p className="text-[11px] text-text-muted mt-0.5">{t.role}</p>
          </div>
        </div>

        {/* V3: Large quote mark, no icon, name inline right-aligned */}
        <p className="text-[11px] text-text-muted mb-2 uppercase tracking-wider">Version 3</p>
        <div className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card p-5 mb-6">
          <span className="text-[36px] leading-none text-foreground/8 font-serif select-none">"</span>
          <p className="text-[14px] text-text-tertiary leading-[1.75] -mt-2">
            {t.text}
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-[13px] font-semibold text-foreground leading-tight">{t.name}</p>
              <p className="text-[11px] text-text-muted">{t.role}</p>
            </div>
            <div className="h-8 w-[1px] bg-foreground/[0.06]" />
          </div>
        </div>

        {/* V4: Compact — quote inline, tighter spacing */}
        <p className="text-[11px] text-text-muted mb-2 uppercase tracking-wider">Version 4</p>
        <div className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card px-5 py-4 mb-6">
          <div className="flex gap-3">
            <Quote size={14} className="text-foreground/12 mt-1 flex-shrink-0" />
            <div>
              <p className="text-[13.5px] text-text-tertiary leading-[1.7]">
                {t.text}
              </p>
              <p className="text-[12px] text-foreground font-semibold mt-3">{t.name} <span className="font-normal text-text-muted">· {t.role}</span></p>
            </div>
          </div>
        </div>

        {/* V5: Floating quote, bottom border accent */}
        <p className="text-[11px] text-text-muted mb-2 uppercase tracking-wider">Version 5</p>
        <div className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card p-5 mb-6 border-b-2 border-b-foreground/10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-foreground/[0.03] flex items-center justify-center">
              <Quote size={12} className="text-foreground/25" />
            </div>
            <p className="text-[12px] font-semibold text-foreground">{t.name}</p>
          </div>
          <p className="text-[14px] text-text-tertiary leading-[1.75]">
            {t.text}
          </p>
          <p className="text-[11px] text-text-muted mt-3">{t.role}</p>
        </div>

        {/* V6: Clean minimal — no quote icon, just text and subtle styling */}
        <p className="text-[11px] text-text-muted mb-2 uppercase tracking-wider">Version 6</p>
        <div className="bg-surface/90 backdrop-blur-sm rounded-xl border border-border-subtle/40 shadow-card p-5 mb-6">
          <p className="text-[14.5px] text-foreground/75 leading-[1.8] font-normal italic">
            "{t.text}"
          </p>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-foreground/[0.04]">
            <div className="w-9 h-9 rounded-full bg-foreground/[0.04] flex items-center justify-center text-[11px] font-semibold text-foreground/40">
              {t.avatar}
            </div>
            <div>
              <p className="text-[13px] font-semibold text-foreground leading-tight">{t.name}</p>
              <p className="text-[11px] text-text-muted">{t.role}</p>
            </div>
          </div>
        </div>

      </main>
      <BottomNav />
    </div>
  );
};

export default Projects;
