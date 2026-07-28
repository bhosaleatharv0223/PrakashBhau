import React from 'react';
import urls from '@/data/trophy-urls.json';

type TrophyItem = string | { src: string };

export default function PremiumTrophyExhibit({ items, eyebrowLabel = "Recognition gallery", title = "Honours & Trophies", altPrefix = "Item" }: { items?: TrophyItem[]; eyebrowLabel?: string; title?: string; altPrefix?: string; }) {
  const allUrls: string[] = (items ?? (urls as unknown as TrophyItem[])).map((item) => (typeof item === 'string' ? item : item.src));

  const renderCard = (src: string, i: number) => {
    const filename = src.split('/').pop() || src;
    const alt = `${altPrefix} ${filename}`;
    return (
      <div key={`${src}-${i}`} className="snap-start flex-shrink-0" style={{ width: 320, height: 460 }}>
        <div className="h-full w-full overflow-hidden rounded-[1.6rem] border border-[#C9A227]/12 bg-white shadow-[0_18px_40px_rgba(36,28,26,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
          <img src={src} alt={alt} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" style={{ borderRadius: 12 }} />
        </div>
      </div>
    );
  };

  return (
    <section aria-label="Recognition exhibition" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#5C1119]" style={{ fontFamily: "'Cinzel', serif" }}>{eyebrowLabel}</p>
        <h2 className="text-3xl font-black text-[#241C1A] sm:text-4xl" style={{ fontFamily: "var(--font-dev), serif" }}>{title}</h2>
      </div>

      <div className="-mx-4 overflow-hidden px-4 premium-trophy-exhibit">
        <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory touch-pan-x" style={{ WebkitOverflowScrolling: 'touch' }}>
          {allUrls.map((s, i) => renderCard(s, i))}
        </div>
      </div>

      <style>{`
        .premium-trophy-exhibit::-webkit-scrollbar { display: none; }
        .premium-trophy-exhibit { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 768px) {
          .premium-trophy-exhibit div[style] { width: 260px !important; height: 360px !important; }
        }
      `}</style>
    </section>
  );
}
