import React, { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoImg from "@/imports/logo.png";
import { Phone, Menu, X } from "lucide-react";

type NavItem = { label: string; id?: string; path?: string };

export default function GlobalNav({
  heroRef,
  navItems,
  onNavigateRoute,
  onScrollTo,
  onOpenBooking,
  phone,
  activePath,
}: {
  heroRef?: React.RefObject<HTMLElement>;
  navItems: NavItem[];
  onNavigateRoute: (p: string) => void;
  onScrollTo: (id: string) => void;
  onOpenBooking: () => void;
  phone: string;
  activePath?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navVariant, setNavVariant] = useState<"default" | "hidden" | "floating">("default");
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const navVariantRef = useRef(navVariant);

  useEffect(() => {
    const updateNavState = () => {
      const currentY = window.scrollY;
      const heroElement = heroRef?.current;
      const heroBottom = heroElement ? heroElement.offsetTop + heroElement.offsetHeight : 0;

      if (currentY + window.innerHeight < heroBottom - 24 || currentY < 24) {
        if (navVariantRef.current !== "default") {
          navVariantRef.current = "default";
          setNavVariant("default");
        }
        lastScrollYRef.current = currentY;
        return;
      }

      const delta = currentY - lastScrollYRef.current;
      if (Math.abs(delta) <= 24) return;

      const nextVariant = delta > 0 ? "hidden" : "floating";
      if (navVariantRef.current !== nextVariant) {
        navVariantRef.current = nextVariant;
        setNavVariant(nextVariant);
      }
      lastScrollYRef.current = currentY;
    };

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        updateNavState();
        tickingRef.current = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [heroRef]);

  const handleNavClick = (item: NavItem) => {
    if (item.path) {
      onNavigateRoute(item.path);
    } else if (item.id) {
      onScrollTo(item.id);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Announcement bar (maroon) */}
      <div className="bg-[#5C1119] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-wrap text-xs sm:text-sm">
          <span className="text-[#C9A227] hidden sm:inline" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>ॐ ॥ जय श्री राम ॥ ॐ</span>
          <span className="flex-1 text-center text-white/80">
            <span className="text-[#C9A227]"> • </span>
            14 वर्षांची श्री हनुमान उपासना
            <span className="text-[#C9A227]"> • </span>
            दश महाविद्याग्राही
            <span className="text-[#C9A227]"> • </span>
            सर्वात्मक महारुद्र परिवार ट्रस्ट
            <span className="text-[#C9A227]"> • </span>
          </span>
          <a href={`tel:${phone}`} className="flex items-center gap-1.5 text-[#C9A227] font-bold hover:text-white transition-colors whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>
            <Phone className="w-3 h-3" /> {phone}
          </a>
        </div>
      </div>

      {/* White nav */}
      <header
        className={`w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          navVariant === "default"
            ? "sticky top-0 bg-white/97 backdrop-blur-md shadow-sm"
            : navVariant === "floating"
            ? "sticky top-3 bg-transparent"
            : "sticky top-0 pointer-events-none opacity-0 -translate-y-6"
        }`}
        style={{ borderBottom: navVariant === "default" ? "1px solid rgba(201,162,39,0.2)" : "1px solid transparent" }}
      >
        <nav className={`mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu ${
          navVariant === "floating"
            ? "max-w-[34rem] rounded-full border border-[#C9A227]/15 bg-white/95 shadow-[0_20px_50px_rgba(36,28,26,0.16)] backdrop-blur-xl"
            : "max-w-7xl rounded-none"
        }`}>
          <button onClick={() => handleNavClick({ id: "hero" })} className="flex items-center gap-2.5 sm:gap-3 md:gap-4 flex-shrink-0 group mr-2 sm:mr-3 lg:mr-4 min-h-[44px] py-1">
            <div className="w-[3.5rem] h-[3.5rem] sm:w-[3.8rem] sm:h-[3.8rem] rounded-full overflow-hidden flex-shrink-0 transition-all duration-200 group-hover:scale-105" style={{ border: "3px solid #E8622C", boxShadow: "0 0 0 3.5px rgba(201,162,39,0.22), 0 10px 24px rgba(92,17,25,0.14)" }}>
              <ImageWithFallback src={logoImg} alt="Guruvarya Shri Prakashbhau Shinde" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center text-left leading-tight min-w-0">
              <div className="flex flex-col">
                <div className="font-black text-[#5C1119] text-[0.95rem] sm:text-[1rem] tracking-[0.14em]" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>गुरुवर्य</div>
                <div className="text-[#241C1A]/75 text-[0.66rem] sm:text-[0.72rem] md:text-[0.78rem] font-semibold uppercase tracking-[0.26em] whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>Prakashbhau Shinde</div>
              </div>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.path && activePath === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`px-4.5 py-2 text-sm font-semibold text-[#241C1A] rounded-lg transition-all duration-200 hover:text-[#5C1119] hover:bg-[#5C1119]/5 tracking-wide ${isActive ? "bg-[#5C1119]/6 text-[#5C1119]" : ""}`}
                  style={{ fontFamily: "'Cinzel', serif", border: "1px solid transparent" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.3)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent"; }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${phone}`} className="flex items-center gap-1.5 text-sm font-medium text-[#5C1119] hover:text-[#E8622C] transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
              <Phone className="w-4 h-4" /> {phone}
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-white text-sm font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-xl tracking-wider"
              style={{ fontFamily: "'Cinzel', serif", background: "linear-gradient(135deg, #E8622C, #C9422C)", boxShadow: "0 4px 15px rgba(232,98,44,0.35)" }}
            >
              Book Consultation
            </button>
          </div>

          <button className="lg:hidden p-2 text-[#5C1119]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden bg-white px-4 py-4 space-y-1" style={{ borderTop: "1px solid rgba(201,162,39,0.2)" }}>
            {navItems.map((item) => (
              <button key={item.label} onClick={() => handleNavClick(item)} className="w-full text-left px-4 py-3 rounded-xl text-[#241C1A] hover:text-[#5C1119] hover:bg-[#FBF3E7] transition-colors font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t space-y-2" style={{ borderColor: "rgba(201,162,39,0.2)" }}>
              <a href={`tel:${phone}`} className="flex items-center gap-2 px-4 py-3 text-[#5C1119] font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                <Phone className="w-4 h-4" /> {phone}
              </a>
              <button onClick={() => { onOpenBooking(); setIsMenuOpen(false); }} className="w-full py-3.5 text-white font-bold rounded-xl tracking-wider" style={{ fontFamily: "'Cinzel', serif", background: "linear-gradient(135deg, #E8622C, #C9422C)" }}>
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
