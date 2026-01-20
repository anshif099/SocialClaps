import React from "react";

export default function EmailSignup() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full bg-black px-4 py-20 text-white">
      {/* Top CTA */}
      <div className="flex justify-center mb-14">
        <button
          onClick={scrollToPricing}
          className="rounded-2xl bg-yellow-400 px-8 py-4 text-black font-medium text-base hover:bg-yellow-300 transition"
        >
          Start campaign!
        </button>
      </div>

      {/* Content */}
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Join our email list
        </h2>

        <p className="text-white/80 text-sm sm:text-base mb-6">
          Get exclusive deals and early access to new products.
        </p>

        {/* Email input */}
        <div className="relative">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-full bg-[#d6d6d6] px-6 py-4 pr-14 text-black text-base outline-none placeholder:text-black/60"
          />
          <button
            aria-label="Submit email"
            className="absolute right-5 top-1/2 -translate-y-1/2 text-black text-xl"
          >
            →
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-white/60">
        © 2026 SocialClaps, Powered by Rainhopes
        <div className="mt-3">
          <a href="#" className="underline hover:text-white">
            Terms and Policies
          </a>
        </div>
      </div>
    </section>
  );
}
