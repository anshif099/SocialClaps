import React from "react";

const plans = [
  {
    title: "BRONZE LAUNCHER",
    subtitle: "Starter Instagram Boost",
    price: "$25",
    cta: "Launch your post",
    highlight: false,
    duration: "~6 hours",
    description:
      "Ideal for new posts needing a quick credibility kickstart.",
    features: [
      "10–20 authentic comments with likes",
      "Mix of verified & regular accounts",
      "Natural engagement flow",
      "Organic visibility boost",
    ],
  },
  {
    title: "SILVER SKYLINE",
    subtitle: "Balanced Instagram Growth",
    price: "$40",
    badge: "Most popular",
    cta: "Boost Instagram now",
    highlight: true,
    duration: "~12 hours",
    description:
      "Our most popular plan for steady momentum and balanced growth.",
    features: [
      "50 authentic comments with likes",
      "Mix of verified & regular accounts",
      "Priority interaction timing",
      "Balanced growth strategy",
    ],
  },
  {
    title: "GOLD MEDAL",
    subtitle: "Premium Instagram Engagement",
    price: "$75",
    cta: "Go premium",
    highlight: false,
    duration: "~24 hours",
    description:
      "Perfect for high-visibility campaigns that need strong reach.",
    features: [
      "100 authentic comments with likes",
      "High-trust mix with more verified accounts",
      "Strong algorithm signals",
      "High-visibility engagement push",
    ],
  },
  {
    title: "EMERALD VALLEY",
    subtitle: "Elite Instagram Domination",
    price: "$125",
    cta: "Dominate your reach",
    highlight: false,
    duration: "~48 hours",
    description:
      "For creators and brands ready to dominate their niche.",
    features: [
      "155 authentic comments with likes",
      "Elite verified & regular profile mix",
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
      className="relative w-full bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50 px-6 py-20 overflow-hidden"
    >
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.35),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_0%,rgba(253,224,71,0.35),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* === HEADER === */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black/90">
            Pricing Plans:{" "}
            <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
              Affordable Instagram Engagement
            </span>
          </h2>
          <p className="mt-6 text-black/70 leading-relaxed">
            Choose from flexible packages tailored to your needs. Every plan
            delivers real comments with likes from a trusted mix of verified and
            regular accounts — designed for natural-looking growth.
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
              <h3 className="text-center text-xs font-semibold tracking-widest text-black/70 group-hover:text-yellow-500 transition">
                {plan.title}
              </h3>

              <p className="mt-2 text-center text-sm text-black/60">
                {plan.subtitle}
              </p>

              {/* Price */}
              <div className="text-center my-8">
                <div className="text-5xl font-bold text-black/90">
                  {plan.price}
                </div>
                <div className="text-sm text-black/60 mt-1">
                  per Instagram post
                </div>
              </div>

              {/* CTA */}
              <button
                className={`w-full rounded-2xl py-3.5 text-sm font-semibold mb-6 transition-all active:scale-95
                  ${
                    plan.highlight
                      ? "bg-gradient-to-r from-yellow-300 to-yellow-400 text-black hover:from-blue-400 hover:to-yellow-300"
                      : "bg-white/70 text-black/80 hover:text-yellow-500 hover:bg-white"
                  }`}
              >
                {plan.cta}
              </button>

              {/* Description */}
              <p className="text-sm text-black/65 mb-6 leading-relaxed">
                {plan.description}
              </p>

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

        {/* === FOOTNOTE === */}
        <p className="mt-20 text-center text-sm text-black/60 max-w-3xl mx-auto">
          All plans include instant activation. No password required. Focus on
          creating great content — we handle the engagement.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
