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
    <section className="relative w-full bg-black px-6 py-32 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Post promotion
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Choose your coverage tier. Instant activation.
            <br />
            No password required. Real likes & comments only.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToPricing}
          className="w-full mb-20 rounded-2xl bg-gradient-to-r from-yellow-300 to-yellow-400 py-4 text-black font-semibold text-base shadow-[0_20px_60px_rgba(250,204,21,0.45)] hover:from-yellow-200 hover:to-yellow-300 transition-all active:scale-95"
        >
          Start campaign
        </button>

        {/* FAQ */}
        <h3 className="text-2xl font-semibold mb-8">
          Frequently asked questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm sm:text-base text-white/75 leading-relaxed">
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
