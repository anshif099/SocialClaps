import React from "react";

const RecentResults: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50 py-16 px-6 overflow-hidden text-center">
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,0.35),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_30%,rgba(253,224,71,0.35),transparent_50%)]" />

      <div className="relative z-10 flex flex-col items-center">

        {/* === GLASS CTA CARD === */}
        <div className="mb-16 rounded-[36px] border border-black/10 bg-white/60 px-12 py-10 backdrop-blur-2xl shadow-[0_40px_120px_rgba(59,130,246,0.25)] transition hover:shadow-[0_50px_140px_rgba(253,224,71,0.35)]">
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center gap-3 rounded-full
              bg-gradient-to-r from-yellow-300 to-yellow-400
              px-10 py-4 text-sm font-semibold text-black
              shadow-[0_20px_60px_rgba(234,179,8,0.45)]
              hover:from-blue-400 hover:to-yellow-300
              transition-all active:scale-95"
          >
            Start campaign
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* === HEADING === */}
        <h2 className="font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-black/90">
          Recent{" "}
          <span
            className="bg-gradient-to-r from-blue-500 to-yellow-400
            bg-clip-text text-transparent
            hover:from-yellow-400 hover:to-blue-500 transition"
          >
            Results
          </span>
        </h2>

        {/* === SUBTEXT === */}
        <p className="mt-6 max-w-xl text-base sm:text-lg text-black/70 leading-relaxed hover:text-black/90 transition">
          <span className="font-medium text-black/90">
            Real organic engagement from real people.
          </span>
          <br />
          No bots. No risk. Slide to view live results below.
        </p>

        {/* === SCROLL HINT === */}
        <div className="mt-16 flex flex-col items-center gap-2 text-black/40 text-sm animate-bounce">
          <span>Scroll</span>
          <span className="text-lg">↓</span>
        </div>
      </div>
    </section>
  );
};

export default RecentResults;
