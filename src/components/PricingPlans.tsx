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
      className="relative w-full bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50 px-6 py-16 overflow-hidden"
    >
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.35),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_0%,rgba(253,224,71,0.35),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* === HEADER === */}
        <div className="text-center max-w-xl mx-auto mb-24">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black/90">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="mt-4 text-black/65 hover:text-black/85 transition">
            Pay per Instagram post. No subscriptions. No hidden fees.
          </p>
        </div>

        {/* === PLANS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group rounded-[36px] p-9 backdrop-blur-2xl transition-all duration-300
                ${
                  plan.highlight
                    ? "bg-white/70 border border-yellow-400/40 shadow-[0_60px_160px_rgba(253,224,71,0.45)] scale-[1.04]"
                    : "bg-white/60 border border-black/10 hover:-translate-y-2 hover:shadow-[0_50px_140px_rgba(59,130,246,0.35)]"
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 px-4 py-1 text-xs font-semibold text-black shadow-lg">
                  {plan.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="text-center text-xs font-semibold tracking-widest text-black/70 group-hover:text-yellow-500 mb-6 transition">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-black/90">
                  {plan.price}
                </div>
                <div className="text-sm text-black/60 mt-1">
                  per Instagram post
                </div>
              </div>

              {/* CTA */}
              <button
                className={`w-full rounded-2xl py-3.5 text-sm font-semibold mb-8 transition-all active:scale-95
                  ${
                    plan.highlight
                      ? "bg-gradient-to-r from-yellow-300 to-yellow-400 text-black hover:from-blue-400 hover:to-yellow-300"
                      : "bg-white/70 text-black/80 hover:text-yellow-500 hover:bg-white"
                  }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <ul className="space-y-4 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span className="text-black/70 group-hover:text-black/90 transition">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Duration */}
              <div className="mt-8 flex items-center gap-2 text-sm text-black/60 group-hover:text-black/80 transition">
                <span>⏱</span>
                <span>
                  <strong className="text-black/90">Duration:</strong>{" "}
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
