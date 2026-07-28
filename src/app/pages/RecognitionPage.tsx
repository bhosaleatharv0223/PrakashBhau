import { useMemo, useState } from "react";
import { ArrowRight, Award, BookOpen, Heart, Phone, Sparkles, Star, Users, Zap, Quote, Camera, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import GlobalNav from "@/app/components/GlobalNav";
import heroImg from "@/imports/Hero_section.jpeg";
import logoImg from "@/imports/logo.png";

interface RecognitionPageProps {
  onNavigateRoute: (path: string) => void;
  onOpenBooking: () => void;
  phone: string;
  whatsappLink: string;
  activePath: string;
}

type TimelineItem = {
  year: string;
  title: string;
  desc: string;
  accent: string;
};

const recognitionNavItems = [
  { label: "Home", path: "/" },
  { label: "Recognition", path: "/recognition" },
];

const timeline: TimelineItem[] = [
  { year: "2010", title: "Beginning of Hanuman Tapasya", desc: "A disciplined journey of devotion rooted in deep surrender to Lord Hanuman and daily spiritual practice.", accent: "14+ years" },
  { year: "2012", title: "Dasha Mahavidya Blessings", desc: "A sacred and rare grace that affirmed the depth of devotion and the spiritual responsibility that followed.", accent: "Grace received" },
  { year: "2015", title: "Trust Foundation", desc: "The creation of Sarvatmak Maharudra Parivar Trust opened the way for service, education, and public welfare.", accent: "Service rooted" },
  { year: "2018", title: "Doctorate", desc: "Academic recognition of a life devoted to spiritual learning, guidance, and the upliftment of others.", accent: "Academic honour" },
  { year: "2020", title: "Mathadhipati", desc: "The spiritual leadership role broadened his mission into guidance for a wider spiritual community.", accent: "Leadership" },
  { year: "2024", title: "National Recognition", desc: "Public acknowledgement of the values, service, and quiet influence carried through years of steady commitment.", accent: "Honoured" },
  { year: "Today", title: "Continuing Mission", desc: "The journey continues through guidance, seva, and a living legacy for future generations.", accent: "Ongoing" },
];

const stats = [
  { value: "14+", label: "Years of Tapasya" },
  { value: "100+", label: "Recognition Certificates" },
  { value: "26", label: "Awards & Trophies" },
  { value: "Thousands", label: "Lives Guided" },
];

const highlights = [
  { title: "Recognised by Saints", copy: "Honoured for the depth of devotion, discipline, and the grace carried through years of sincere practice." },
  { title: "Recognised by Institutions", copy: "Acknowledged by organisations and academic spaces for meaningful contribution and spiritual leadership." },
  { title: "Recognised through Service", copy: "The path of seva has become a visible measure of the trust placed in his mission and work." },
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

export default function RecognitionPage({ onNavigateRoute, onOpenBooking, phone, activePath }: RecognitionPageProps) {
  const [isHoveringMarquee, setIsHoveringMarquee] = useState(false);
  const cardSet = useMemo(() => [...certificateUrls, ...certificateUrls], []);

  return (
    <main className="min-h-screen bg-[#fcf7ef] text-[#241c1a]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <GlobalNav
        navItems={recognitionNavItems}
        onNavigateRoute={onNavigateRoute}
        onScrollTo={() => undefined}
        onOpenBooking={onOpenBooking}
        phone={phone}
        activePath={activePath}
      />

      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f7efe1]">
        <img src={heroImg} alt="Recognition hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,_rgba(255,247,239,0.9)_0%,_rgba(255,247,239,0.54)_40%,_rgba(255,247,239,0.22)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl rounded-[2rem] border border-white/50 bg-white/60 p-8 shadow-[0_24px_80px_rgba(35,22,20,0.16)] backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b76818]" style={{ fontFamily: "'Cinzel', serif" }}>
              <Sparkles className="h-4 w-4" /> Recognition
            </div>
            <h1 className="mb-5 text-4xl font-black leading-tight text-[#241c1a] sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif', serif" }}>
              Honouring a Lifetime of Spiritual Excellence
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#4b352a] sm:text-xl">
              A premium extension of the existing website, created to acknowledge devotion, service, and the enduring impact of a life guided by purpose.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => onNavigateRoute("/recognition/gallery")} className="flex items-center gap-2 rounded-full bg-[#e58a2f] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(229,138,47,0.26)] transition-transform duration-200 hover:-translate-y-0.5">
                Explore Achievements <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => onNavigateRoute("/recognition/gallery")} className="rounded-full border border-[#d6a35f]/60 bg-[#fffaf1] px-6 py-3 text-sm font-semibold text-[#8a4b14] transition-transform duration-200 hover:-translate-y-0.5">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-[#e8d6b3] bg-white/80 p-6 shadow-[0_30px_60px_rgba(53,31,18,0.06)] sm:p-8">
            <img src={logoImg} alt="Guruvarya Shri Prakashbhau Shinde" className="h-72 w-full rounded-[1.5rem] object-cover object-center" />
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f0cb8a] bg-[#fff6e9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#a05b16]" style={{ fontFamily: "'Cinzel', serif" }}>
              <Quote className="h-3.5 w-3.5" /> Recognition story
            </div>
            <h2 className="text-3xl font-black text-[#241c1a] sm:text-4xl" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif', serif" }}>
              A life shaped by devotion, service, and the grace of spiritual excellence
            </h2>
            <p className="text-lg leading-8 text-[#5f493d]">
              Over 14+ years of Hanuman Sadhana, the blessings of Dasha Mahavidya, and a lifelong commitment to service have created a path that continues to inspire devotees, institutions, and society alike.
            </p>
            <p className="text-lg leading-8 text-[#5f493d]">
              From being recognised by saints and organisations to building a trust rooted in welfare and upliftment, this recognition experience reflects the quiet dignity of a mission that has grown through sincerity and compassion.
            </p>
            <blockquote className="rounded-[1.5rem] border border-[#f0d8a9] bg-[#fff8eb] p-6 text-lg italic leading-8 text-[#8f4f17]">
              “The true measure of a spiritual life is not applause, but the quiet transformation it creates in the lives of others.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b76818]" style={{ fontFamily: "'Cinzel', serif" }}>Recognition timeline</p>
            <h2 className="text-3xl font-black text-[#241c1a] sm:text-4xl" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif', serif" }}>Milestones of grace and purpose</h2>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {timeline.map((item, index) => (
            <div key={item.title} className="rounded-[1.75rem] border border-[#ead9b8] bg-white/85 p-6 shadow-[0_20px_50px_rgba(53,31,18,0.06)]" style={{ animationDelay: `${index * 70}ms` }}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e58a2f] text-white">{index + 1}</div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b76818]" style={{ fontFamily: "'Cinzel', serif" }}>{item.year}</div>
                  <div className="text-xs text-[#8f4f17]">{item.accent}</div>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#241c1a]">{item.title}</h3>
              <p className="text-base leading-8 text-[#5f493d]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-[#ecd6b8] bg-[linear-gradient(145deg,_#fffdf8_0%,_#fef3df_100%)] p-7 text-center shadow-[0_20px_50px_rgba(53,31,18,0.05)]">
              <div className="text-4xl font-black text-[#c96e1c] sm:text-5xl" style={{ fontFamily: "'Cinzel', serif" }}>{stat.value}</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#8f4f17]" style={{ fontFamily: "'Cinzel', serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b76818]" style={{ fontFamily: "'Cinzel', serif" }}>Certificate showcase</p>
            <h2 className="text-3xl font-black text-[#241c1a] sm:text-4xl" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif', serif" }}>Honours and acknowledgements</h2>
          </div>
          <button onClick={() => onNavigateRoute("/recognition/gallery")} className="hidden items-center gap-2 rounded-full border border-[#d8a24c] bg-[#fff8eb] px-4 py-2 text-sm font-semibold text-[#8f4f17] transition-transform duration-200 hover:-translate-y-0.5 sm:flex">
            Recognition Gallery <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div
          className="mt-8 overflow-hidden rounded-[2rem] border border-[#ebd9b8] bg-white/70 p-3 shadow-[0_25px_55px_rgba(53,31,18,0.07)]"
          onMouseEnter={() => setIsHoveringMarquee(true)}
          onMouseLeave={() => setIsHoveringMarquee(false)}
          onFocus={() => setIsHoveringMarquee(true)}
          onBlur={() => setIsHoveringMarquee(false)}
          tabIndex={0}
        >
          <div className="marquee-track flex gap-5" style={{ animationPlayState: isHoveringMarquee ? "paused" : "running" }}>
            {cardSet.map((src, index) => (
              <div key={`${src}-${index}`} className="w-[240px] shrink-0 overflow-hidden rounded-[1.4rem] border border-[#ecd7b6] bg-white p-2 shadow-[0_18px_35px_rgba(36,28,26,0.07)] sm:w-[280px] lg:w-[320px]">
                <ImageWithFallback src={src} alt={`Recognition certificate ${index + 1}`} className="h-[320px] w-full rounded-[1rem] object-cover object-center sm:h-[360px]" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#ead9b8] bg-[linear-gradient(135deg,_#fff8eb_0%,_#fdf0d2_100%)] p-8 shadow-[0_20px_50px_rgba(53,31,18,0.06)]">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b76818]" style={{ fontFamily: "'Cinzel', serif" }}>Recognition domains</p>
            <h2 className="text-3xl font-black text-[#241c1a] sm:text-4xl" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif', serif" }}>The honour extends across devotion, leadership, and service</h2>
            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-[#ecd7b6] bg-white/70 p-4">
                  <h3 className="mb-2 text-lg font-bold text-[#241c1a]">{item.title}</h3>
                  <p className="text-base leading-7 text-[#5f493d]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#ead9b8] bg-[#241c1a] p-8 text-white shadow-[0_20px_50px_rgba(53,31,18,0.08)]">
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#f0c472]" style={{ fontFamily: "'Cinzel', serif" }}>
              <Camera className="h-4 w-4" /> Gallery-ready experience
            </div>
            <h2 className="text-3xl font-black sm:text-4xl" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif', serif" }}>A premium gallery section that grows with every new honour</h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              The gallery presents the full collection of certificates, trophies, photographs, and public moments in an elegant, responsive flow that can expand naturally over time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => onNavigateRoute("/recognition/gallery")} className="flex items-center gap-2 rounded-full bg-[#e58a2f] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5">
                View Full Gallery <ChevronRight className="h-4 w-4" />
              </button>
              <button onClick={onOpenBooking} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-[#ffe2ab] transition-transform duration-200 hover:-translate-y-0.5">
                <Phone className="h-4 w-4" /> Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
