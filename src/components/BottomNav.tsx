import { useNavigate } from "react-router-dom";
import { Home, Mail } from "lucide-react";
import { socialLinks } from "@/data/mock";

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const dockBorder = "border border-[#f5f5f5] bg-[#f5f5f5]";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="flex items-center justify-center dock-nav max-[639px]:flex-col max-[639px]:rounded-[24px] max-[639px]:p-4 max-[639px]:w-auto max-[639px]:inline-flex"
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
      <div className="flex items-center gap-4 max-[639px]:order-1">
        <button
          onClick={() => navigate("/")}
          className={`flex items-center justify-center rounded-full transition-[background] duration-200 ease-in-out hover:bg-[hsl(0,0%,96%)] ${dockBorder}`}
          style={{ width: '44px', height: '44px' }}
          aria-label="Home"
        >
          <Home size={24} strokeWidth={2.2} color="#060606" />
        </button>

        <a
          href="https://www.linkedin.com/in/dhyanptl/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-1.5 rounded-full transition-[background] duration-200 ease-in-out hover:bg-[hsl(0,0%,96%)] ${dockBorder}`}
          style={{ height: '44px', paddingLeft: '12px', paddingRight: '12px' }}
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
          <span style={{ fontSize: '15px', color: '#060606', fontWeight: 500 }}>linkedin</span>
        </a>

        <a
          href="mailto:dhyan.contact@gmail.com"
          className={`hidden max-[639px]:flex items-center justify-center rounded-full transition-[background] duration-200 ease-in-out hover:bg-[hsl(0,0%,96%)] ${dockBorder}`}
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

      <a
        href="mailto:dhyan.contact@gmail.com"
        className={`flex items-center justify-center rounded-full transition-[background] duration-200 ease-in-out hover:bg-[hsl(0,0%,96%)] max-[639px]:hidden ${dockBorder}`}
        style={{ width: '44px', height: '44px' }}
        aria-label="Mail"
      >
        <Mail size={24} strokeWidth={2.2} color="#060606" />
      </a>
    </nav>
  );
};

export default BottomNav;
