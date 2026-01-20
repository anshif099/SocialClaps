import EmailSignup from "@/components/EmailSignup";
import Header from "@/components/Header";
import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black px-4  text-white">
        <Header />
      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-10 pt-10">
        Contact
      </h1>

      {/* Form */}
      <form className="mx-auto max-w-2xl space-y-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md bg-[#d6d6d6] px-4 py-3 text-black outline-none placeholder:text-black/60"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-[#d6d6d6] px-4 py-3 text-black outline-none placeholder:text-black/60"
          />
        </div>

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone"
          className="w-full rounded-md bg-[#d6d6d6] px-4 py-3 text-black outline-none placeholder:text-black/60"
        />

        {/* Comment */}
        <textarea
          placeholder="Comment"
          rows={6}
          className="w-full rounded-md bg-[#d6d6d6] px-4 py-3 text-black outline-none resize-none placeholder:text-black/60"
        />

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="rounded-xl bg-yellow-400 px-8 py-3 text-black font-medium hover:bg-yellow-300 transition"
          >
            Submit
          </button>
          <EmailSignup />
        </div>
      </form>
    </section>
  );
}
