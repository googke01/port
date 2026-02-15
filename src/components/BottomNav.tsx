import { useNavigate } from "react-router-dom";
import { Home, Mail } from "lucide-react";
import { socialLinks } from "@/data/mock";
import linkedinLogo from "@/assets/linkedin-logo.png";

const dockBorder = "border border-[#f5f5f5] bg-[#f5f5f5]";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="flex items-center justify-center dock-nav max-[670px]:flex-col max-[670px]:rounded-[24px] max-[670px]:p-4"
      style={{
        marginTop: '140px',
        width: '503px',
        height: '56px',
        borderRadius: '60px',
        background: 'transparent',
        boxShadow: 'none',
        gap: '20px',
        zIndex: 1000,
      }}
    >
      <div className="flex items-center gap-4 max-[670px]:order-1">
        <button
          onClick={() => navigate("/")}
          className={`flex items-center justify-center rounded-full transition-[background] duration-200 ease-in-out hover:bg-[hsl(0,0%,96%)] ${dockBorder}`}
          style={{ width: '44px', height: '44px' }}
          aria-label="Home"
        >
          <Home size={24} strokeWidth={2.2} color="#060606" />
        </button>

        <a
          href="https://www.linkedin.com/in/preetsuthar"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-1.5 rounded-full transition-[background] duration-200 ease-in-out hover:bg-[hsl(0,0%,96%)] ${dockBorder}`}
          style={{ height: '44px', paddingLeft: '12px', paddingRight: '12px' }}
          aria-label="LinkedIn"
        >
          <img src={linkedinLogo} alt="" style={{ width: '20px', height: 'auto' }} />
          <span style={{ fontSize: '15px', color: '#060606', fontWeight: 500 }}>linkedin</span>
        </a>

        <a
          href="mailto:contact@preetsuthar.me"
          className={`hidden max-[670px]:flex items-center justify-center rounded-full transition-[background] duration-200 ease-in-out hover:bg-[hsl(0,0%,96%)] ${dockBorder}`}
          style={{ width: '44px', height: '44px' }}
          aria-label="Mail"
        >
          <Mail size={24} strokeWidth={2.2} color="#060606" />
        </a>
      </div>

      <a
        href={socialLinks.bookACall}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-[background] duration-200 ease-in-out hover:bg-[#1a1a1a] max-[670px]:order-2 max-[670px]:w-full max-[670px]:text-center"
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

      <a
        href="mailto:contact@preetsuthar.me"
        className={`flex items-center justify-center rounded-full transition-[background] duration-200 ease-in-out hover:bg-[hsl(0,0%,96%)] max-[670px]:hidden ${dockBorder}`}
        style={{ width: '44px', height: '44px' }}
        aria-label="Mail"
      >
        <Mail size={24} strokeWidth={2.2} color="#060606" />
      </a>
    </nav>
  );
};

export default BottomNav;
