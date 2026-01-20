import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="relative w-full bg-black text-white px-6 py-32">
      {/* Top micro text */}
      <p className="absolute top-10 left-1/2 -translate-x-1/2 text-sm text-white/80 text-center max-w-md">
        Real artists, real relationships. We don't hide behind faceless profiles.
      </p>

      {/* Main heading */}
      <h2 className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-20">
        How does it work?
      </h2>

      {/* Right aligned columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">System Detection</h3>
          <p className="text-white/80 leading-relaxed">
            We monitor our site <strong>24/7</strong>. As soon as you submit a
            new post order, our system detects it instantly.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Manual Outreach</h3>
          <p className="text-white/80 leading-relaxed">
            We manually pitch your content to our{" "}
            <strong>private network</strong> of artists, producers, DJs, and
            well established influencers. This includes both{" "}
            <strong>Verified</strong> and regular profiles!
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Rapid Growth</h3>
          <p className="text-white/80 leading-relaxed">
            <strong>Real, high-status accounts</strong> engage with your post
            within 60 minutes, signaling{" "}
            <strong>"momentum"</strong> to the Instagram algorithm and increasing
            your credibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
