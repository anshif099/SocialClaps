import React from "react";

const RecentResults: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full bg-black py-32 px-6 overflow-hidden text-center">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 flex flex-col items-center">

        {/* CTA */}
        <button
          onClick={scrollToPricing}
          className="mb-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 px-10 py-4 text-sm font-semibold text-black shadow-[0_20px_60px_rgba(250,204,21,0.45)] hover:from-yellow-200 hover:to-yellow-300 transition-all active:scale-95"
        >
          Start campaign
          <span className="text-lg">→</span>
        </button>

        {/* Heading */}
        <h2 className="text-white font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
          Recent{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Results
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
          <span className="font-medium text-white">
            Real organic engagement from real people.
          </span>
          <br />
          No bots. No risk. Slide to view live results below.
        </p>

        {/* Scroll hint */}
        <div className="mt-14 flex flex-col items-center gap-2 text-white/40 text-sm animate-bounce">
          <span>Scroll</span>
          <span className="text-lg">↓</span>
        </div>
      </div>
    </section>
  );
};

export default RecentResults;
