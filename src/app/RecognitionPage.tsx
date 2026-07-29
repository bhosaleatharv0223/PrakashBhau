import React from "react";
import { ArrowRight, Award, Heart, Phone, Sparkles, Star, Users, Zap } from "lucide-react";
import PremiumTrophyExhibit from "@/app/components/PremiumTrophyExhibit";
import { recognitionGalleryPreviewItems } from "@/data/recognition-gallery";
import { dignitariesGalleryPreviewItems } from "@/data/dignitaries-gallery";
import { divineMomentsGalleryPreviewItems } from "@/data/divine-moments-gallery";

export default function RecognitionPage({ heroRef, onNavigateRoute, onOpenBooking, phone, activePath }: { heroRef?: React.RefObject<HTMLElement | null>; onNavigateRoute: (p: string) => void; onOpenBooking: () => void; phone: string; activePath?: string }) {
  return (
    <main className="min-h-screen bg-[#FBF3E7] text-[#241C1A]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <section aria-label="Recognition hero" ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url('/WhatsApp Image 2026-07-13 at 5.40.35 PM.jpeg')" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,39,0.18),_transparent_35%),linear-gradient(180deg,_rgba(10,7,5,0.42),_rgba(10,7,5,0.12))]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.04),_transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#F5E2B4]" style={{ fontFamily: "'Cinzel', serif" }}>
            <Sparkles className="h-4 w-4 text-[#E8622C]" /> Recognition & Legacy
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
            Honouring a Journey of Devotion, Service and Spiritual Excellence
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            A premium page to celebrate recognitions, honors, and the story behind the spiritual leadership of Guruvarya Shri Prakashbhau Shinde.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button onClick={onOpenBooking} className="rounded-full bg-[#E8622C] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 shadow-xl hover:-translate-y-0.5">
              Book Consultation
            </button>
            <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} className="rounded-full border border-white/35 bg-white/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:border-white/60 hover:bg-white/15">
              View Recognitions
            </button>
          </div>
        </div>
      </section>

      <PremiumTrophyExhibit items={recognitionGalleryPreviewItems} eyebrowLabel="Recognition gallery" title="Honours & Trophies" altPrefix="Honours & Trophies" />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-center">
        <button
          onClick={() => onNavigateRoute("/recognition/gallery")}
          className="inline-flex items-center justify-center rounded-full bg-[#5C1119] px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#34100f]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          View More
        </button>
      </div>

      <PremiumTrophyExhibit items={dignitariesGalleryPreviewItems} eyebrowLabel="Recognition gallery" title="Dignitaries" altPrefix="Dignitary" />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-center">
        <button
          onClick={() => onNavigateRoute("/recognition/dignitaries")}
          className="inline-flex items-center justify-center rounded-full bg-[#5C1119] px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#34100f]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          View More
        </button>
      </div>

      <PremiumTrophyExhibit items={divineMomentsGalleryPreviewItems} eyebrowLabel="Recognition gallery" title="Divine Moments" altPrefix="Divine Moment" />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-center">
        <button
          onClick={() => onNavigateRoute("/recognition/divine-moments")}
          className="inline-flex items-center justify-center rounded-full bg-[#5C1119] px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#34100f]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          View More
        </button>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>Story of Recognition</p>
            <h2 className="text-3xl font-black text-[#241C1A] sm:text-4xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              From devotion to distinction — a path recognised by communities and spiritual circles alike
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#241C1A]/80">
              Guruvarya's recognition is born from sustained spiritual discipline, public service, and the quiet integrity of a life committed to guiding others. These honors are not endpoints — they are reflections of deep trust, social impact, and spiritual authority.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { icon: Zap, title: "Spiritually Anchored", desc: "14 years of intense Hanuman tapasya, unwavering discipline, and divine surrender." },
                { icon: Heart, title: "Compassionate Service", desc: "Social welfare, counselling, and community support rooted in bhakti and seva." },
                { icon: Award, title: "Public Trust", desc: "Recognitions from spiritual leaders, devotees, and social welfare circles." },
                { icon: Users, title: "Legacy of Guidance", desc: "A growing community guided by wisdom, devotion, and consistent care." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.75rem] border border-[#C9A227]/15 bg-white p-6 shadow-[0_16px_40px_rgba(36,28,26,0.06)] transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5C1119] text-[#C9A227]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-[#241C1A]" style={{ fontFamily: "'Cinzel', serif" }}>{item.title}</h3>
                    <p className="text-sm leading-7 text-[#241C1A]/70">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#C9A227]/15 bg-[#FFF9F0] p-8 shadow-[0_18px_45px_rgba(92,17,25,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#5C1119] mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Recognition highlights</p>
            <div className="space-y-5">
              {[
                { title: "Dignified service recognised", detail: "Public speaking, trust work, and devotional leadership that earned broad support." },
                { title: "A trusted spiritual authority", detail: "Honoured with the responsibility of Mathadhipati and the blessing of devotees." },
                { title: "A legacy of sincere guidance", detail: "A life devoted to counsel, ceremony, and the upliftment of those in need." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-white/90 p-5 shadow-sm">
                  <h3 className="font-bold text-[#241C1A] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>{item.title}</h3>
                  <p className="text-sm leading-7 text-[#241C1A]/75">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#C9A227]/15 bg-white p-8 shadow-[0_18px_45px_rgba(36,28,26,0.06)]">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>Recognition gallery</p>
              <h2 className="mt-3 text-3xl font-black text-[#241C1A] sm:text-4xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>A space designed for honour, ceremony and memory</h2>
            </div>
            <button onClick={onOpenBooking} className="rounded-full bg-[#5C1119] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-[#34100f]">
              Book a session
            </button>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_0.9fr]">
            <div className="space-y-6">
              {[
                { title: "Dignified service recognised", desc: "Public speaking, trust work, and devotional leadership that earned broad support." },
                { title: "A trusted spiritual authority", desc: "Honoured with the responsibility of Mathadhipati and the blessing of devotees." },
                { title: "A legacy of sincere guidance", desc: "A life devoted to counsel, ceremony, and the upliftment of those in need." },
              ].map((item) => (
                <div key={item.title} className="relative rounded-[1.75rem] border border-[#C9A227]/10 bg-[#FBF3E7] p-6 shadow-sm">
                  <div className="absolute left-5 top-6 h-3 w-3 rounded-full bg-[#E8622C]" />
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-[#241C1A] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>{item.title}</h3>
                    <p className="text-sm leading-7 text-[#241C1A]/75">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,_rgba(92,17,25,0.95),_rgba(58,11,16,0.95))] p-8 text-white shadow-[0_18px_45px_rgba(36,28,26,0.12)]">
              <div className="mb-5 rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[#F3D8A3]" style={{ fontFamily: "'Cinzel', serif" }}>Gallery preview</p>
                <h3 className="mt-3 text-2xl font-black" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>A space designed for honour, ceremony and memory</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Award Ceremonies", desc: "Honouring recognitions with grace and dignity." },
                  { label: "Spiritual Gatherings", desc: "Capturing key moments of devotion and community support." },
                  { label: "Trust Initiatives", desc: "Visual records of social work and public outreach." },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/10 p-5 transition-all duration-200 hover:bg-white/15">
                    <h4 className="text-lg font-semibold text-white">{item.label}</h4>
                    <p className="mt-2 text-sm leading-7 text-white/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>Closing reflection</p>
            <h2 className="mt-4 text-3xl font-black text-[#241C1A] sm:text-4xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              Every honour is a reminder of service, not a destination.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#241C1A]/75">
              Recognition is received when devotion meets action. This page honours that spirit while keeping the path clear for future growth, prayer, and public service.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#C9A227]/15 bg-white p-8 shadow-[0_20px_45px_rgba(36,28,26,0.08)]">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>Take the next step</p>
              <button onClick={onOpenBooking} className="w-full rounded-full bg-[#5C1119] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-[#34100f]">
                Book Consultation
              </button>
              <button onClick={() => onNavigateRoute("/")} className="w-full rounded-full border border-[#C9A227]/25 bg-[#FBF3E7] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#5C1119] transition-all duration-200 hover:bg-[#F5E1B5]">
                Return Home <ArrowRight className="inline-block h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
