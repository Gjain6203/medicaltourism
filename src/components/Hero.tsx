
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    badge: "Welcome to Sonaura Global HealthCare",
    headline: "WELCOME TO SONAURA GLOBAL HEALTHCARE",
    subtitle: "India's Top Specialized Medical Professionals and Hospitals",
    ctaText: "CLICK HERE",
    ctaSubtext: "Get Free Quote",
    image: "/images/home_hero1.webp",
  },
  {
    badge: "Specialized Medical Network",
    headline: "INDIA'S TOP SPECIALIZED MEDICAL PROFESSIONALS",
    subtitle: "Are you looking for the best spine surgeon and spine specialist hospital in India?",
    ctaText: "CLICK HERE",
    ctaSubtext: "Consult Specialist",
    image: "/images/home_hero2.png",
  },
  {
    badge: "World-Class Healthcare In India",
    headline: "WORLD CLASS MEDICAL FACILITIES",
    subtitle: "Start your Journey to Good Health with Sonaura Global HealthCare",
    ctaText: "CLICK HERE",
    ctaSubtext: "Explore Facilities",
    image: "/images/home_hero3.webp",
  },
];

const journeySteps = [
  {
    stepNumber: "01", 
    icon: "📄",
    title: "Inquiry & reports received",
    tag: "Phase 1",
    statusBadge: "✓ Reports Verified",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Submit your medical reports online. Our senior medical board reviews your diagnosis and medical history within 24 hours at zero cost.",
    highlights: [
      "Zero-cost preliminary doctor evaluation",
      "Immediate case coordinator assigned 24/7",
      "Strict data privacy & medical report review"
    ],
  },
  {
    stepNumber: "02",
    icon: "🩺",
    title: "Specialist opinion & estimate",
    tag: "Phase 2",
    statusBadge: "• Active Estimation",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Receive personalized treatment plans, surgeon credentials, and transparent cost estimates across India's top JCI & NABH accredited hospitals.",
    highlights: [
      "Second opinions from top super-specialist surgeons",
      "Itemized, transparent hospital packages",
      "Save up to 70-80% compared to Western hospital bills"
    ],
  },
  {
    stepNumber: "03",
    icon: "✈️",
    title: "Visa, flight & airport pickup",
    tag: "Phase 3",
    statusBadge: "Travel & Stay",
    statusStyle: "bg-indigo-50 text-indigo-700 border-indigo-200",
    description: "Full travel support: official hospital Visa Invitation Letters (VIL), priority flight and hotel bookings, and dedicated VIP airport reception.",
    highlights: [
      "Hospital Visa Invitation Letter (VIL) in 48 hours",
      "VIP airport pickup & dedicated vehicle transport",
      "Dedicated personal bilingual Case Manager by your side"
    ],
  }
];

const specialtiesTicker = [
  "Nephrology",
  "Brain & Spine",
  "Lung Transplant",
  "Urology Surgery",
  "Cardiac Surgery",
  "Gastroenterology",
  "Orthopaedic & Joint",
  "Cancer Care"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider (pauses if user interacts, or rotates every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);



  // Triple the array for seamless infinite marquee loop
  const marqueeItems = [...specialtiesTicker, ...specialtiesTicker, ...specialtiesTicker];

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 bg-white overflow-hidden">
      {/* Background Subtle Slide Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700">
        <Image
          src={heroSlides[currentSlide].image}
          alt="Hero slide background"
          fill
          className="object-cover opacity-[0.05] blur-[1px] transition-all duration-700 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </div>

      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-slate-50/80 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Pill Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-slate-700 text-xs sm:text-sm font-medium shadow-xs">
                <span>{heroSlides[currentSlide].badge}</span>
              </div>
            </div>

            {/* Main Headline & Subtitle Container */}
            <div className="min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] transition-all duration-300">
                {heroSlides[currentSlide].headline}
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed font-normal transition-all duration-300">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* CTA Action Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base tracking-wide"
              >
                <span>{heroSlides[currentSlide].ctaText}</span>
              </Link>
            </div>

          </div>

          {/* Right Hero Card: Journey in Progress (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl shadow-slate-200/40 relative overflow-hidden">
              
              {/* Header */}
              <div className="mb-5 pb-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    YOUR JOURNEY
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                    Treatment plan in progress
                  </h3>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  Step {currentSlide + 1} of 3
                </span>
              </div>

              {/* Journey Steps List - Clickable Buttons that Switch Slides */}
              <div className="space-y-3">
                {journeySteps.map((step, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                        isActive
                          ? "bg-blue-50/80 border-blue-300 shadow-md ring-1 ring-blue-400/25"
                          : "bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/70 shadow-xs"
                      }`}
                    >
                      {/* Step Row / Button */}
                      <div className="flex items-center justify-between p-3.5 sm:p-4">
                        <div className="flex items-center gap-3">
                          <span className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xl transition-all ${
                            isActive ? "bg-white shadow-xs scale-105" : "bg-slate-100"
                          }`}>
                            {step.icon}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                {step.tag}
                              </span>
                              {isActive && (
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                              )}
                            </div>
                            <h4 className={`text-xs sm:text-sm font-bold transition-colors ${
                              isActive ? "text-blue-950 font-extrabold" : "text-slate-800"
                            }`}>
                              {step.title}
                            </h4>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <span className={`text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-1 rounded-full border ${
                          isActive
                            ? step.statusStyle
                            : "bg-slate-100 text-slate-500 border-slate-200"
                        }`}>
                          {step.statusBadge}
                        </span>
                      </div>

                      {/* Content Related to this Step (Shown when Active / Clicked) */}
                      {isActive && (
                        <div className="px-4 pb-4 pt-1 border-t border-blue-100/90 text-xs sm:text-sm animate-in fade-in duration-300">
                          <p className="text-slate-600 leading-relaxed mb-3">
                            {step.description}
                          </p>
                          <ul className="space-y-1.5 mb-3.5">
                            {step.highlights.map((item, hIdx) => (
                              <li key={hIdx} className="flex items-center gap-2 text-slate-700 font-medium text-xs sm:text-xs">
                                <span className="text-blue-600 text-xs font-bold">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="pt-2.5 border-t border-blue-100 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                              Phase {step.stepNumber} Active
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

        {/* 3 Metric / Stats Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 pt-8 border-t border-slate-100">
          
          {/* Stat 1 */}
          <div className="bg-slate-50/60 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all">
            <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mb-2">
              100
            </div>
            <p className="text-slate-600 text-sm font-medium">
              + Expert doctors across top hospitals
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-slate-50/60 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all">
            <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mb-2">
              8
            </div>
            <p className="text-slate-600 text-sm font-medium">
              Core treatment specialties
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-slate-50/60 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all">
            <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mb-2">
              8
            </div>
            <p className="text-slate-600 text-sm font-medium">
              Step end-to-end process
            </p>
          </div>

        </div>

        {/* Ticker / Specialty Smooth Infinite Marquee Strip */}
        <div className="mt-10 pt-6 border-t border-slate-100 relative overflow-hidden">
          {/* Left Fade Gradient */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />

          {/* Right Fade Gradient */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

          {/* Marquee Track */}
          <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-2 select-none">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
                <span className="text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors whitespace-nowrap">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}