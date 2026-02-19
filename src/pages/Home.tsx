import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Briefcase, PenTool, FolderOpen } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navCards = [
  { icon: Briefcase, label: "The Work", path: "/work" },
  { icon: PenTool, label: "How I Work", path: "/process" },
  { icon: FolderOpen, label: "Case Studies", path: "/case-studies" },
];

const greetings = [
  "hello", "こんにちは", "hola", "bonjour", "hallo",
  "ciao", "olá", "안녕하세요", "مرحبا", "नमस्ते",
  "สวัสดี", "xin chào", "привет", "γεια σας",
];

const Home = () => {
  const navigate = useNavigate();
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isBlurring, setIsBlurring] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setHasEntered(true));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlurring(true);
      setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
        setIsBlurring(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-0 overflow-x-hidden w-full max-w-full">
      <main className="text-center animate-fadeIn w-full flex flex-col items-center px-4" style={{ maxWidth: '1000px', marginTop: '51px' }} id="main-content">
        <p
          className="text-foreground font-medium tracking-wide"
          style={{
            fontSize: '28px',
            filter: isBlurring ? "blur(6px)" : "blur(0px)",
            opacity: hasEntered ? (isBlurring ? 0.3 : 1) : 0,
            transform: hasEntered
              ? (isBlurring ? "translateY(0) scale(0.97)" : "translateY(0) scale(1)")
              : "translateY(20px) scale(0.97)",
            transition: "filter 0.4s ease, opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {greetings[greetingIndex]}
        </p>
        <h1 className="text-foreground font-medium tracking-[-0.01em]" style={{ fontSize: '22px', marginTop: '10px' }}>
          i'm{' '}
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  onClick={() => navigate('/about')}
                  className="underline decoration-foreground underline-offset-4 cursor-pointer hover:opacity-70 transition-opacity"
                >
                  dhyan
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs">
                learn more about me
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {' '}— ai automation consultant
        </h1>
        <p className="font-normal leading-relaxed" style={{ fontSize: '16px', color: 'hsl(var(--muted-foreground))', marginTop: '10px' }}>
          Your team is losing hours to work that shouldn't exist.
          <br />
          <span className="text-foreground font-medium" style={{ fontSize: '16px' }}>I fix it.</span>
        </p>

        <div className="grid grid-cols-3 max-[639px]:grid-cols-2 max-[639px]:max-w-[472px] max-[500px]:max-w-full max-[500px]:w-full" style={{ gap: '14px', marginTop: '40px' }}>
          {navCards.map(({ icon: Icon, label, path }, index) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`group bg-accent flex flex-col justify-between items-start text-left cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 w-[194px] h-[194px] max-[639px]:w-[229px] max-[639px]:h-[229px] max-[500px]:!w-full max-[500px]:!h-auto max-[500px]:aspect-square ${
                index === navCards.length - 1 ? 'max-[639px]:col-span-2 max-[639px]:!w-full max-[639px]:!h-[233px] max-[500px]:!aspect-[2/1]' : ''
              }`}
              style={{ borderRadius: '24px', padding: '32px 24px' }}
            >
              <Icon
                size={28}
                style={{ color: 'hsl(var(--muted-foreground))' }}
                className="group-hover:text-foreground transition-colors duration-300"
                strokeWidth={1.5}
              />
              <span className="text-foreground font-medium" style={{ fontSize: '18px' }}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
