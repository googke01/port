import BottomNav from "@/components/BottomNav";
import { TextShimmer } from "@/components/ui/text-shimmer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <h2 className="text-text-muted text-[15px] mb-4 font-normal">
          testimonials
        </h2>

        <div className="flex flex-col items-center justify-center py-16">
          <TextShimmer className="text-[22px] font-medium tracking-tight" duration={1.5}>
            real stories coming
          </TextShimmer>
          <div className="mt-3 h-[1px] w-16 bg-foreground/10 rounded-full" />
          <p className="text-[13px] text-text-muted mt-4">stay tuned</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Projects;
