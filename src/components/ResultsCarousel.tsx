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
    <section className="relative w-full bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-50 py-16 flex justify-center overflow-hidden">
      {/* === LIQUID GLASS BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(96,165,250,0.35),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_60%,rgba(253,224,71,0.35),transparent_50%)]" />

      <div className="relative w-full max-w-5xl px-6">
        {/* === GLASS SHELL === */}
        <div className="relative overflow-hidden rounded-[40px]
          bg-white/60 backdrop-blur-2xl
          border border-black/10
          shadow-[0_60px_160px_rgba(59,130,246,0.25)]">

          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((src, i) => (
              <div
                key={i}
                className="min-w-full flex justify-center items-center p-10"
              >
                <img
                  src={src}
                  alt={`result-${i}`}
                  className={`max-h-[460px] rounded-[28px]
                    object-contain bg-white
                    shadow-[0_30px_90px_rgba(0,0,0,0.25)]
                    transition-all duration-500 ${
                      i === index
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-70"
                    }`}
                />
              </div>
            ))}
          </div>

          {/* === LEFT ARROW === */}
          <button
            onClick={prev}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-10
              h-12 px-4 rounded-full
              bg-white/70 backdrop-blur-xl
              border border-black/10
              text-black/70
              flex items-center gap-1
              hover:bg-white hover:text-yellow-500
              transition active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          {/* === RIGHT ARROW === */}
          <button
            onClick={next}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-10
              h-12 px-4 rounded-full
              bg-white/70 backdrop-blur-xl
              border border-black/10
              text-black/70
              flex items-center gap-1
              hover:bg-white hover:text-yellow-500
              transition active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* === PROGRESS INDICATOR (iOS STYLE) === */}
        <div className="mt-12 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-10 bg-gradient-to-r from-blue-500 to-yellow-400 shadow-[0_0_20px_rgba(253,224,71,0.6)]"
                  : "w-3 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
