import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { experienceData } from "@/data/mock";
import BottomNav from "@/components/BottomNav";

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
              className={
                index !== experienceData.length - 1
                  ? "border-b border-secondary"
                  : ""
              }
            >
              <div
                className="flex items-center justify-between px-5 py-[14px] cursor-pointer hover:bg-surface-hover transition-colors duration-200"
                onClick={() => toggleExpand(item.id)}
              >
                <span className="text-[15px] text-foreground font-medium">
                  {item.name}
                </span>
                {item.hasExternalLink && item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-foreground transition-colors duration-200 p-1"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit ${item.name}`}
                  >
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </a>
                )}
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedId === item.id
                    ? "max-h-24 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-3 text-[13px] text-text-tertiary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Experience;
