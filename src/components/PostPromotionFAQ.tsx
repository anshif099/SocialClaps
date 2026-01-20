import { useState } from "react";

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
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full bg-black px-4 sm:px-6 py-20 text-white">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Post promotion
        </h2>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
          Select your coverage tier. Instant activation.
          <br />
          No password required. (Interactions include both comments and likes.)
        </p>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto mt-8">
        <button
          onClick={scrollToPricing}
          className="w-full rounded-xl bg-yellow-400 py-4 text-black font-semibold text-base hover:bg-yellow-300 transition"
        >
          Start Campaign!
        </button>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mt-20">
        <h3 className="text-2xl font-bold mb-8">
          Frequently asked questions
        </h3>

        <div className="divide-y divide-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <button
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left py-5 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    ⌄
                  </span>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden text-sm sm:text-base text-white/80 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
