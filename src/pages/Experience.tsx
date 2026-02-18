import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { experienceData } from "@/data/mock";
import BottomNav from "@/components/BottomNav";

const ExperienceList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <h2 className="text-text-muted text-[15px] mb-4 font-normal">
          the work
        </h2>

        <div className="bg-surface/90 backdrop-blur-sm rounded-card border border-border-subtle/40 shadow-card overflow-hidden">
          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between px-5 py-[14px] cursor-pointer hover:bg-surface-hover transition-colors duration-200 ${
                index !== experienceData.length - 1
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
            <span className="text-[11px] text-text-muted">·</span>
            <span className="text-[13px] text-text-muted">{item.duration}</span>
          </div>

          <p className="text-[14px] text-text-tertiary leading-[1.75] mb-4">
            {item.description}
          </p>

          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="text-[13px] text-foreground font-medium hover:opacity-70 transition-opacity"
            >
              See More
            </button>
          )}

          {expanded && (
            <div className="mt-2 animate-fadeIn">
              {sections.map((paragraph, idx) => {
                const isHeading = /^(The Problem|How I Solved It|The Impact)$/i.test(paragraph.trim());
                const isSubHeading = /^\d+\.\s/.test(paragraph.trim());
                const isBullet = paragraph.trim().startsWith("•");
                const isResult = /^(Result:|Outcome:|Before:|After:)/i.test(paragraph.trim());

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
                      {paragraph}
                    </h4>
                  );
                }
                if (isBullet) {
                  return (
                    <p key={idx} className="text-[14px] text-text-tertiary leading-[1.75] pl-2 mb-1">
                      {paragraph}
                    </p>
                  );
                }
                if (isResult) {
                  return (
                    <p key={idx} className="text-[14px] text-text-tertiary leading-[1.75] mb-2">
                      <span className="font-semibold italic text-foreground">
                        {paragraph.split(":")[0]}:
                      </span>
                      {paragraph.substring(paragraph.indexOf(":") + 1)}
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
                    {paragraph}
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
