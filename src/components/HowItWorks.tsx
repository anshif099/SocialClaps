import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="relative w-full bg-black text-white px-6 py-10 overflow-hidden">
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Micro text */}
        <p className="text-center text-sm text-white/65 max-w-md mx-auto mb-6">
          Real artists. Real relationships. No faceless automation.
        </p>

        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight mb-28">
          How it{" "}
          <span className="bg-gradient-to-r from-blue-400 via-white to-yellow-300 bg-clip-text text-transparent">
            works
          </span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Step 1 */}
          <div className="relative group rounded-[36px] bg-white/5 backdrop-blur-2xl border border-white/15 p-10 shadow-[0_40px_120px_rgba(59,130,246,0.25)] hover:border-white/25 transition">
            {/* Step number */}
            <span className="absolute -top-8 left-10 text-7xl font-bold text-white/5 group-hover:text-yellow-300/20 transition">
              01
            </span>

            <h3 className="text-xl font-semibold mb-4">
              System Detection
            </h3>
            <p className="text-white/70 leading-relaxed">
              We monitor our platform <strong className="text-white">24/7</strong>. The moment you
              submit a post, our system detects it instantly and queues it for
              outreach.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative group rounded-[36px] bg-white/5 backdrop-blur-2xl border border-white/15 p-10 shadow-[0_40px_120px_rgba(59,130,246,0.25)] hover:border-white/25 transition">
            <span className="absolute -top-8 left-10 text-7xl font-bold text-white/5 group-hover:text-yellow-300/20 transition">
              02
            </span>

            <h3 className="text-xl font-semibold mb-4">
              Manual Outreach
            </h3>
            <p className="text-white/70 leading-relaxed">
              Your content is personally pitched to our{" "}
              <strong className="text-white">private network</strong> of artists,
              producers, DJs, and established influencers — both{" "}
              <strong className="text-white">verified</strong> and organic profiles.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative group rounded-[36px] bg-white/5 backdrop-blur-2xl border border-white/15 p-10 shadow-[0_40px_120px_rgba(59,130,246,0.25)] hover:border-white/25 transition">
            <span className="absolute -top-8 left-10 text-7xl font-bold text-white/5 group-hover:text-yellow-300/20 transition">
              03
            </span>

            <h3 className="text-xl font-semibold mb-4">
              Rapid Growth
            </h3>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">High-status real accounts</strong> engage within 60
              minutes, triggering algorithmic momentum and boosting your
              credibility naturally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
