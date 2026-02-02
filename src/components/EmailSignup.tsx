import React from "react";

export default function EmailSignup() {
  const scrollToPricing = () => {
    document
      .getElementById("pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full bg-black px-6 py-32 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Top CTA */}
        <div className="flex justify-center mb-20">
          <button
            onClick={scrollToPricing}
            className="rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 px-10 py-4 text-black font-semibold text-base shadow-[0_20px_60px_rgba(250,204,21,0.45)] hover:from-yellow-200 hover:to-yellow-300 transition-all active:scale-95"
          >
            Start campaign
          </button>
        </div>

        {/* Email Card */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 text-center shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Join our email list
          </h2>

          <p className="text-white/70 text-sm sm:text-base mb-8">
            Exclusive deals. Early access. Zero spam.
          </p>

          {/* Input */}
          <div className="relative max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full bg-white px-6 py-4 pr-14 text-black text-base outline-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-400"
            />
            <button
              aria-label="Submit email"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-yellow-400 text-black text-xl flex items-center justify-center hover:bg-yellow-300 transition active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-sm text-white/60">
          © 2026 SocialClaps · Powered by ALEV
          <div className="mt-3">
            <a
              href="#"
              className="underline underline-offset-4 hover:text-white transition"
            >
              Terms & Policies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
