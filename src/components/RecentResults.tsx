import React from "react";

const RecentResults: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50 py-20 px-6 overflow-hidden text-center">
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,0.35),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_30%,rgba(253,224,71,0.35),transparent_50%)]" />

      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">

        {/* === HEADING === */}
        <h2 className="font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-black/90">
          Recent Results:{" "}
          <span
            className="bg-gradient-to-r from-blue-500 to-yellow-400
            bg-clip-text text-transparent"
          >
            See Real Instagram Engagement in Action
          </span>
        </h2>

        {/* === DESCRIPTION === */}
        <p className="mt-8 max-w-3xl text-base sm:text-lg text-black/75 leading-relaxed">
          <strong className="text-black/90">
            Explore live examples of how Ben10Hits has transformed Instagram posts
            with genuine comments and likes.
          </strong>{" "}
          Our clients see measurable boosts in engagement metrics, from increased
          likes to higher comment counts.
          <span className="block mt-2 text-black/60">
            (Slide through our gallery for before-and-after screenshots and testimonials.)
          </span>
        </p>

        {/* === BULLET POINTS === */}
        <ul className="mt-10 space-y-4 text-left text-black/80 text-base sm:text-lg">
          <li className="flex items-start gap-3">
            <span className="text-yellow-500 text-xl">•</span>
            Real artists sharing insights on your music or content.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-500 text-xl">•</span>
            Verified profiles adding credibility.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-500 text-xl">•</span>
            No faceless bots — just meaningful interactions.
          </li>
        </ul>

        {/* === CTA === */}
        <div className="mt-16 rounded-[36px] border border-black/10 bg-white/60 px-12 py-10 backdrop-blur-2xl shadow-[0_40px_120px_rgba(59,130,246,0.25)] transition hover:shadow-[0_50px_140px_rgba(253,224,71,0.35)]">
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
      </div>
    </section>
  );
};

export default RecentResults;
