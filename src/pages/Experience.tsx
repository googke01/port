import { ArrowUpRight } from "lucide-react";
import { experienceData } from "@/data/mock";
import BottomNav from "@/components/BottomNav";

const Experience = () => {
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
              onClick={() => {
                if (item.hasExternalLink && item.url) {
                  window.open(item.url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="flex-1 min-w-0 mr-3">
                <p className="text-[15px] text-foreground font-medium leading-snug">
                  {item.name}
                </p>
                <p className="text-[12px] text-text-muted mt-0.5">
                  {item.description}
                </p>
              </div>
              {item.hasExternalLink && item.url && (
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="text-text-secondary flex-shrink-0"
                />
              )}
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Experience;
