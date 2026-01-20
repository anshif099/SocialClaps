import React from "react";

const SocialProofHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(34,211,238,0.15),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left text */}
        <div>
          <h1 className="text-white font-semibold leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            Industry social
            <br />
            proof on autopilot
          </h1>
        </div>

        {/* Phone mockup */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glow behind phone */}
          <div className="absolute w-[320px] h-[640px] rounded-[48px] bg-cyan-400/20 blur-3xl" />

          {/* Phone body */}
          <div className="relative w-[280px] h-[580px] rounded-[40px] bg-[#0b0f14] border border-cyan-300/30 shadow-[0_30px_80px_rgba(0,255,255,0.25)]">
            {/* Phone frame highlight */}
            <div className="absolute inset-0 rounded-[40px] ring-1 ring-cyan-300/40" />

            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full" />

            {/* Screen */}
            <div className="absolute inset-3 rounded-[32px] bg-black overflow-hidden">
              {/* Header */}
              <div className="px-4 py-3 border-b border-white/10 text-white text-sm font-medium">
                Notification Center
              </div>

              {/* Notifications */}
              <div className="divide-y divide-white/5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
                    <div className="flex-1">
                      <div className="h-3 w-28 bg-white/20 rounded mb-1" />
                      <div className="h-3 w-20 bg-white/10 rounded" />
                    </div>
                    <div className="h-3 w-8 bg-orange-400/60 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofHero;
