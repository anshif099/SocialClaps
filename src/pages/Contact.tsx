import Header from "@/components/Header";
import EmailSignup from "@/components/EmailSignup";
import React from "react";

export default function Contact() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page wrapper */}
      <main className="min-h-screen bg-black text-white pt-24">
        {/* Heading */}
        <div className="text-center mb-16 px-6">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
            Contact us
          </h1>
          <p className="text-white/70 max-w-md mx-auto text-sm sm:text-base">
            Questions, partnerships, or support. We usually reply within 24
            hours.
          </p>
        </div>

        {/* Form */}
        <form className="mx-auto max-w-2xl px-6 space-y-6">
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

          <input
            type="tel"
            placeholder="Phone (optional)"
            className="w-full rounded-xl bg-white px-4 py-3 text-black outline-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            placeholder="Tell us what you need help with"
            rows={6}
            className="w-full rounded-xl bg-white px-4 py-3 text-black outline-none resize-none placeholder:text-black/50 focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-yellow-400 py-4 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Send message
          </button>
        </form>

        {/* Email signup */}
        <div className="mt-32">
          <EmailSignup />
        </div>
      </main>
    </>
  );
}
