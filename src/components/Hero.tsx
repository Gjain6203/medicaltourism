"use client";

import Link from "next/link";
import { useState } from "react";

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
  const [activeStep, setActiveStep] = useState(1);

  // Triple the array for seamless infinite marquee loop
  const marqueeItems = [...specialtiesTicker, ...specialtiesTicker, ...specialtiesTicker];

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 bg-white overflow-hidden">
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
                <span>Welcome to AJ Medical Tourism</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Heal in India with <br className="hidden sm:inline" />
              by your side
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed font-normal">
              India&apos;s top specialized medical professionals and hospitals, with end-to-end help from inquiry to follow-up.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-slate-950/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
              >
                <span>Get Free Quote</span>
                <span className="text-base">→</span>
              </Link>
              
          
            </div>

          </div>

          {/* Right Hero Card: Journey in Progress (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/40 relative overflow-hidden">
              
              {/* Header */}
              <div className="mb-6 pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Your journey
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                  Treatment plan in progress
                </h3>
              </div>

              {/* Journey Steps List */}
              <div className="space-y-3.5">
                
                {/* Step 1 */}
                <div 
                  onClick={() => setActiveStep(1)}
                  className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeStep === 1 
                      ? 'bg-blue-50/60 border-blue-200 shadow-xs' 
                      : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl">📄</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      Inquiry & reports received
                    </span>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                </div>

                {/* Step 2 */}
                <div 
                  onClick={() => setActiveStep(2)}
                  className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeStep === 2 
                      ? 'bg-blue-50/60 border-blue-200 shadow-xs' 
                      : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl">🩺</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      Specialist opinion & estimate
                    </span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping mr-1.5" />
                </div>

                {/* Step 3 */}
                <div 
                  onClick={() => setActiveStep(3)}
                  className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeStep === 3 
                      ? 'bg-blue-50/60 border-blue-200 shadow-xs' 
                      : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl">✈️</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      Visa, flight & airport pickup
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    Step 3
                  </span>
                </div>

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