import { Instagram } from "lucide-react";

export default function EmailSignup() {
  const scrollToPricing = () => {
    document
      .getElementById("pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openInstagram = () => {
    const appLink = "instagram://user?username=_benthompson_";
    const webLink =
      "https://www.instagram.com/_benthompson_?igsh=a2g4ZGV1OXppZDNy";

    window.location.href = appLink;

    setTimeout(() => {
      window.open(webLink, "_blank", "noopener,noreferrer");
    }, 1000);
  };

  return (
    <section
      className="relative w-full px-6 py-20 overflow-hidden
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

        {/* === INSTAGRAM PROFILE CARD (UNCHANGED) === */}
        <div className="mb-20 flex justify-center">
          <div
            onClick={openInstagram}
            className="cursor-pointer group flex items-center gap-4
              rounded-[32px]
              bg-white/70 backdrop-blur-2xl
              border border-black/10
              px-7 py-4
              shadow-[0_30px_90px_rgba(59,130,246,0.25)]
              hover:shadow-[0_40px_120px_rgba(253,224,71,0.35)]
              hover:scale-[1.03] transition"
          >
            <div className="p-[2px] rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-semibold text-black">
                B
              </div>
            </div>

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
          </div>
        </div>

        {/* === EMAIL CARD (UPDATED CONTENT) === */}
        <div
          className="rounded-[40px]
          bg-white/70 backdrop-blur-2xl
          border border-black/10
          p-12 text-center
          shadow-[0_40px_140px_rgba(59,130,246,0.35)]"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-black/90">
            Join Our Email List for Exclusive Instagram Tips and Deals
          </h2>

          <p className="text-black/65 text-sm sm:text-base mb-10 leading-relaxed">
            Subscribe for insider strategies on organic Instagram growth,
            exclusive discounts on engagement packages, early access to new
            features — and zero spam. Ever.
          </p>

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
              aria-label="Subscribe"
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

            <div className="mt-4 flex justify-center">
              <div
                onClick={openInstagram}
                className="cursor-pointer text-black/60 hover:text-yellow-500 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </div>
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
