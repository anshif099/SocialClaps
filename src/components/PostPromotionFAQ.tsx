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
    <section className="relative w-full px-6 py-16 overflow-hidden
      bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50">

      {/* === LIQUID BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.35),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_80%_0%,rgba(253,224,71,0.35),transparent_50%)]" />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* === HEADER === */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-black/90">
            Post{" "}
            <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
              promotion
            </span>
          </h2>
          <p className="text-black/65 text-sm sm:text-base leading-relaxed">
            Choose your coverage tier. Instant activation.
            <br />
            No password required. Real likes & comments only.
          </p>
        </div>

        {/* === CTA GLASS CARD === */}
        <div className="mb-24 rounded-[36px]
          bg-white/70 backdrop-blur-2xl
          border border-black/10
          p-8 shadow-[0_40px_120px_rgba(59,130,246,0.25)]">

          <button
            onClick={scrollToPricing}
            className="w-full rounded-full
              bg-gradient-to-r from-yellow-300 to-yellow-400
              py-4 text-black font-semibold text-base
              hover:from-blue-400 hover:to-yellow-300
              transition-all active:scale-95"
          >
            Start campaign
          </button>
        </div>

        {/* === FAQ TITLE === */}
        <h3 className="text-2xl font-semibold mb-10 text-center text-black/90">
          Frequently asked questions
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
                  <div className="overflow-hidden px-8 pb-6
                    text-sm sm:text-base text-black/70 leading-relaxed">
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
