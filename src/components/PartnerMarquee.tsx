"use client";

import Image from "next/image";

const partners = [
  {
    name: "BLK Super Speciality Hospital",
    icon: "/images/home_partner1.jpg",
  },
  {
    name: "Max Healthcare",
    icon: "/images/home_partner2.png",
  },
  {
    name: "Fortis Hospital",
    icon: "/images/home_partner3.png",
  },
  {
    name: "Manipal Hospital",
    icon: "/images/home_partner4.png",
  },
  {
    name: "Metro Group of Hospital",
    icon: "/images/home_partner5.png",
  },
  {
    name: "IBS Hospital",
    icon: "/images/home_partner6.jpeg",
  },
  {
    name: "Medanta The Medicity",
    icon: "/images/home_partner7.png",
  },
  {
    name: "Apollo Hospitals Touching Lives",
    icon: "/images/home_partner8.png",
  },
  {
    name: "Jaypee Hosptal",
    icon: "/images/home_partner9.png",
  },
  {
    name: "Medicover Fertility",
    icon: "/images/home_partner10.jpg",
  },
  {
    name: "Amrita Hospital",
    icon: "/images/home_partner11.jpg",
  },
  {
    name: "Artemis Lite Multi Speciality Hospital",
    icon: "/images/home_partner12.png",
  },
];

export default function PartnerMarquee() {
  // Duplicate for seamless infinite loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          Accredited Healthcare
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          OUR PARTNER HOSPITALS
        </h3>
      </div>

      {/* Marquee Wrapper with left & right gradient fade */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Gradient */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />

        {/* Right Fade Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

        {/* Infinite Scrolling Track */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-4">
          {marqueeList.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-4 bg-white hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-300 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 cursor-pointer group"
            >
              {/* Icon / Badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center p-2 shadow-xs group-hover:scale-105 group-hover:bg-white transition-all flex-shrink-0">
                <Image
                  src={partner.icon}
                  alt={partner.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Info */}
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base whitespace-nowrap">
                  {partner.name}
                </h4>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Accredited Center</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

