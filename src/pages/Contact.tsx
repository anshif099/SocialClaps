import Header from "@/components/Header";
import EmailSignup from "@/components/EmailSignup";
import React from "react";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 px-6 py-32">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            Contact us
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto">
            Questions, partnerships, or support. We usually reply within 24
            hours.
          </p>
        </div>

        {/* Form Card */}
        <form className="mx-auto max-w-2xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 space-y-6 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl bg-white px-4 py-3 text-black outline-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl bg-white px-4 py-3 text-black outline-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone (optional)"
            className="w-full rounded-xl bg-white px-4 py-3 text-black outline-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-400"
          />

          {/* Comment */}
          <textarea
            placeholder="Tell us what you need help with"
            rows={6}
            className="w-full rounded-xl bg-white px-4 py-3 text-black outline-none resize-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-400"
          />

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-400 px-8 py-4 text-black font-semibold shadow-[0_15px_40px_rgba(250,204,21,0.45)] hover:from-yellow-200 hover:to-yellow-300 transition-all active:scale-95"
            >
              Send message
            </button>
          </div>
        </form>

        {/* Email signup BELOW form (correct UX) */}
        <div className="mt-32">
          <EmailSignup />
        </div>
      </div>
    </section>
  );
}
