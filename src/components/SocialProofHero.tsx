import React from "react";

const SocialProofHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <div className="space-y-6">
          <span className="inline-block text-sm font-medium tracking-wide text-cyan-400/90">
            Social proof, automated
          </span>

          <h1 className="text-white font-semibold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            Industry social
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              proof on autopilot
            </span>
          </h1>

          <p className="max-w-md text-white/60 text-base sm:text-lg">
            Real-time notifications that build trust, credibility, and momentum —
            without lifting a finger.
          </p>
        </div>

        {/* Phone mockup */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Ambient glow */}
          <div className="absolute w-[360px] h-[720px] rounded-[56px] bg-cyan-400/20 blur-[120px]" />

          {/* Floating phone */}
          <div className="relative w-[280px] h-[580px] rounded-[42px] bg-[#0b0f14] border border-cyan-300/30 shadow-[0_40px_120px_rgba(0,255,255,0.35)] animate-[float_6s_ease-in-out_infinite]">
            {/* Inner glow ring */}
            <div className="absolute inset-0 rounded-[42px] ring-1 ring-cyan-300/40" />

            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full opacity-90" />

            {/* Screen */}
            <div className="absolute inset-3 rounded-[34px] bg-black overflow-hidden">
              {/* Header */}
              <div className="px-4 py-3 border-b border-white/10 text-white text-sm font-medium backdrop-blur">
                Notification Center
              </div>

              {/* Notifications */}
              <div className="divide-y divide-white/5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition"
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg" />
                    <div className="flex-1">
                      <div className="h-3 w-28 bg-white/25 rounded mb-1" />
                      <div className="h-3 w-20 bg-white/10 rounded" />
                    </div>
                    <div className="h-3 w-8 bg-orange-400/70 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
        `}
      </style>
    </section>
  );
};

export default SocialProofHero;
