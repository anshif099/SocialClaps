import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is this safe for my account?",
    a: "Yes. All engagement is done manually by real people. No bots, no automation, and no actions that violate platform rules.",
  },
  {
    q: "Do you need my password?",
    a: "No. We never ask for your password or any private login information.",
  },
  {
    q: "When does the campaign start?",
    a: "Campaigns activate instantly after submission and payment confirmation.",
  },
  {
    q: "Can I cancel the campaign?",
    a: "Once a campaign has started, it cannot be canceled due to manual activation and outreach.",
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
    <section className="relative w-full bg-black px-6 py-36 text-white overflow-hidden">
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(234,179,8,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* === HEADER === */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Post{" "}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-300 bg-clip-text text-transparent">
              promotion
            </span>
          </h2>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed">
            Choose your coverage tier. Instant activation.
            <br />
            No password required. Real likes & comments only.
          </p>
        </div>

        {/* === CTA GLASS CARD === */}
        <div className="mb-24 rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_40px_120px_rgba(59,130,246,0.25)]">
          <button
            onClick={scrollToPricing}
            className="w-full rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 py-4 text-black font-semibold text-base shadow-[0_20px_60px_rgba(234,179,8,0.45)] hover:from-yellow-200 hover:to-yellow-300 transition-all active:scale-95"
          >
            Start campaign
          </button>
        </div>

        {/* === FAQ TITLE === */}
        <h3 className="text-2xl font-semibold mb-10 text-center">
          Frequently asked questions
        </h3>

        {/* === FAQ ITEMS === */}
        <div className="space-y-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`rounded-[28px] border backdrop-blur-2xl transition-all
                  ${
                    isOpen
                      ? "bg-white/10 border-white/25 shadow-[0_30px_80px_rgba(59,130,246,0.25)]"
                      : "bg-white/5 border-white/15 hover:border-white/25"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-6 text-left"
                >
                  <span className="font-medium text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-white/70 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-yellow-300" : ""
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
                  <div className="overflow-hidden px-7 pb-6 text-sm sm:text-base text-white/70 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
