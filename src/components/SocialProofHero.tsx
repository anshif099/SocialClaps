import React from "react";

const SocialProofHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50 flex items-center overflow-hidden">
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(96,165,250,0.35),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_70%,rgba(253,224,71,0.35),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* === LEFT CONTENT === */}
        <div className="space-y-7">
          <span
            className="inline-flex items-center gap-2 rounded-full
            border border-black/10 bg-white/60 px-4 py-1.5
            text-xs font-medium text-black/80
            backdrop-blur-2xl transition
            hover:text-yellow-500 hover:border-yellow-300"
          >
            ✦ Social proof, automated
          </span>

          <h1 className="font-semibold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl text-black/90">
            Industry social
            <br />
            <span
              className="bg-gradient-to-r from-blue-500 to-yellow-400
              bg-clip-text text-transparent
              hover:from-yellow-400 hover:to-blue-500 transition"
            >
              proof on autopilot
            </span>
          </h1>

          <p className="max-w-md text-black/70 text-base sm:text-lg hover:text-black/90 transition">
            Real-time notifications that build trust, credibility, and momentum —
            beautifully and automatically.
          </p>
        </div>

        {/* === RIGHT PHONE MOCKUP === */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Ambient glow */}
          <div className="absolute w-[380px] h-[760px] rounded-[60px] bg-gradient-to-b from-blue-400/40 to-yellow-300/30 blur-[160px]" />

          {/* PHONE */}
          <div
            className="relative w-[290px] h-[600px] rounded-[44px]
            bg-white/40 backdrop-blur-2xl
            border border-black/10
            shadow-[0_60px_160px_rgba(59,130,246,0.35)]
            animate-[float_7s_ease-in-out_infinite]"
          >
            {/* Edge highlight */}
            <div className="absolute inset-0 rounded-[44px] ring-1 ring-white/40" />

            {/* === DYNAMIC ISLAND === */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
              <div
                className="dynamic-island relative flex items-center justify-center gap-2 px-4 h-7 rounded-full
                bg-black/80 backdrop-blur-xl
                border border-white/20 shadow-inner"
              >
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-[10px] text-white/90 whitespace-nowrap">
                  3 new alerts
                </span>
              </div>
            </div>

            {/* === SCREEN === */}
            <div className="absolute inset-3 pt-8 rounded-[36px] bg-black/80 backdrop-blur-xl overflow-hidden">
              {/* Header */}
              <div className="px-4 py-3 border-b border-white/10 text-white/90 text-sm font-medium bg-black/40 backdrop-blur-xl">
                Notification Center
              </div>

              {/* Notifications */}
              <div className="divide-y divide-white/10">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition"
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-yellow-300 shadow-md" />
                    <div className="flex-1">
                      <div className="h-3 w-28 bg-white/40 rounded mb-1" />
                      <div className="h-3 w-20 bg-white/20 rounded" />
                    </div>
                    <div className="h-3 w-8 bg-yellow-300/90 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === ANIMATIONS === */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
          }

          .dynamic-island {
            animation: island 6s cubic-bezier(.4,0,.2,1) infinite;
          }

          @keyframes island {
            0%, 20% { width: 96px; }
            35%, 55% { width: 180px; }
            70%, 100% { width: 96px; }
          }
        `}
      </style>
    </section>
  );
};

export default SocialProofHero;
