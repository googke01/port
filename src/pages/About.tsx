import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const aboutContent = [
  {
    label: "background",
    paragraphs: [
      "I'm an AI automation consultant. I help teams eliminate the repetitive, soul-crushing work that silently drains their productivity — so they can focus on what actually matters.",
    ],
  },
  {
    label: "experience",
    paragraphs: [
      "I've built products at Text Cortex, SolCard, and 21st.",
      "Now I design and ship intelligent automations — systems that think, adapt, and save real hours every week.",
    ],
  },
  {
    label: "approach",
    paragraphs: [
      "I don't start with tools. I start with the problem.",
      "I study how your team actually works, find the invisible bottlenecks, design a solution that feels effortless, and ship it fast.",
    ],
  },
  {
    label: "philosophy",
    paragraphs: [
      "The best automation is the kind you forget exists — it just works.",
      "No dashboards nobody checks. No workflows that need babysitting. Just less work, more output.",
    ],
  },
];

const contactItems = [
  {
    label: "book a call",
    url: "https://cal.com/preetsuthar",
  },
  {
    label: "linkedin",
    url: "https://linkedin.com/in/preetsuthar",
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
          {aboutContent.map((item, index) => (
            <div
              key={item.label}
              className={`px-5 py-[14px] ${
                index !== aboutContent.length - 1
                  ? "border-b border-secondary"
                  : ""
              }`}
            >
              <p className="text-[15px] text-foreground font-medium leading-snug">
                {item.label}
              </p>
              <div className="mt-1 space-y-2">
                {item.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[13px] text-text-tertiary leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
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
