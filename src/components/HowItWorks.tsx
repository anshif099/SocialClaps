import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50 px-6 py-20 overflow-hidden">
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.35),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(253,224,71,0.35),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Micro text */}
        <p className="text-center text-sm text-black/60 max-w-xl mx-auto mb-6 hover:text-black/80 transition">
          Manual outreach. Real influencers. No automation. No shortcuts.
        </p>

        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight mb-6 text-black/90">
          How{" "}
          <span
            className="bg-gradient-to-r from-blue-500 to-yellow-400
            bg-clip-text text-transparent"
          >
            Ben10Hits
          </span>{" "}
          Works
        </h2>

        {/* Subheading */}
        <p className="text-center max-w-3xl mx-auto text-black/70 leading-relaxed mb-24">
          A simple, effective step-by-step process designed to boost your
          Instagram posts and trigger maximum impact on the Instagram algorithm.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Step 1 */}
          <div
            className="relative group rounded-[36px]
            bg-white/60 backdrop-blur-2xl
            border border-black/10
            p-10 shadow-[0_40px_120px_rgba(59,130,246,0.25)]
            transition hover:shadow-[0_50px_140px_rgba(253,224,71,0.35)]"
          >
            <span className="absolute -top-8 left-10 text-7xl font-bold text-black/10 group-hover:text-yellow-400/40 transition">
              01
            </span>

            <h3 className="text-xl font-semibold mb-4 text-black/90 group-hover:text-yellow-500 transition">
              System Detection
            </h3>

            <p className="text-black/70 leading-relaxed group-hover:text-black/90 transition">
              Submit your Instagram post URL and our{" "}
              <strong>24/7 monitoring system</strong> detects it instantly,
              securely queuing it for promotion without requiring any passwords.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="relative group rounded-[36px]
            bg-white/60 backdrop-blur-2xl
            border border-black/10
            p-10 shadow-[0_40px_120px_rgba(59,130,246,0.25)]
            transition hover:shadow-[0_50px_140px_rgba(253,224,71,0.35)]"
          >
            <span className="absolute -top-8 left-10 text-7xl font-bold text-black/10 group-hover:text-yellow-400/40 transition">
              02
            </span>

            <h3 className="text-xl font-semibold mb-4 text-black/90 group-hover:text-yellow-500 transition">
              Manual Outreach
            </h3>

            <p className="text-black/70 leading-relaxed group-hover:text-black/90 transition">
              Your content is personally pitched to our{" "}
              <strong>exclusive network</strong> of real influencers, artists,
              producers, and music professionals — a curated mix of verified and
              organic profiles.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="relative group rounded-[36px]
            bg-white/60 backdrop-blur-2xl
            border border-black/10
            p-10 shadow-[0_40px_120px_rgba(59,130,246,0.25)]
            transition hover:shadow-[0_50px_140px_rgba(253,224,71,0.35)]"
          >
            <span className="absolute -top-8 left-10 text-7xl font-bold text-black/10 group-hover:text-yellow-400/40 transition">
              03
            </span>

            <h3 className="text-xl font-semibold mb-4 text-black/90 group-hover:text-yellow-500 transition">
              Rapid Organic Growth
            </h3>

            <p className="text-black/70 leading-relaxed group-hover:text-black/90 transition">
              High-status accounts engage naturally within hours, triggering
              likes, comments, and increased visibility — helping your post gain
              traction organically and reach new followers.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-20 text-center text-sm text-black/60 max-w-3xl mx-auto">
          This hands-on, manual approach ensures your Instagram content builds
          genuine traction — attracting real engagement, collaborators, and
          long-term growth.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
