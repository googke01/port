import BottomNav from "@/components/BottomNav";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <h2 className="text-text-muted text-[15px] mb-4 font-normal">
          testimonials
        </h2>

        <div className="flex flex-col items-center justify-center py-16">
          <div className="relative">
            <p className="text-[22px] font-medium text-foreground tracking-tight">
              real stories coming
            </p>
            <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent animate-pulse" />
          </div>
          <p className="text-[13px] text-text-muted mt-4 animate-pulse" style={{ animationDuration: '3s' }}>
            stay tuned
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Projects;
