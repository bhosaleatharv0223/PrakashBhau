import { useEffect, useMemo, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

type RecognitionGalleryPageProps = Readonly<{
  onNavigateRoute: (path: string) => void;
  onOpenBooking: () => void;
}>;

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

export default function RecognitionGalleryPage({ onNavigateRoute, onOpenBooking }: RecognitionGalleryPageProps) {
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
      <section className="relative overflow-hidden bg-[#F7EFE1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,226,172,0.45),_transparent_25%),linear-gradient(180deg,_rgba(217,172,95,0.08),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[#7a634f]">
                <button type="button" onClick={() => onNavigateRoute("/")} className="font-semibold transition-colors duration-200 hover:text-[#5c1119]">Home</button>
                <span className="text-[#c49d69]">/</span>
                <button type="button" onClick={() => onNavigateRoute("/recognition")} className="font-semibold transition-colors duration-200 hover:text-[#5c1119]">Recognition</button>
                <span className="text-[#c49d69]">/</span>
                <span className="font-semibold text-[#5c1119]">Honours & Trophies</span>
              </nav>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#f0cb8a] bg-[#fff6e9] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#a05b16]" style={{ fontFamily: "'Cinzel', serif" }}>
                <Camera className="h-3.5 w-3.5" /> Premium honours gallery
              </p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-[#241c1a] sm:text-5xl" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif', serif" }}>
                Honours, certificates and awards from a life of service
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#4d3c30]/85 sm:text-lg">
                Explore the full curated collection of 26 recognitions that document spiritual devotion, community leadership and public trust. Each certificate is presented as an honour of the journey, not an end in itself.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={onOpenBooking} className="rounded-full bg-[#5C1119] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 shadow-xl hover:-translate-y-0.5 hover:bg-[#34100f]">
                Book consultation
              </button>
              <button onClick={() => onNavigateRoute("/recognition")} className="rounded-full border border-[#d7a45a] bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8f4f17] transition-all duration-200 hover:-translate-y-0.5">
                Back to recognition
              </button>
            </div>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-[#d7a45a]/20 bg-white/85 p-8 shadow-[0_24px_80px_rgba(92,17,25,0.08)] sm:grid-cols-[0.9fr_0.55fr] lg:grid-cols-[0.95fr_0.45fr]">
            <div className="space-y-4">
              <div className="rounded-[1.75rem] bg-[#fef6e8] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5c1119]" style={{ fontFamily: "'Cinzel', serif" }}>Curated collection</p>
                <h2 className="mt-3 text-2xl font-black text-[#241c1a]" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>26 certificates, awards and moments of recognition</h2>
                <p className="mt-4 text-sm leading-7 text-[#5c1119]/75">
                  This gallery preserves the honours received over years of spiritual work and public service. Each image can be expanded to full-screen for a premium viewing experience.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Official certificates", value: "26 images" },
                  { label: "Fullscreen lightbox", value: "Keyboard navigation" },
                  { label: "Premium layout", value: "Curated experience" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-[#d7a45a]/15 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b76818]" style={{ fontFamily: "'Cinzel', serif" }}>{item.label}</p>
                    <p className="mt-3 text-xl font-black text-[#241c1a]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#FFF6E8] p-6 shadow-inner shadow-[#d7a45a]/10">
              <div className="mb-5 rounded-[1.75rem] bg-[#5C1119] p-6 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-[#F3D8A3]" style={{ fontFamily: "'Cinzel', serif" }}>Gallery highlights</p>
                <h3 className="mt-3 text-2xl font-black text-white">A refined showcase of recognition and trust</h3>
              </div>
              <div className="space-y-4 text-[#241c1a]/90">
                <p className="rounded-[1.5rem] bg-white/90 p-4">Each certificate represents a milestone of spiritual dedication, community service and honour.</p>
                <p className="rounded-[1.5rem] bg-white/90 p-4">Open any image to view details in a luxurious full-screen lightbox.</p>
                <p className="rounded-[1.5rem] bg-white/90 p-4">The gallery is designed for mobile and desktop, with polished cards and seamless interaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>Gallery</p>
            <h2 className="text-3xl font-black text-[#241c1a] sm:text-4xl" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif', serif" }}>Browse all honours and trophies</h2>
          </div>
          <div className="text-sm text-[#5c1119]/80">Tap any image to expand into the premium viewing mode.</div>
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
        <dialog open className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[rgba(20,10,4,0.92)] px-4 py-6 backdrop-blur-sm">
          <button className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-3 text-white transition-colors duration-200 hover:bg-white/20" onClick={() => setActiveIndex(null)} aria-label="Close lightbox">
            <X className="h-5 w-5" />
          </button>
          <div className="relative w-full max-w-6xl">
            <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)] sm:flex-row sm:items-center sm:justify-between">
              <div className="text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70" style={{ fontFamily: "'Cinzel', serif" }}>Honours full-screen view</p>
                <p className="mt-1 text-lg font-semibold">{activeIndex + 1} of {certificateUrls.length}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20" onClick={() => setActiveIndex((current) => (current === null ? 0 : (current - 1 + certificateUrls.length) % certificateUrls.length))} aria-label="View previous image">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20" onClick={() => setActiveIndex((current) => (current === null ? 0 : (current + 1) % certificateUrls.length))} aria-label="View next image">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-[2rem] border border-white/15 bg-[#110B08] p-4">
              <ImageWithFallback src={certificateUrls[activeIndex]} alt={`Recognition certificate ${activeIndex + 1}`} className="mx-auto max-h-[80vh] w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]" />
            </div>
          </div>
        </dialog>
      )}
    </main>
  );
}
