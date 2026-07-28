import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import GlobalNav from "@/app/components/GlobalNav";

interface RecognitionGalleryPageProps {
  onNavigateRoute: (path: string) => void;
  onOpenBooking: () => void;
  phone: string;
  whatsappLink: string;
  activePath: string;
}

const recognitionNavItems = [
  { label: "Home", path: "/" },
  { label: "Recognition", path: "/recognition" },
];

const certificateUrls = [
  "/certificates/20260713_152755.jpg.jpeg",
  "/certificates/20260713_153135.jpg.jpeg",
  "/certificates/20260713_153225.jpg.jpeg",
  "/certificates/20260713_153314.jpg.jpeg",
  "/certificates/20260713_153401.jpg.jpeg",
  "/certificates/20260713_153453.jpg.jpeg",
  "/certificates/20260713_153512.jpg.jpeg",
  "/certificates/20260713_153703.jpg.jpeg",
  "/certificates/20260713_153718.jpg.jpeg",
  "/certificates/20260713_153734.jpg.jpeg",
  "/certificates/20260713_153837.jpg.jpeg",
  "/certificates/20260713_153848.jpg.jpeg",
  "/certificates/20260713_153906.jpg.jpeg",
  "/certificates/20260713_154045.jpg.jpeg",
  "/certificates/20260713_154100.jpg.jpeg",
  "/certificates/20260713_154300.jpg.jpeg",
  "/certificates/20260713_154353.jpg.jpeg",
  "/certificates/20260713_154420.jpg.jpeg",
  "/certificates/20260713_154446.jpg.jpeg",
  "/certificates/20260713_154636.jpg.jpeg",
  "/certificates/20260713_154829.jpg.jpeg",
  "/certificates/20260713_154856.jpg.jpeg",
  "/certificates/20260713_154916.jpg.jpeg",
  "/certificates/20260713_155037.jpg.jpeg",
  "/certificates/20260713_155112.jpg.jpeg",
  "/certificates/20260713_155157.jpg.jpeg",
];

export default function RecognitionGalleryPage({ onNavigateRoute, onOpenBooking, phone, activePath }: RecognitionGalleryPageProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % certificateUrls.length));
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current === null ? 0 : (current - 1 + certificateUrls.length) % certificateUrls.length));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const visibleCards = useMemo(() => certificateUrls, []);

  return (
    <main className="min-h-screen bg-[#fcf7ef] text-[#241c1a]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <GlobalNav navItems={recognitionNavItems} onNavigateRoute={onNavigateRoute} onScrollTo={() => undefined} onOpenBooking={onOpenBooking} phone={phone} activePath={activePath} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#f0cb8a] bg-[#fff6e9] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#a05b16]" style={{ fontFamily: "'Cinzel', serif" }}>
              <Camera className="h-3.5 w-3.5" /> Recognition Gallery
            </div>
            <h1 className="text-3xl font-black text-[#241c1a] sm:text-4xl" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif', serif" }}>All honours and certificates</h1>
          </div>
          <button onClick={() => onNavigateRoute("/recognition")} className="inline-flex items-center gap-2 rounded-full border border-[#d7a45a] bg-white px-4 py-2 text-sm font-semibold text-[#8f4f17] transition-transform duration-200 hover:-translate-y-0.5">
            <ArrowLeft className="h-4 w-4" /> Return to Recognition
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleCards.map((src, index) => (
            <button
              key={src}
              onClick={() => setActiveIndex(index)}
              className={`group overflow-hidden rounded-[1.5rem] border border-[#ebd9b8] bg-white p-2 text-left shadow-[0_20px_45px_rgba(53,31,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(53,31,18,0.1)] ${isLoaded ? "opacity-100" : "opacity-0"}`}
              aria-label={`Open certificate ${index + 1}`}
            >
              <div className="overflow-hidden rounded-[1.2rem]">
                <ImageWithFallback src={src} alt={`Recognition certificate ${index + 1}`} className="h-[280px] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:h-[320px]" loading="lazy" decoding="async" />
              </div>
              <div className="px-2 pb-2 pt-3">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b76818]" style={{ fontFamily: "'Cinzel', serif" }}>Certificate {index + 1}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(18,10,6,0.88)] px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true">
          <button className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-3 text-white" onClick={() => setActiveIndex(null)} aria-label="Close lightbox">
            <X className="h-5 w-5" />
          </button>
          <div className="relative flex w-full max-w-5xl flex-col items-center">
            <div className="mb-4 flex items-center justify-between gap-3 text-sm text-white/80">
              <span>{activeIndex + 1} / {certificateUrls.length}</span>
              <div className="flex items-center gap-2">
                <button className="rounded-full border border-white/20 bg-white/10 p-2" onClick={() => setActiveIndex((current) => (current === null ? 0 : (current - 1 + certificateUrls.length) % certificateUrls.length))} aria-label="View previous image">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="rounded-full border border-white/20 bg-white/10 p-2" onClick={() => setActiveIndex((current) => (current === null ? 0 : (current + 1) % certificateUrls.length))} aria-label="View next image">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
              <ImageWithFallback src={certificateUrls[activeIndex]} alt={`Recognition certificate ${activeIndex + 1}`} className="max-h-[70vh] w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
