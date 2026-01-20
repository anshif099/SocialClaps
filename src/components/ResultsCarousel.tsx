import { useState } from "react";

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
    <section className="relative w-full bg-black py-16 flex justify-center">
      <div className="relative w-full max-w-3xl overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((src, i) => (
            <div key={i} className="min-w-full flex justify-center">
              <img
                src={src}
                alt={`slide-${i}`}
                className="max-h-[420px] rounded-xl object-contain bg-white"
              />
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black"
        >
          ←
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black"
        >
          →
        </button>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
