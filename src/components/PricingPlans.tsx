import React from "react";

const plans = [
  {
    title: "THE STARTER",
    price: "$20",
    cta: "GET STARTED",
    highlight: false,
    duration: "~6 Hours",
    features: [
      "25+ Network Interactions",
      "Targeted Post Activation",
      "Verified & Regular Accounts",
      "Organic Growth",
    ],
  },
  {
    title: "THE INSIDER 🚀",
    price: "$40",
    cta: "MOST POPULAR",
    highlight: true,
    duration: "~12 Hours",
    features: [
      "55+ Network Interactions",
      "High-Volume Promotion",
      "Verified & Regular Accounts",
      "Priority Placement",
    ],
  },
  {
    title: "LABEL READY",
    price: "$70",
    cta: "GO VIRAL",
    highlight: false,
    duration: "~24 Hours",
    features: [
      "100+ Network Interactions",
      "Maximum Visibility Strategy",
      "Verified & Regular Accounts",
      '"Label Ready" Metrics',
    ],
  },
  {
    title: "THE VIRAL LAUNCH ✨",
    price: "$129",
    cta: "PRIORITY BUY",
    highlight: false,
    duration: "~48 Hours",
    features: [
      "200+ Network Interactions",
      "Dedicated 48-Hour Network Blast",
      "Extra Verified & Regular Accounts",
      "Priority Customer Support",
      "Maximum Algorithm Push",
    ],
  },
];

const PricingPlans: React.FC = () => {
  return (
    <section id="pricing" className="w-full bg-black px-6 py-32">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-8 text-white shadow-xl
              ${plan.highlight
                ? "border-2 border-yellow-400 shadow-yellow-400/30"
                : "border border-white/10"
              }`}
          >
            {/* Title */}
            <h3 className="text-sm font-semibold tracking-widest text-yellow-400 mb-6 text-center">
              {plan.title}
            </h3>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="text-5xl font-bold">{plan.price}</div>
              <div className="text-sm text-white/60 mt-1">per post</div>
            </div>

            {/* CTA */}
            <button
              className={`w-full rounded-lg py-3 text-sm font-semibold mb-8 transition
                ${plan.highlight
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]"
                }`}
            >
              {plan.cta}
            </button>

            {/* Features */}
            <ul className="space-y-4 text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Duration */}
            <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
              <span>⏱</span>
              <span>
                <strong>Duration:</strong> {plan.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
