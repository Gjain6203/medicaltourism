'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const galleryImages = [
  {
    image: '/images/sonaura_gallery1.webp',
    alt: 'Patient 1',
  },
  {
    image: '/images/sonaura_gallery2.webp',
    alt: 'Patient 2',
  },
  {
    image: '/images/sonaura_gallery3.webp',
    alt: 'Patient 3',
  },
  {
    image: '/images/sonaura_gallery4.webp',
    alt: 'Patient 4',
  },
  {
    image: '/images/sonaura_gallery5.webp',
    alt: 'Patient 5',
  },
  {
    image: '/images/sonaura_gallery6.webp',
    alt: 'Patient 6',
  },
  {
    image: '/images/sonaura_gallery7.webp',
    alt: 'Patient 7',
  },
  {
    image: '/images/sonaura_gallery8.webp',
    alt: 'Patient 8',
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 image
      } else if (window.innerWidth < 768) {
        setItemsPerView(2); // Small tablet: 2 images
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // Tablet: 3 images
      } else {
        setItemsPerView(4); // Laptop / Desktop: 4 images
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, galleryImages.length - itemsPerView);

  // Auto slide interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50/70 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Real Moments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Patients Gallery
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Viewport */}
          <div className="overflow-hidden rounded-3xl py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2.5 sm:px-3.5"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 hover:-translate-y-2 bg-slate-100 border border-slate-200/80">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-slate-800 shadow-xl border border-slate-200/80 flex items-center justify-center text-xl sm:text-2xl font-bold transition-all hover:bg-blue-600 hover:text-white hover:border-transparent hover:scale-110 focus:outline-none"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-slate-800 shadow-xl border border-slate-200/80 flex items-center justify-center text-xl sm:text-2xl font-bold transition-all hover:bg-blue-600 hover:text-white hover:border-transparent hover:scale-110 focus:outline-none"
          >
            ›
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-blue-600 shadow-md shadow-blue-500/40'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

