import React from "react";

const RecentResults: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full bg-black flex flex-col items-center justify-center py-32 px-4 text-center">
      {/* CTA Button */}
      <button
        onClick={scrollToPricing}
        className="mb-10 rounded-2xl bg-yellow-400 px-8 py-4 text-sm font-medium text-black hover:bg-yellow-300 transition"
      >
        Start campaign
      </button>

      {/* Heading */}
      <h2 className="text-white font-bold tracking-tight text-4xl sm:text-5xl">
        Recent Results
      </h2>

      {/* Subtext */}
      <p className="mt-4 max-w-xl text-base sm:text-lg text-white/80">
        <span className="font-semibold text-white">
          Real organic engagement from real people!
        </span>
        <br />
        No bots. No risk. Slide to view results below. 👇
      </p>
    </section>
  );
};

export default RecentResults;
