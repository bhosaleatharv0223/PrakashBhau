import React from "react";

export default function RecognitionPage({ heroRef, onNavigateRoute, onOpenBooking, phone, activePath }: { heroRef?: React.RefObject<HTMLElement>; onNavigateRoute: (p: string) => void; onOpenBooking: () => void; phone: string; activePath?: string }) {
  return (
    <main className="min-h-screen bg-white text-[#241C1A]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <section aria-label="Recognition hero" ref={heroRef} className="w-full h-screen flex items-center justify-center bg-center bg-cover recognition-hero" style={{ backgroundImage: "url('/WhatsApp Image 2026-07-13 at 5.40.35 PM.jpeg')" }}>
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl font-black mb-4" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>Honouring a Journey of Devotion, Service and Spiritual Excellence</h1>
          <p className="text-lg text-[#6B5B50] mb-6">A concise, elegant introduction to the recognitions and life-work.</p>
          <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="px-6 py-3 rounded-2xl bg-[#E8622C] text-white font-semibold">Scroll to Recognitions</button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-center text-sm text-[#6B5B50]">Recognition page scaffold — content to be added.</p>
      </section>
    </main>
  );
}
