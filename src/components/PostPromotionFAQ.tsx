import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is buying Instagram comments safe for my account?",
    a: "Yes, absolutely. All engagement comes from real people manually interacting with your content. We avoid bots and automation entirely, ensuring full compliance with Instagram’s terms and minimizing any risk.",
  },
  {
    q: "Do you need my Instagram password?",
    a: "No. We never ask for passwords or login details. You only submit your public Instagram post URL, and we handle everything else.",
  },
  {
    q: "When does my Instagram campaign start?",
    a: "Campaigns activate instantly upon payment confirmation. You can expect the first likes and comments within 60 minutes.",
  },
  {
    q: "Can I cancel an active campaign?",
    a: "Once started, campaigns cannot be canceled due to the manual outreach process. Please review your submission carefully before confirming.",
  },
  {
    q: "How does this help my Instagram algorithm?",
    a: "Real comments and likes from diverse, high-quality accounts signal strong content to Instagram, increasing reach, Explore page potential, and overall profile growth.",
  },
];

export default function PostPromotionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToPricing = () => {
    document
      .getElementById("pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
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

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* === CAMPAIGN INTRO === */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 text-black/90">
            Start Your{" "}
            <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
              Instagram Promotion
            </span>{" "}
            Campaign Today
          </h2>

          <p className="text-black/70 max-w-3xl mx-auto leading-relaxed">
            Ready to buy real Instagram comments and likes? Select your tier,
            submit your post URL, and watch the magic happen. Built for musicians,
            influencers, and creators who want genuine social proof — not fake
            numbers.
          </p>

          <ul className="mt-8 space-y-3 text-black/70 text-sm sm:text-base">
            <li>• No subscriptions — pay per post for full flexibility</li>
            <li>• Real likes & comments only — boost authenticity</li>
          </ul>
        </div>

        {/* === CTA GLASS CARD === */}
        <div
          className="mb-28 rounded-[36px]
          bg-white/70 backdrop-blur-2xl
          border border-black/10
          p-10 shadow-[0_40px_120px_rgba(59,130,246,0.25)]"
        >
          <button
            onClick={scrollToPricing}
            className="w-full rounded-full
              bg-gradient-to-r from-yellow-300 to-yellow-400
              py-4 text-black font-semibold text-base
              hover:from-blue-400 hover:to-yellow-300
              transition-all active:scale-95"
          >
            Start Campaign
          </button>
        </div>

        {/* === TESTIMONIALS === */}
        <div className="mb-28">
          <h3 className="text-3xl font-semibold mb-10 text-center text-black/90">
            What Our Users Say About{" "}
            <span className="text-yellow-500">Ben10Hits</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-[32px] bg-white/65 backdrop-blur-2xl border border-black/10 p-8 shadow-[0_30px_90px_rgba(59,130,246,0.25)]">
              <p className="text-black/80 leading-relaxed mb-4">
                “Ben10Hits delivered exactly what I needed — real comments from
                industry pros that boosted my track’s visibility.”
              </p>
              <span className="text-sm text-black/60">
                — @_benthompson, Instagram Music Producer
              </span>
            </div>

            <div className="rounded-[32px] bg-white/65 backdrop-blur-2xl border border-black/10 p-8 shadow-[0_30px_90px_rgba(253,224,71,0.35)]">
              <p className="text-black/80 leading-relaxed mb-4">
                “Finally, a service that feels organic. No bots — just real
                engagement that helped my profile grow.”
              </p>
              <span className="text-sm text-black/60">
                — Verified User
              </span>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-black/60">
            Join thousands of satisfied creators elevating their Instagram game
            with Ben10Hits.
          </p>
        </div>

        {/* === FAQ TITLE === */}
        <h3 className="text-3xl font-semibold mb-12 text-center text-black/90">
          Frequently Asked Questions About Buying Instagram Engagement
        </h3>

        {/* === FAQ ITEMS === */}
        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`rounded-[32px]
                  bg-white/65 backdrop-blur-2xl
                  border border-black/10
                  transition-all duration-300
                  ${
                    isOpen
                      ? "shadow-[0_40px_120px_rgba(59,130,246,0.35)]"
                      : "hover:shadow-[0_30px_90px_rgba(253,224,71,0.35)]"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                >
                  <span className="font-medium text-base sm:text-lg text-black/85">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300
                      ${
                        isOpen
                          ? "rotate-180 text-yellow-400"
                          : "text-black/50"
                      }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden px-8 pb-6 text-sm sm:text-base text-black/70 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* === SUPPORT NOTE === */}
        <p className="mt-16 text-center text-sm text-black/60">
          Still have questions? Contact our support team — we’re here to help.
        </p>
      </div>
    </section>
  );
}
