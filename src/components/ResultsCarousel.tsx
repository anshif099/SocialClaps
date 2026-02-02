import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";

const slides = [slide1, slide2, slide3, slide4];

export default function ResultsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section className="relative w-full bg-black py-24 flex justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_50%)]" />

      <div className="relative w-full max-w-4xl px-6">
        {/* Carousel shell */}
        <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((src, i) => (
              <div
                key={i}
                className="min-w-full flex justify-center items-center p-8"
              >
                <img
                  src={src}
                  alt={`result-${i}`}
                  className={`max-h-[440px] rounded-2xl object-contain bg-white shadow-2xl transition-all duration-500 ${
                    i === index
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-70"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center hover:bg-black transition active:scale-95"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center hover:bg-black transition active:scale-95"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
