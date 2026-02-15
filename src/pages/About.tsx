import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const aboutItems = [
  {
    label: "background",
    content: "ai automation consultant helping teams eliminate repetitive work that silently drains productivity.",
  },
  {
    label: "experience",
    content: "built products at text cortext, solcard, and 21st. now focused on designing intelligent automations.",
  },
  {
    label: "approach",
    content: "understand the problem deeply, design a solution that feels invisible, and ship it fast.",
  },
  {
    label: "philosophy",
    content: "the best automation is the kind you forget exists — it just works.",
  },
];

const contactItems = [
  {
    label: "book a call",
    url: "https://cal.com/preetsuthar",
  },
  {
    label: "telegram",
    url: "https://t.me/preetsuthar",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-[13px] text-text-secondary hover:text-foreground mb-6 transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          back
        </button>

        <h2 className="text-text-muted text-[15px] mb-4 font-normal">
          about me
        </h2>

        <div className="bg-surface/90 backdrop-blur-sm rounded-card border border-border-subtle/40 shadow-card overflow-hidden">
          {aboutItems.map((item, index) => (
            <div
              key={item.label}
              className={`px-5 py-[14px] ${
                index !== aboutItems.length - 1
                  ? "border-b border-secondary"
                  : ""
              }`}
            >
              <p className="text-[15px] text-foreground font-medium leading-snug">
                {item.label}
              </p>
              <p className="text-[13px] text-text-tertiary mt-1 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-text-muted text-[15px] mb-4 mt-8 font-normal">
          get in touch
        </h2>

        <div className="bg-surface/90 backdrop-blur-sm rounded-card border border-border-subtle/40 shadow-card overflow-hidden">
          {contactItems.map((item, index) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-5 py-[14px] cursor-pointer hover:bg-surface-hover transition-colors duration-200 ${
                index !== contactItems.length - 1
                  ? "border-b border-secondary"
                  : ""
              }`}
            >
              <p className="text-[15px] text-foreground font-medium leading-snug">
                {item.label}
              </p>
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="text-text-secondary flex-shrink-0"
              />
            </a>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default About;
