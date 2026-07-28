export default function RecognitionBadge({ text }: { text: string }) {
  return (
    <div className="rounded-full border border-[#f0cb8a] bg-[#fff7e8] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#a05b16]" style={{ fontFamily: "'Cinzel', serif" }}>
      {text}
    </div>
  );
}
