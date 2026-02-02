import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="relative w-full bg-black text-white px-6 py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Micro text */}
        <p className="text-center text-sm text-white/70 max-w-md mx-auto mb-6">
          Real artists. Real relationships. No faceless automation.
        </p>

        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
          How it{" "}
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            works
          </span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Step 1 */}
          <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition">
            <span className="absolute -top-5 left-8 text-6xl font-bold text-white/5">
              01
            </span>
            <h3 className="text-xl font-semibold mb-4">
              System Detection
            </h3>
            <p className="text-white/75 leading-relaxed">
              We monitor our platform <strong>24/7</strong>. The moment you
              submit a post, our system detects it instantly and queues it for
              outreach.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition">
            <span className="absolute -top-5 left-8 text-6xl font-bold text-white/5">
              02
            </span>
            <h3 className="text-xl font-semibold mb-4">
              Manual Outreach
            </h3>
            <p className="text-white/75 leading-relaxed">
              Your content is personally pitched to our{" "}
              <strong>private network</strong> of artists, producers, DJs, and
              established influencers — both <strong>verified</strong> and
              organic profiles.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition">
            <span className="absolute -top-5 left-8 text-6xl font-bold text-white/5">
              03
            </span>
            <h3 className="text-xl font-semibold mb-4">
              Rapid Growth
            </h3>
            <p className="text-white/75 leading-relaxed">
              <strong>High-status real accounts</strong> engage within 60
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
