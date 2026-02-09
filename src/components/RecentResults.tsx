import React from "react";

const RecentResults: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full bg-black py-36 px-6 overflow-hidden text-center">
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(234,179,8,0.14),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 flex flex-col items-center">

        {/* === GLASS CTA CARD === */}
        <div className="mb-16 rounded-[32px] border border-white/15 bg-white/5 px-12 py-10 backdrop-blur-2xl shadow-[0_40px_120px_rgba(59,130,246,0.25)]">
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 px-10 py-4 text-sm font-semibold text-black shadow-[0_20px_60px_rgba(234,179,8,0.45)] hover:from-yellow-200 hover:to-yellow-300 transition-all active:scale-95"
          >
            Start campaign
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* === HEADING === */}
        <h2 className="text-white font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
          Recent{" "}
          <span className="bg-gradient-to-r from-blue-400 via-white to-yellow-300 bg-clip-text text-transparent">
            Results
          </span>
        </h2>

        {/* === SUBTEXT === */}
        <p className="mt-6 max-w-xl text-base sm:text-lg text-white/65 leading-relaxed">
          <span className="font-medium text-white">
            Real organic engagement from real people.
          </span>
          <br />
          No bots. No risk. Slide to view live results below.
        </p>

        {/* === SCROLL HINT === */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/40 text-sm animate-bounce">
          <span>Scroll</span>
          <span className="text-lg">↓</span>
        </div>
      </div>
    </section>
  );
};

export default RecentResults;
