import { useNavigate } from "react-router-dom";
import { Home, Mail } from "lucide-react";
import { socialLinks } from "@/data/mock";
import linkedinLogo from "@/assets/linkedin-logo.png";
import { Dock, DockIcon } from "@/components/ui/dock";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <Dock
      magnification={56}
      distance={120}
      direction="middle"
      className="dock-nav border-[#f5f5f5] bg-[#f5f5f5] max-[639px]:flex-col max-[639px]:rounded-[24px] max-[639px]:p-4 max-[639px]:w-auto max-[639px]:inline-flex max-[639px]:h-auto"
      style={{
        marginTop: '140px',
        borderRadius: '60px',
        gap: '20px',
        zIndex: 1000,
        padding: '6px 12px',
      }}
    >
      <DockIcon
        magnification={56}
        distance={120}
        className="border border-[#f5f5f5] bg-[#f5f5f5] hover:bg-[hsl(0,0%,96%)] transition-[background] duration-200"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center w-full h-full rounded-full"
          aria-label="Home"
        >
          <Home size={24} strokeWidth={2.2} color="#060606" />
        </button>
      </DockIcon>

      <DockIcon
        magnification={56}
        distance={120}
        className="border border-[#f5f5f5] bg-[#f5f5f5] hover:bg-[hsl(0,0%,96%)] transition-[background] duration-200 !w-auto !aspect-auto"
      >
        <a
          href="https://www.linkedin.com/in/preetsuthar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-full px-3 h-full"
          aria-label="LinkedIn"
        >
          <img src={linkedinLogo} alt="" style={{ width: '20px', height: 'auto' }} />
          <span style={{ fontSize: '15px', color: '#060606', fontWeight: 500 }}>linkedin</span>
        </a>
      </DockIcon>

      <DockIcon
        magnification={56}
        distance={120}
        className="hidden max-[639px]:flex border border-[#f5f5f5] bg-[#f5f5f5] hover:bg-[hsl(0,0%,96%)] transition-[background] duration-200"
      >
        <a
          href="mailto:contact@preetsuthar.me"
          className="flex items-center justify-center w-full h-full rounded-full"
          aria-label="Mail"
        >
          <Mail size={24} strokeWidth={2.2} color="#060606" />
        </a>
      </DockIcon>

      <a
        href={socialLinks.bookACall}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-[background] duration-200 ease-in-out hover:bg-[#1a1a1a] max-[639px]:order-2 max-[639px]:text-center max-[639px]:w-[227.53px]"
        style={{
          padding: '11px 24px',
          borderRadius: '50px',
          fontSize: '15px',
          fontWeight: 500,
          background: '#060606',
          color: '#ffffff',
        }}
      >
        book a call
      </a>

      <DockIcon
        magnification={56}
        distance={120}
        className="max-[639px]:hidden border border-[#f5f5f5] bg-[#f5f5f5] hover:bg-[hsl(0,0%,96%)] transition-[background] duration-200"
      >
        <a
          href="mailto:contact@preetsuthar.me"
          className="flex items-center justify-center w-full h-full rounded-full"
          aria-label="Mail"
        >
          <Mail size={24} strokeWidth={2.2} color="#060606" />
        </a>
      </DockIcon>
    </Dock>
  );
};

export default BottomNav;
