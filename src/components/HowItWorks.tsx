import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50 px-6 py-16 overflow-hidden">
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.35),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(253,224,71,0.35),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Micro text */}
        <p className="text-center text-sm text-black/60 max-w-md mx-auto mb-6 hover:text-black/80 transition">
          Real artists. Real relationships. No faceless automation.
        </p>

        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight mb-24 text-black/90">
          How it{" "}
          <span
            className="bg-gradient-to-r from-blue-500 to-yellow-400
            bg-clip-text text-transparent
            hover:from-yellow-400 hover:to-blue-500 transition"
          >
            works
          </span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Step 1 */}
          <div className="relative group rounded-[36px]
            bg-white/60 backdrop-blur-2xl
            border border-black/10
            p-10 shadow-[0_40px_120px_rgba(59,130,246,0.25)]
            transition hover:shadow-[0_50px_140px_rgba(253,224,71,0.35)]">

            {/* Step number */}
            <span className="absolute -top-8 left-10 text-7xl font-bold text-black/10 group-hover:text-yellow-400/40 transition">
              01
            </span>

            <h3 className="text-xl font-semibold mb-4 text-black/90 group-hover:text-yellow-500 transition">
              System Detection
            </h3>

            <p className="text-black/70 leading-relaxed group-hover:text-black/90 transition">
              We monitor our platform <strong>24/7</strong>. The moment you
              submit a post, our system detects it instantly and queues it for
              outreach.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative group rounded-[36px]
            bg-white/60 backdrop-blur-2xl
            border border-black/10
            p-10 shadow-[0_40px_120px_rgba(59,130,246,0.25)]
            transition hover:shadow-[0_50px_140px_rgba(253,224,71,0.35)]">

            <span className="absolute -top-8 left-10 text-7xl font-bold text-black/10 group-hover:text-yellow-400/40 transition">
              02
            </span>

            <h3 className="text-xl font-semibold mb-4 text-black/90 group-hover:text-yellow-500 transition">
              Manual Outreach
            </h3>

            <p className="text-black/70 leading-relaxed group-hover:text-black/90 transition">
              Your content is personally pitched to our{" "}
              <strong>private network</strong> of artists,
              producers, DJs, and established influencers — both{" "}
              <strong>verified</strong> and organic profiles.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative group rounded-[36px]
            bg-white/60 backdrop-blur-2xl
            border border-black/10
            p-10 shadow-[0_40px_120px_rgba(59,130,246,0.25)]
            transition hover:shadow-[0_50px_140px_rgba(253,224,71,0.35)]">

            <span className="absolute -top-8 left-10 text-7xl font-bold text-black/10 group-hover:text-yellow-400/40 transition">
              03
            </span>

            <h3 className="text-xl font-semibold mb-4 text-black/90 group-hover:text-yellow-500 transition">
              Rapid Growth
            </h3>

            <p className="text-black/70 leading-relaxed group-hover:text-black/90 transition">
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
