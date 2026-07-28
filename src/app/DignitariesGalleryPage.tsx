import React from "react";
import { ArrowLeft } from "lucide-react";
import { dignitariesGalleryItems } from "@/data/dignitaries-gallery";

export default function DignitariesGalleryPage({ onNavigateRoute, onOpenBooking, phone }: { onNavigateRoute: (path: string) => void; onOpenBooking: () => void; phone: string; }) {
  return (
    <main className="min-h-screen bg-[#FBF3E7] text-[#241C1A]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,_rgba(92,17,25,0.92),_rgba(58,11,16,0.92))] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F3D8A3]" style={{ fontFamily: "'Cinzel', serif" }}>Dignitaries</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl" style={{ fontFamily: "var(--font-dev), serif" }}>
            Dignitaries — Full Gallery
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/75">
            A dedicated gallery showcasing the dignitaries who have honoured Guruvarya Shri Prakashbhau Shinde with their presence and support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => onNavigateRoute("/recognition")}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-white/15"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <ArrowLeft className="h-4 w-4" /> Back to Recognition
            </button>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center rounded-full bg-[#E8622C] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {dignitariesGalleryItems.map((item) => (
            <div key={item.src} className="group overflow-hidden rounded-[1.85rem] border border-transparent bg-white p-3 shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[#C9A227]/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#F9F3E8]">
                <img src={item.src} alt={item.title ?? "Dignitary"} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              {item.title && (
                <div className="mt-4 px-2">
                  <p className="text-sm font-bold text-[#241C1A]" style={{ fontFamily: "'Cinzel', serif" }}>{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
