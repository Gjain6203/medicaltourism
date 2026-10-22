import Image from 'next/image';
import { useState, useEffect, useRef, TouchEvent } from 'react';

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
  const [itemsPerView, setItemsPerView] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Touch swipe refs
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Handle responsive items per view
  useEffect(() => {
    setMounted(true);
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1); // Mobile: 1 image
      } else if (width < 768) {
        setItemsPerView(2); // Small tablet: 2 images
      } else if (width < 1024) {
        setItemsPerView(3); // Tablet: 3 images
      } else {
        setItemsPerView(4); // Desktop: 4 images
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const effectiveItems = mounted ? itemsPerView : 1;
  const maxIndex = Math.max(0, galleryImages.length - effectiveItems);

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

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsPaused(false);
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-24 bg-slate-50/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Real Moments
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Patients Gallery
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Swipe or use arrows to view our international patients
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group select-none touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Viewport */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / effectiveItems)}%)`,
              }}
            >
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / effectiveItems}%` }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-100 border border-slate-200/90">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority={index < 2}
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
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 text-slate-900 shadow-lg border border-slate-200/90 flex items-center justify-center text-xl sm:text-2xl font-bold transition-all hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 focus:outline-none"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 text-slate-900 shadow-lg border border-slate-200/90 flex items-center justify-center text-xl sm:text-2xl font-bold transition-all hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 focus:outline-none"
          >
            ›
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-6 sm:w-8 bg-blue-600 shadow-sm shadow-blue-500/50'
                    : 'w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
