"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/images/home_hero1.webp",
    title: "Welcome to AJ Medical Tourism",
    subtitle: "India's Top Specialised Medical Professionals, and Hospitals.",
    primaryBtnText: "Click Here",
    primaryBtnLink: "/contact",
  },
  {
    image: "/images/home_hero2.png",
    title: "India's Top Specialised Medical Professionals",
    subtitle: "Are you looking for the best spine surgeon and spine  specialist hospital in India?",
    primaryBtnText: "Click Here",
    primaryBtnLink: "/contact",
  },
  {
    image: "/images/home_hero3.webp",
    title: "World Class Medical Facilities",
    subtitle: "Start your Journey to Good Health with AJ Medical Tourism.",
    primaryBtnText: "Click Here",
    primaryBtnLink: "/contact",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide with pause support
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative h-[550px] sm:h-[620px] lg:h-[680px] w-full overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            index === activeSlide
              ? "z-10 opacity-100"
              : "z-0 opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover object-center transform scale-105 transition-transform duration-7000 ease-out"
          />

          {/* Modern Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              
             

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight text-white drop-shadow-md">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed drop-shadow">
                {slide.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={slide.primaryBtnLink}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  <span>{slide.primaryBtnText}</span>
                </Link>

             
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 z-20 flex h-11 w-11 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-2xl text-white backdrop-blur-md shadow-lg transition hover:scale-110 focus:outline-none"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 z-20 flex h-11 w-11 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-2xl text-white backdrop-blur-md shadow-lg transition hover:scale-110 focus:outline-none"
      >
        ›
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-9 bg-blue-500 shadow-md shadow-blue-500/50"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}