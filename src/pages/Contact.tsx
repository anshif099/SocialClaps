import Header from "@/components/Header";
import EmailSignup from "@/components/EmailSignup";
import React from "react";

export default function Contact() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page wrapper */}
      <main
        className="relative min-h-screen pt-28 overflow-hidden
        bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50"
      >
        {/* === LIQUID BACKGROUND === */}
        <div className="absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.35),transparent_45%)]" />
        <div className="absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_80%_0%,rgba(253,224,71,0.35),transparent_50%)]" />

        <div className="relative z-10">
          {/* === HEADING === */}
          <div className="text-center mb-20 px-6">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-3 text-black/90">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
                us
              </span>
            </h1>
            <p className="text-black/65 max-w-md mx-auto text-sm sm:text-base">
              Questions, partnerships, or support. We usually reply within 24
              hours.
            </p>
          </div>

          {/* === GLASS FORM CARD === */}
          <form className="mx-auto max-w-2xl px-6">
            <div
              className="rounded-[40px]
              bg-white/70 backdrop-blur-2xl
              border border-black/10
              p-10 shadow-[0_40px_140px_rgba(59,130,246,0.35)]
              space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-2xl
                    bg-white
                    px-5 py-3.5
                    text-black
                    outline-none
                    placeholder:text-black/50
                    focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-2xl
                    bg-white
                    px-5 py-3.5
                    text-black
                    outline-none
                    placeholder:text-black/50
                    focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <input
                type="tel"
                placeholder="Phone (optional)"
                className="w-full rounded-2xl
                  bg-white
                  px-5 py-3.5
                  text-black
                  outline-none
                  placeholder:text-black/50
                  focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                placeholder="Tell us what you need help with"
                rows={6}
                className="w-full rounded-2xl
                  bg-white
                  px-5 py-3.5
                  text-black
                  outline-none
                  resize-none
                  placeholder:text-black/50
                  focus:ring-2 focus:ring-yellow-400"
              />

              <button
                type="submit"
                className="w-full rounded-2xl
                  bg-gradient-to-r from-yellow-300 to-yellow-400
                  py-4 text-black font-semibold
                  shadow-[0_20px_60px_rgba(253,224,71,0.45)]
                  hover:from-blue-400 hover:to-yellow-300
                  transition active:scale-95"
              >
                Send message
              </button>
            </div>
          </form>

          {/* === EMAIL SIGNUP === */}
          <div className="mt-4">
            <EmailSignup />
          </div>
        </div>
      </main>
    </>
  );
}
