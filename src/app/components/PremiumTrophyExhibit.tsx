import React, { useEffect, useRef, useState } from 'react';
import urls from '@/data/trophy-urls.json';

export default function PremiumTrophyExhibit() {
  const allUrls: string[] = urls as unknown as string[];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  // Animation duration (seconds). Tuned for comfortable premium pace.
  const DURATION = 26;

  useEffect(() => {
    function setShift(el: HTMLDivElement | null) {
      if (!el) return;
      const total = el.scrollWidth || 0;
      const half = Math.round(total / 2);
      el.style.setProperty('--marquee-shift', `${half}px`);
    }

    setShift(trackRef.current);

    const ro = new ResizeObserver(() => setShift(trackRef.current));
    if (trackRef.current) ro.observe(trackRef.current);

    setReady(true);
    return () => ro.disconnect();
  }, [allUrls.length]);

  // Pause on hover or focus
  function handlePause(shouldPause: boolean) {
    const tracks = containerRef.current?.querySelectorAll<HTMLElement>('[data-track]');
    tracks?.forEach((t) => {
      t.style.animationPlayState = shouldPause ? 'paused' : 'running';
    });
  }

  const renderCard = (src: string, i: number) => {
    const filename = src.split('/').pop() || src;
    const alt = `Trophy ${filename}`;
    return (
      <div key={`${src}-${i}`} className="flex-shrink-0" style={{ width: 320, height: 460 }}>
        <div className="h-full w-full overflow-hidden rounded-[1.6rem] border border-[#C9A227]/12 bg-white shadow-[0_18px_40px_rgba(36,28,26,0.06)] transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.02]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
          <img src={src} alt={alt} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" style={{ borderRadius: 12 }} />
        </div>
      </div>
    );
  };

  // Single sequence duplicated for seamless loop
  const sequence = [...allUrls, ...allUrls];

  return (
    <section aria-label="Recognition exhibition" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>Recognition gallery</p>
        <h2 className="text-3xl font-black text-[#241C1A] sm:text-4xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>Honours & trophies</h2>
      </div>

      <div
        ref={containerRef}
        className="premium-trophy-exhibit relative -mx-4 w-[calc(100%+2rem)] overflow-hidden px-4"
        onMouseEnter={() => handlePause(true)}
        onMouseLeave={() => handlePause(false)}
        onFocus={() => handlePause(true)}
        onBlur={() => handlePause(false)}
        tabIndex={0}
      >
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            data-track
            style={{
              display: 'flex',
              gap: 24,
              transform: 'translate3d(0,0,0)',
              animation: `marquee-left ${DURATION}s linear infinite`,
              willChange: 'transform',
            }}
          >
            {sequence.map((s, i) => renderCard(s, i))}
          </div>
        </div>

        <style>{`
          @keyframes marquee-left {
            0% { transform: translate3d(0,0,0); }
            100% { transform: translate3d(calc(var(--marquee-shift) * -1),0,0); }
          }
          /* respect reduced motion */
          @media (prefers-reduced-motion: reduce) {
            [data-track] { animation: none !important; }
          }
          /* responsive card sizes */
          @media (max-width: 768px) {
            .premium-trophy-exhibit [style] > [data-track] > div[style] { width: 220px !important; height: 320px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
