import BottomNav from "@/components/BottomNav";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '51px' }} id="main-content">
        <h2 className="text-text-muted text-[15px] mb-4 font-normal">
          testimonials
        </h2>

        <div className="flex flex-col items-center justify-center py-16">
          <p
            className="text-[22px] font-medium tracking-tight animate-[shimmer-text_3s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--foreground)) 0%, hsl(var(--foreground)) 40%, hsl(var(--foreground) / 0.4) 50%, hsl(var(--foreground)) 60%, hsl(var(--foreground)) 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            real stories coming
          </p>
          <div className="mt-3 h-[1px] w-16 bg-foreground/10 relative overflow-hidden rounded-full">
            <span
              className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite_0.5s]"
              style={{
                background: 'linear-gradient(90deg, transparent, hsl(var(--foreground) / 0.2), transparent)',
              }}
            />
          </div>
          <p className="text-[13px] text-text-muted mt-4">stay tuned</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Projects;
