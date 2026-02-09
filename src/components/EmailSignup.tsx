import React from "react";

export default function EmailSignup() {
  const scrollToPricing = () => {
    document
      .getElementById("pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full bg-black px-6 py-10 text-white overflow-hidden">
      {/* === LIQUID GLASS BACKGROUND (CLICK-SAFE) === */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.18),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_0%,rgba(234,179,8,0.12),transparent_50%)]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* === TOP CTA === */}
        <div className="flex justify-center mb-16">
          <button
            onClick={scrollToPricing}
            className="relative z-20 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 px-12 py-4 text-black font-semibold text-base shadow-[0_20px_60px_rgba(234,179,8,0.45)] hover:from-yellow-200 hover:to-yellow-300 transition-all active:scale-95"
          >
            Start campaign
          </button>
        </div>

        {/* === REAL INSTAGRAM PROFILE CARD (FIXED) === */}
        <div className="mb-20 flex justify-center">
          <a
            href="https://www.instagram.com/_benthompson_"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 pointer-events-auto group flex items-center gap-4 rounded-[30px] border border-white/15 bg-white/5 backdrop-blur-2xl px-7 py-4 shadow-[0_30px_80px_rgba(59,130,246,0.25)] hover:border-white/25 hover:scale-[1.02] transition"
          >
            {/* Avatar ring */}
            <div className="p-[2px] rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-semibold">
                B
              </div>
            </div>

            {/* Profile info */}
            <div className="text-left">
              <p className="text-sm font-semibold text-white group-hover:text-yellow-300 transition">
                @_benthompson_
              </p>
              <p className="text-xs text-white/65">
                Instagram · Real engagement · Manual outreach
              </p>
            </div>

            {/* Arrow */}
            <span className="ml-2 text-white/40 group-hover:text-yellow-300 transition">
              →
            </span>
          </a>
        </div>

        {/* === EMAIL SIGNUP CARD === */}
        <div className="relative z-10 rounded-[36px] bg-white/5 backdrop-blur-2xl border border-white/15 p-12 text-center shadow-[0_40px_120px_rgba(59,130,246,0.35)]">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Join our email list
          </h2>

          <p className="text-white/65 text-sm sm:text-base mb-10">
            Exclusive deals. Early access. Zero spam.
          </p>

          {/* Input */}
          <div className="relative max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full bg-white/90 px-6 py-4 pr-14 text-black text-base outline-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-300"
            />
            <button
              aria-label="Submit email"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-black text-xl flex items-center justify-center hover:from-yellow-200 hover:to-yellow-300 transition active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        {/* === FOOTER === */}
        <div className="mt-28 flex justify-center">
          <div className="relative z-10 rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-2xl px-8 py-6 text-center shadow-[0_30px_90px_rgba(59,130,246,0.25)]">
            <p className="text-sm text-white/65">
              © 2026{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-yellow-300 bg-clip-text text-transparent">
                Ben10Hits
              </span>{" "}
              · Powered by ALEV
            </p>

            {/* Social icons */}
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://www.instagram.com/_benthompson_"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 text-white/60 hover:text-yellow-300 transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </a>
            </div>

            <div className="mt-4">
              <a
                href="#"
                className="text-sm text-white/60 hover:text-yellow-300 transition underline underline-offset-4"
              >
                Terms & Policies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
