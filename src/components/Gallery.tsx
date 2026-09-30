'use client';

import { useState, useEffect } from 'react';

const galleryImages = [
  {
    image: '/images/home_gallery1.jpeg',
    alt: 'Patient 1',
  },
  {
    image: '/images/home_gallery2.jpeg',
    alt: 'Patient 2',
  },
  {
    image: '/images/home_gallery3.jpeg',
    alt: 'Patient 3',
  },
  {
    image: '/images/home_gallery4.jpeg',
    alt: 'Patient 4',
  },
  {
    image: '/images/home_gallery5.jpeg',
    alt: 'Patient 5',
  },
  {
    image: '/images/home_gallery6.png',
    alt: 'Patient 6',
  },
  {
    image: '/images/home_gallery7.png',
    alt: 'Patient 7',
  },
  {
    image: '/images/home_gallery8.png',
    alt: 'Patient 8',
  },
  {
    image: '/images/home_gallery9.png',
    alt: 'Patient 9',
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
    <section id="gallery" className="py-20 bg-gray-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patients Gallery</h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Viewport */}
          <div className="overflow-hidden rounded-2xl py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
            className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 text-gray-800 shadow-lg border border-gray-100 flex items-center justify-center text-xl font-bold transition-all hover:bg-blue-600 hover:text-white hover:scale-110 focus:outline-none"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 text-gray-800 shadow-lg border border-gray-100 flex items-center justify-center text-xl font-bold transition-all hover:bg-blue-600 hover:text-white hover:scale-110 focus:outline-none"
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
                    ? 'w-8 bg-blue-600'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
