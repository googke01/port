import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/mock";
import BottomNav from "@/components/BottomNav";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <h2 className="text-text-muted text-[15px] mb-4 font-normal">
          testimonials
        </h2>

        <div className="bg-surface/90 backdrop-blur-sm rounded-card border border-border-subtle/40 shadow-card overflow-hidden">
          {projectsData.map((project, index) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-5 py-[14px] cursor-pointer hover:bg-surface-hover transition-colors duration-200 group ${
                index !== projectsData.length - 1
                  ? "border-b border-secondary"
                  : ""
              }`}
            >
              <div className="flex-1 min-w-0 mr-3">
                <p className="text-[15px] text-foreground font-medium">
                  {project.name}
                </p>
                <p className="text-[12px] text-text-muted mt-0.5">
                  {project.description}
                </p>
              </div>
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="text-text-secondary group-hover:text-foreground transition-colors duration-200 flex-shrink-0"
              />
            </a>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Projects;
