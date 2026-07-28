import { ArrowRight, Award, Heart, Phone, Sparkles, Star, Users, Zap } from "lucide-react";
import GlobalNav from "@/app/components/GlobalNav";
import PremiumTrophyExhibit from '@/app/components/PremiumTrophyExhibit';

interface JourneyRecognitionPageProps {
  onNavigateRoute: (path: string) => void;
  onOpenBooking: () => void;
  phone: string;
  whatsappLink: string;
  activePath: string;
}

const recognitionNavItems = [
  { label: "Home", path: "/" },
  { label: "Recognition", path: "/journey-and-recognition" },
];

const journeyHighlights = [
  { icon: Sparkles, title: "Years of Spiritual Practice", desc: "A lifelong path of devotion shaped through disciplined Hanuman Upasana and silent inner transformation." },
  { icon: Heart, title: "Service to Society", desc: "Extending compassion through trust-led welfare work, guidance, and community support across many lives." },
  { icon: Users, title: "Guidance & Counselling", desc: "Offering presence and counsel to individuals and families seeking clarity, healing, and purpose." },
  { icon: Award, title: "Recognitions & Trust", desc: "Honoured through public service, spiritual leadership, and the trust earned over years of sincere commitment." },
];

const timeline = [
  { year: "2010", title: "The Sadhana Begins", desc: "A formal beginning of spiritual discipline rooted in devotion, discipline, and selfless service." },
  { year: "2012", title: "Spiritual Milestones", desc: "Recognised for deeper commitment, inner growth, and the ability to guide others with humility." },
  { year: "2015", title: "Institutional Service", desc: "Extended the mission through charitable and community-oriented initiatives with long-term impact." },
  { year: "2018", title: "Public Recognition", desc: "Gained wider acknowledgment for spiritual leadership and commitment to social welfare." },
  { year: "2020", title: "Continued Guidance", desc: "Increased outreach through counselling, public discourse, and compassionate support for seekers." },
];

const certificationCards = [
  { title: "Spiritual Education Recognition", org: "Academic & Spiritual Institutions", desc: "A formal acknowledgment of scholarly and spiritual contribution.", year: "2018" },
  { title: "Community Service Honor", org: "Public & Social Initiatives", desc: "Recognition for sustained contribution to welfare and community care.", year: "2021" },
  { title: "Religious Leadership Appreciation", org: "Devotional Community", desc: "Appreciation earned through guidance, service, and public spiritual leadership.", year: "2023" },
];

const awardCards = [
  { title: "Social Service Award", org: "Community Event", desc: "Honoured for tireless support and compassionate outreach.", year: "2020" },
  { title: "Spiritual Leadership Trophy", org: "Religious Gathering", desc: "Recognised for inspiring devotion and service through meaningful guidance.", year: "2022" },
  { title: "Dedicated Service Honour", org: "Trust & Welfare Program", desc: "A tribute to years of humble commitment and public benefit.", year: "2024" },
];

export default function JourneyRecognitionPage({ onNavigateRoute, onOpenBooking, phone, whatsappLink, activePath }: JourneyRecognitionPageProps) {
  return (
    <main className="min-h-screen bg-[#FBF3E7] text-[#241C1A]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <GlobalNav
        navItems={recognitionNavItems}
        onNavigateRoute={onNavigateRoute}
        onScrollTo={() => undefined}
        onOpenBooking={onOpenBooking}
        phone={phone}
        activePath={activePath}
      />
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
        aria-label="Recognition hero with Shri Prakashbhau Shinde and respected personalities"
        style={{
          backgroundImage: `radial-gradient(circle at top left, rgba(201,162,39,0.16), transparent 40%), linear-gradient(135deg, rgba(92,17,25,0.72) 0%, rgba(58,11,16,0.7) 100%), url('/WhatsApp Image 2026-07-13 at 5.40.35 PM.jpeg')`,
          backgroundSize: 'auto, auto, cover',
          backgroundPosition: 'left top, center, 40% 35%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-8 top-10 h-32 w-32 rounded-full border border-[#C9A227]/30" />
          <div className="absolute bottom-10 right-12 h-44 w-44 rounded-full border border-[#C9A227]/20" />
        </div>
          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl text-white">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/35 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]" style={{ fontFamily: "'Cinzel', serif" }}>
              <Sparkles className="h-3.5 w-3.5" /> Journey & Recognition
            </span>
            <h1 className="mb-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              Recognition
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              A lifelong journey of spiritual devotion, selfless service, guidance, and the recognitions earned through unwavering dedication to society.
            </p>
          </div>
          
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>The philosophy</p>
            <h2 className="mb-5 text-3xl font-black text-[#241C1A] sm:text-4xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              Guided by devotion, strengthened by service
            </h2>
            <p className="text-lg leading-8 text-[#241C1A]/75">
              Every milestone in this journey has been shaped by years of Hanuman Upasana, spiritual discipline, and a deep commitment to helping devotees and society find steadiness, purpose, and peace.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#241C1A]/75">
              Recognition has never been the motive; it has remained a natural reflection of sincere work, public trust, and a life devoted to uplifting others.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#C9A227]/20 bg-white/80 p-8 shadow-[0_20px_60px_rgba(92,17,25,0.08)]">
            <div className="flex items-center gap-3 text-[#5C1119]">
              <Star className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.25em]" style={{ fontFamily: "'Cinzel', serif" }}>Journey in essence</span>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#241C1A]/75">
              <div className="flex items-start gap-3 rounded-2xl bg-[#FBF3E7] p-4">
                <Zap className="mt-1 h-4 w-4 shrink-0 text-[#E8622C]" />
                <span>Years of spiritual practice and disciplined devotion.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-[#FBF3E7] p-4">
                <Heart className="mt-1 h-4 w-4 shrink-0 text-[#E8622C]" />
                <span>Service to devotees, families, and communities through compassion and guidance.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-[#FBF3E7] p-4">
                <Award className="mt-1 h-4 w-4 shrink-0 text-[#E8622C]" />
                <span>Recognitions earned through humility, dedication, and sustained effort.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>Journey highlights</p>
            <h2 className="text-3xl font-black text-[#241C1A] sm:text-4xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>Milestones of purpose and service</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {journeyHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group rounded-[1.75rem] border border-[#C9A227]/15 bg-white/85 p-6 shadow-[0_16px_40px_rgba(36,28,26,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(92,17,25,0.12)]" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5C1119] text-[#C9A227]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#241C1A]" style={{ fontFamily: "'Cinzel', serif" }}>{item.title}</h3>
                <p className="text-sm leading-7 text-[#241C1A]/70">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Premium two-row trophy exhibit (completely new implementation) */}
      <PremiumTrophyExhibit />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#C9A227]/15 bg-white/85 p-8 shadow-[0_16px_40px_rgba(36,28,26,0.06)]">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>Timeline of the journey</p>
            <h2 className="text-3xl font-black text-[#241C1A] sm:text-4xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>A path shaped by persistency and purpose</h2>
            <div className="mt-8 space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-6">
                  <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[#E8622C]" />
                  <div className="absolute left-[5px] top-5 h-[calc(100%+0.75rem)] w-px bg-[#C9A227]/25" />
                  <div className="rounded-2xl bg-[#FBF3E7] p-4">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>{item.year}</div>
                    <h3 className="mb-2 text-lg font-bold text-[#241C1A]">{item.title}</h3>
                    <p className="text-sm leading-7 text-[#241C1A]/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#C9A227]/15 bg-[linear-gradient(135deg,_rgba(92,17,25,0.98)_0%,_rgba(58,11,16,0.94)_100%)] p-8 text-white shadow-[0_16px_40px_rgba(36,28,26,0.08)]">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]" style={{ fontFamily: "'Cinzel', serif" }}>Gallery preview</p>
            <h2 className="text-3xl font-black sm:text-4xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>Ready for future photographs and event memories</h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              The layout is designed to welcome award ceremonies, public events, spiritual gatherings, and social initiatives as future content without requiring a redesign.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Award Ceremonies", desc: "A place for formal recognition moments." },
                { label: "Spiritual Gatherings", desc: "A gallery for community and devotional events." },
                { label: "Service Initiatives", desc: "A visual record of social welfare actions." },
                { label: "Public Guidance", desc: "A space for important public engagements." },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="mb-2 text-lg font-bold" style={{ fontFamily: "'Cinzel', serif" }}>{item.label}</h3>
                  <p className="text-sm leading-7 text-white/75">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#C9A227]/15 bg-white/85 p-8 shadow-[0_20px_60px_rgba(92,17,25,0.08)] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>Closing note</p>
              <h2 className="text-3xl font-black text-[#241C1A] sm:text-4xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>A journey of service, devotion, and continued responsibility</h2>
              <p className="mt-4 text-lg leading-8 text-[#241C1A]/75">
                This path remains guided by humility and purpose. Every recognition stands as a reflection of years of dedication and the trust placed in a life committed to helping others.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={onOpenBooking} className="flex items-center gap-2 rounded-2xl bg-[#5C1119] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5" style={{ fontFamily: "'Cinzel', serif" }}>
                <Phone className="h-4 w-4" /> Book Consultation
              </button>
              <button onClick={() => onNavigateRoute("/")} className="flex items-center gap-2 rounded-2xl border border-[#C9A227]/30 bg-[#FBF3E7] px-6 py-3 text-sm font-semibold text-[#5C1119] transition-all duration-200 hover:-translate-y-0.5" style={{ fontFamily: "'Cinzel', serif" }}>
                Return Home <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
