import React from "react";

const plans = [
  {
    title: "BRONZE LAUNCHER",
    subtitle: "Starter Instagram Boost",
    price: "$25",
    color: "#CD7F32",
    cta: "Launch your post",
    duration: "~6 hours",
    description: "Ideal for new posts needing a quick credibility kickstart.",
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
    color: "#C0C0C0",
    badge: "Most popular",
    cta: "Boost Instagram now",
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
    color: "#FFD700",
    cta: "Go premium",
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
    color: "#50C878",
    cta: "Dominate your reach",
    duration: "~48 hours",
    description: "For creators and brands ready to dominate their niche.",
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
      className="relative w-full bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50 px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl sm:text-6xl font-bold text-black">
            Pricing Plans
          </h2>
          <p className="mt-6 text-lg text-black/70">
            Real Instagram engagement with authentic comments & likes —
            engineered for algorithm trust.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                borderColor: plan.color,
                boxShadow: `0 40px 120px ${plan.color}55`,
              }}
              className="relative rounded-[36px] p-9 bg-white/70 backdrop-blur-2xl border transition-all hover:-translate-y-3"
            >
              {/* Badge */}
              {plan.badge && (
                <span
                  style={{ backgroundColor: plan.color }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-black shadow-lg"
                >
                  {plan.badge}
                </span>
              )}

              {/* Title */}
              <h3
                style={{ color: plan.color }}
                className="text-center text-lg font-extrabold tracking-wider"
              >
                {plan.title}
              </h3>

              <p className="text-center text-sm text-black/60 mt-1">
                {plan.subtitle}
              </p>

              {/* Price */}
              <div className="text-center my-8">
                <div className="text-6xl font-extrabold text-black">
                  {plan.price}
                </div>
                <div className="text-sm text-black/60 mt-1">
                  per Instagram post
                </div>
              </div>

              {/* CTA */}
              <button
                style={{
                  backgroundColor: plan.color,
                }}
                className="w-full rounded-2xl py-4 text-sm font-bold text-black mb-6 transition hover:brightness-110 active:scale-95"
              >
                {plan.cta}
              </button>

              {/* Description */}
              <p className="text-sm text-black/70 mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span
                      style={{ color: plan.color }}
                      className="font-bold"
                    >
                      ✓
                    </span>
                    <span className="text-black/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Duration */}
              <div className="mt-8 text-sm text-black/70 flex gap-2">
                <span>⏱</span>
                <span>
                  <strong>Duration:</strong> {plan.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="mt-20 text-center text-sm text-black/60 max-w-3xl mx-auto">
          Instant activation. No password required. Organic-looking engagement
          only.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
