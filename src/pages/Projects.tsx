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

        <p className="text-[15px] text-text-muted">real stories coming</p>
      </main>

      <BottomNav />
    </div>
  );
};

export default Projects;
