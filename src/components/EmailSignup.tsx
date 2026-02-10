import React from "react";

export default function EmailSignup() {
  const scrollToPricing = () => {
    document
      .getElementById("pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const instagramLink =
    "https://www.instagram.com/_benthompson_?igsh=a2g4ZGV1OXppZDNy";

  return (
    <section
      className="relative w-full px-6 py-16 overflow-hidden
      bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50"
    >
      {/* === LIQUID BACKGROUND === */}
      <div
        className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.35),transparent_45%)]"
      />
      <div
        className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_80%_0%,rgba(253,224,71,0.35),transparent_50%)]"
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* === TOP CTA === */}
        <div className="flex justify-center mb-16">
          <button
            onClick={scrollToPricing}
            className="rounded-full
              bg-gradient-to-r from-yellow-300 to-yellow-400
              px-12 py-4 text-black font-semibold text-base
              hover:from-blue-400 hover:to-yellow-300
              shadow-[0_20px_60px_rgba(253,224,71,0.45)]
              transition-all active:scale-95"
          >
            Start campaign
          </button>
        </div>

        {/* === INSTAGRAM PROFILE CARD === */}
        <div className="mb-20 flex justify-center">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4
              rounded-[32px]
              bg-white/70 backdrop-blur-2xl
              border border-black/10
              px-7 py-4
              shadow-[0_30px_90px_rgba(59,130,246,0.25)]
              hover:shadow-[0_40px_120px_rgba(253,224,71,0.35)]
              hover:scale-[1.03] transition"
          >
            {/* Avatar */}
            <div className="p-[2px] rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-semibold text-black">
                B
              </div>
            </div>

            {/* Info */}
            <div className="text-left">
              <p className="text-sm font-semibold text-black/85 group-hover:text-yellow-500 transition">
                @_benthompson_
              </p>
              <p className="text-xs text-black/60">
                Instagram · Real engagement · Manual outreach
              </p>
            </div>

            <span className="ml-2 text-black/40 group-hover:text-yellow-500 transition">
              →
            </span>
          </a>
        </div>

        {/* === EMAIL CARD === */}
        <div
          className="rounded-[40px]
          bg-white/70 backdrop-blur-2xl
          border border-black/10
          p-12 text-center
          shadow-[0_40px_140px_rgba(59,130,246,0.35)]"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-black/90">
            Join our email list
          </h2>

          <p className="text-black/65 text-sm sm:text-base mb-10">
            Exclusive deals. Early access. Zero spam.
          </p>

          {/* Input */}
          <div className="relative max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full
                bg-white
                px-6 py-4 pr-14
                text-black text-base
                outline-none
                placeholder:text-black/50
                focus:ring-2 focus:ring-yellow-400"
            />
            <button
              aria-label="Submit email"
              className="absolute right-2 top-1/2 -translate-y-1/2
                w-10 h-10 rounded-full
                bg-gradient-to-r from-yellow-300 to-yellow-400
                text-black text-xl
                hover:from-blue-400 hover:to-yellow-300
                transition active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        {/* === FOOTER === */}
        <div className="mt-24 flex justify-center">
          <div
            className="rounded-[32px]
            bg-white/70 backdrop-blur-2xl
            border border-black/10
            px-8 py-6 text-center
            shadow-[0_30px_100px_rgba(59,130,246,0.25)]"
          >
            <p className="text-sm text-black/65">
              © 2026{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
                Ben10Hits
              </span>{" "}
              · Powered by ALEV
            </p>

            {/* Social */}
            <div className="mt-4 flex justify-center">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-yellow-500 transition"
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
                className="text-sm text-black/60 hover:text-yellow-500 transition underline underline-offset-4"
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
