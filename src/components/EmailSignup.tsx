import React, { useState } from "react";

export default function EmailSignup() {
  const [showModal, setShowModal] = useState(false);

  const scrollToPricing = () => {
    document
      .getElementById("pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openInstagramApp = () => {
    // Best possible attempt — OS decides
    window.location.href = "instagram://user?username=_benthompson_";
    setShowModal(false);
  };

  const openInstagramWeb = () => {
    window.open(
      "https://www.instagram.com/_benthompson_?igsh=a2g4ZGV1OXppZDNy",
      "_blank",
      "noopener,noreferrer"
    );
    setShowModal(false);
  };

  return (
    <>
      {/* ================= MAIN SECTION ================= */}
      <section className="relative w-full px-6 py-16 overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50">
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* CTA */}
          <div className="flex justify-center mb-16">
            <button
              onClick={scrollToPricing}
              className="rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 px-12 py-4 font-semibold active:scale-95"
            >
              Start campaign
            </button>
          </div>

          {/* Instagram Card */}
          <div className="mb-20 flex justify-center">
            <div
              onClick={() => setShowModal(true)}
              className="cursor-pointer flex items-center gap-4 rounded-3xl bg-white/70 backdrop-blur-xl px-7 py-4 shadow-xl hover:scale-[1.03] transition"
            >
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                B
              </div>
              <div>
                <p className="font-semibold">@_benthompson_</p>
                <p className="text-xs text-black/60">
                  Instagram · Real engagement
                </p>
              </div>
              <span className="ml-2">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-3xl p-6 w-[90%] max-w-sm text-center shadow-2xl">
            <h3 className="text-lg font-semibold mb-2">
              Open Instagram
            </h3>
            <p className="text-sm text-black/60 mb-6">
              Choose how you want to continue
            </p>

            <button
              onClick={openInstagramApp}
              className="w-full mb-3 rounded-full bg-black text-white py-3 font-medium active:scale-95"
            >
              Open Instagram App
            </button>

            <button
              onClick={openInstagramWeb}
              className="w-full rounded-full bg-yellow-400 py-3 font-medium active:scale-95"
            >
              Open in Browser
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-sm text-black/50 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
