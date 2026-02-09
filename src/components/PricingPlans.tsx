import React from "react";

const plans = [
  {
    title: "BRONZE LAUNCHER",
    price: "$25",
    cta: "Launch post",
    highlight: false,
    duration: "~6 hours",
    features: [
      "10–20 Comments with Likes",
      "Mixed Verified & Regular Accounts",
      "Natural engagement flow",
      "Organic visibility boost",
    ],
  },
  {
    title: "SILVER SKYLINE",
    price: "$40",
    badge: "Most popular",
    cta: "Boost now",
    highlight: true,
    duration: "~12 hours",
    features: [
      "50 Comments with Likes",
      "Mixed Verified & Regular Accounts",
      "Balanced growth strategy",
      "Priority interaction timing",
    ],
  },
  {
    title: "GOLD MEDAL",
    price: "$75",
    cta: "Go premium",
    highlight: false,
    duration: "~24 hours",
    features: [
      "100 Comments with Likes",
      "High-trust verified mix",
      "Strong algorithm signals",
      "High-visibility engagement",
    ],
  },
  {
    title: "EMERALD VALLEY",
    price: "$125",
    cta: "Dominate reach",
    highlight: false,
    duration: "~48 hours",
    features: [
      "155 Comments with Likes",
      "Elite verified & regular mix",
      "Maximum engagement density",
      "Top-tier algorithm push",
      "Priority customer support",
    ],
  },
];

const PricingPlans: React.FC = () => {
  return (
    <section
      id="pricing"
      className="relative w-full bg-black px-6 py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.12),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Simple, transparent{" "}
            <span className="text-yellow-400">pricing</span>
          </h2>
          <p className="mt-4 text-white/70">
            Pay per Instagram post. No subscriptions. No hidden fees.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2
                ${
                  plan.highlight
                    ? "bg-yellow-400/10 border-2 border-yellow-400 shadow-[0_30px_100px_rgba(250,204,21,0.35)]"
                    : "bg-white/5 border border-white/10 hover:border-white/20"
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-semibold text-black shadow-lg">
                  {plan.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="text-center text-xs font-semibold tracking-widest text-yellow-400 mb-6">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-white">
                  {plan.price}
                </div>
                <div className="text-sm text-white/60 mt-1">
                  per Instagram post
                </div>
              </div>

              {/* CTA */}
              <button
                className={`w-full rounded-xl py-3 text-sm font-semibold mb-8 transition-all active:scale-95
                  ${
                    plan.highlight
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <ul className="space-y-4 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Duration */}
              <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
                <span>⏱</span>
                <span>
                  <strong className="text-white">Duration:</strong>{" "}
                  {plan.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
