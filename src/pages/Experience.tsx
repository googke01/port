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
                <p className="text-[12px] text-text-muted mt-0.5">
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
  const item = experienceData.find((e) => e.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 pb-20">
        <p className="text-text-tertiary">Project not found.</p>
        <BottomNav />
      </div>
    );
  }

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

        <h1 className="text-[20px] font-semibold text-foreground mb-1 leading-tight">
          {item.name}
        </h1>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[13px] text-text-muted">{item.role}</span>
          <span className="text-[11px] text-text-muted">·</span>
          <span className="text-[13px] text-text-muted">{item.duration}</span>
        </div>
        <p className="text-[13px] text-text-muted mb-6">{item.description}</p>

        <div className="bg-surface/90 backdrop-blur-sm rounded-card border border-border-subtle/40 shadow-card p-6">
          {item.content.split("\n").map((paragraph, idx) => (
            <p
              key={idx}
              className={`text-[14px] text-text-tertiary leading-[1.75] ${
                idx !== item.content.split("\n").length - 1 ? "mb-4" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

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
