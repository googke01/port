import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { experienceData, experienceCategories } from "@/data/mock";
import BottomNav from "@/components/BottomNav";

const KEY_PHRASES = [
  "90% reduction in manual work",
  "25 hours/week saved",
  "45% increase in engagement",
  "zero additional headcount",
  "2 weeks",
  "under 60 seconds",
  "80% of queries resolved automatically",
  "2-3 hours/day",
  "under 5 minutes",
  "3-5 hours/week",
  "4-5 hours/week",
  "10x the content output",
  "90 minutes/week",
  "24/7",
  "40% lead drop-off",
  // Important concept words to underline
  "natural conversation",
  "natural language",
  "live calendar availability",
  "no-shows",
  "WhatsApp",
  "real-time",
  "smart qualifying questions",
  "budget, timeline, location preferences",
  "serious leads",
  "custom AI prompts",
  "exact tone",
  "brand positioning",
  "approval workflow",
  "full control",
  "feedback tracking",
  "handoff system",
  "authentic",
  "deep research",
  "voice-matched",
  "strong hook",
  "call to action",
  "cross-platform",
  "optimal times",
  "audience engagement data",
  "pattern analysis",
  "performance patterns",
  "data-backed",
  "intelligent moment detection",
  "vertical video",
  "captions",
  "single trigger",
  "contract signature",
  "escalating reminders",
  "smart filtering",
  "high-value posts",
  "founder's voice",
  "human oversight",
  "CRM",
  "daily schedule",
  "duplicates",
  "no manual effort",
  "zero manual effort",
  "no human involvement",
  "without any human involvement",
  "no manual editing required",
  "no editing needed",
  "automatically",
  "instantly",
];

const highlightKeyPhrases = (text: string) => {
  const regex = new RegExp(`(${KEY_PHRASES.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    KEY_PHRASES.some(kp => kp.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="underline decoration-foreground/30 underline-offset-2 text-foreground font-medium">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};
const ExperienceList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <h2 className="text-text-muted text-[15px] mb-4 font-normal">
          the work
        </h2>

        {experienceCategories.map((category) => {
          const items = experienceData.filter((e) => e.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category} className="mb-6">
              <h3 className="text-[12px] uppercase tracking-wider text-text-muted mb-2 font-medium">
                {category}
              </h3>
              <div className="bg-surface/90 backdrop-blur-sm rounded-card border border-border-subtle/40 shadow-card overflow-hidden">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between px-5 py-[14px] cursor-pointer hover:bg-surface-hover transition-colors duration-200 ${
                      index !== items.length - 1
                        ? "border-b border-secondary"
                        : ""
                    }`}
                    onClick={() => navigate(`/work/${item.slug}`)}
                  >
                    <div className="flex-1 min-w-0 mr-3">
                      <p className="text-[15px] text-foreground font-medium leading-snug">
                        {item.name}
                      </p>
                      <p className="text-[12px] text-text-muted mt-0.5 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={15}
                      strokeWidth={2}
                      className="text-text-secondary flex-shrink-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </main>

      <BottomNav />
    </div>
  );
};

const ExperienceDetail = ({ slug }: { slug: string }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const item = experienceData.find((e) => e.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 pb-20">
        <p className="text-text-tertiary">Project not found.</p>
        <BottomNav />
      </div>
    );
  }

  const sections = item.content.split("\n\n");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '50px' }} id="main-content">
        <button
          onClick={() => navigate("/work")}
          className="flex items-center gap-1.5 text-[13px] text-text-secondary hover:text-foreground mb-6 transition-colors duration-200 self-start"
        >
          <ArrowLeft size={14} />
          back
        </button>

        <div className="bg-surface/90 backdrop-blur-sm rounded-card border border-border-subtle/40 shadow-card p-6">
          <h1 className="text-[20px] font-semibold text-foreground mb-1 leading-tight">
            {item.name}
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[13px] text-text-muted">{item.role}</span>
            {item.duration && (
              <>
                <span className="text-[11px] text-text-muted">·</span>
                <span className="text-[13px] text-text-muted">{item.duration}</span>
              </>
            )}
          </div>

          <p className="text-[14px] text-text-tertiary leading-[1.75] mb-4">
            {highlightKeyPhrases(item.description)}
          </p>

          {!expanded && (
            <div className="flex justify-end">
            <button
              onClick={() => setExpanded(true)}
              className="text-[13px] text-foreground font-medium underline-offset-4 decoration-foreground/40 hover:underline transition-all duration-300"
            >
              See More
            </button>
            </div>
          )}

          {expanded && (
            <div className="mt-2 animate-fadeIn">
              {sections.map((paragraph, idx) => {
                const isHeading = /^(The Problem|How I Solved It|The Impact)$/i.test(paragraph.trim());
                const isSubHeading = /^\d+\.\s/.test(paragraph.trim());
                const isBullet = paragraph.trim().startsWith("•");
                const isBeforeAfter = /→/.test(paragraph.trim());

                if (isHeading) {
                  return (
                    <h3 key={idx} className="text-[16px] font-semibold text-foreground mt-6 mb-2">
                      {paragraph}
                    </h3>
                  );
                }
                if (isSubHeading) {
                  return (
                    <h4 key={idx} className="text-[14px] font-semibold text-foreground mt-4 mb-1">
                      {highlightKeyPhrases(paragraph)}
                    </h4>
                  );
                }
                if (isBullet) {
                  const bulletLines = paragraph.split("\n").filter(line => line.trim());
                  return (
                    <div key={idx} className="mb-2">
                      {bulletLines.map((line, bIdx) => (
                        <p key={bIdx} className="text-[14px] text-text-tertiary leading-[1.75] pl-2 mb-1">
                          {highlightKeyPhrases(line.trim())}
                        </p>
                      ))}
                    </div>
                  );
                }
                if (isBeforeAfter) {
                  const parts = paragraph.split("→");
                  return (
                    <div key={idx} className="flex flex-col gap-1 mb-3 mt-2">
                      {parts.map((part, pIdx) => (
                        <p key={pIdx} className="text-[14px] text-text-tertiary leading-[1.75]">
                          <span className="font-semibold italic text-foreground">
                            {part.trim().split(":")[0]}:
                          </span>
                          {highlightKeyPhrases(part.trim().substring(part.trim().indexOf(":") + 1))}
                        </p>
                      ))}
                    </div>
                  );
                }
                if (/^(Result:|Outcome:)/i.test(paragraph.trim())) {
                  return (
                    <p key={idx} className="text-[14px] text-text-tertiary leading-[1.75] mb-2">
                      <span className="font-semibold italic text-foreground">
                        {paragraph.split(":")[0]}:
                      </span>
                      {highlightKeyPhrases(paragraph.substring(paragraph.indexOf(":") + 1))}
                    </p>
                  );
                }
                return (
                  <p
                    key={idx}
                    className={`text-[14px] text-text-tertiary leading-[1.75] ${
                      idx !== sections.length - 1 ? "mb-3" : ""
                    }`}
                  >
                    {highlightKeyPhrases(paragraph)}
                  </p>
                );
              })}
            </div>
          )}

          {item.hasExternalLink && item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-foreground font-medium mt-4 hover:opacity-70 transition-opacity"
            >
              Visit project <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

const Experience = () => {
  const { slug } = useParams();

  if (slug) {
    return <ExperienceDetail slug={slug} />;
  }

  return <ExperienceList />;
};

export default Experience;
