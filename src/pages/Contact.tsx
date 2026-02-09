import Header from "@/components/Header";
import EmailSignup from "@/components/EmailSignup";
import React from "react";

export default function Contact() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page wrapper */}
      <main className="relative min-h-screen bg-black text-white pt-28 overflow-hidden">
        {/* === LIQUID BACKGROUND === */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(234,179,8,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        <div className="relative z-10">
          {/* === HEADING === */}
          <div className="text-center mb-20 px-6">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-400 to-yellow-300 bg-clip-text text-transparent">
                us
              </span>
            </h1>
            <p className="text-white/65 max-w-md mx-auto text-sm sm:text-base">
              Questions, partnerships, or support. We usually reply within 24
              hours.
            </p>
          </div>

          {/* === GLASS FORM CARD === */}
          <form className="mx-auto max-w-2xl px-6">
            <div className="rounded-[36px] bg-white/5 backdrop-blur-2xl border border-white/15 p-10 shadow-[0_40px_120px_rgba(59,130,246,0.35)] space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-2xl bg-white/90 px-5 py-3.5 text-black outline-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-2xl bg-white/90 px-5 py-3.5 text-black outline-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-300"
                />
              </div>

              <input
                type="tel"
                placeholder="Phone (optional)"
                className="w-full rounded-2xl bg-white/90 px-5 py-3.5 text-black outline-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-300"
              />

              <textarea
                placeholder="Tell us what you need help with"
                rows={6}
                className="w-full rounded-2xl bg-white/90 px-5 py-3.5 text-black outline-none resize-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-300"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-yellow-300 to-yellow-400 py-4 text-black font-semibold shadow-[0_20px_60px_rgba(234,179,8,0.45)] hover:from-yellow-200 hover:to-yellow-300 transition active:scale-95"
              >
                Send message
              </button>
            </div>
          </form>

          {/* === EMAIL SIGNUP === */}
          <div className="mt-1">
            <EmailSignup />
          </div>
        </div>
      </main>
    </>
  );
}
