
import Image from "next/image";

const countries = [
  {
    name: "Dubai (UAE)",
    icon: "/images/home_dubai.png",
  },
  {
    name: "Tanzania",
    icon: "/images/home_tanzania.webp",
  },
  {
    name: "Yemen",
    icon: "/images/home_yamen.png",
  },
  {
    name: "Oman",
    icon: "/images/home_omnam.png",
  },
  {
    name: "Nigeria",
    icon: "/images/home_nigeria.png",
  },
  {
    name: "Sudan",
    icon: "/images/home_sudan.png",
  },
  {
    name: "Uganda",
    icon: "/images/home_uganda.png",
  },
  {
    name: "South Africa",
    icon: "/images/home_southafrica.jfif",
  },
  {
    name: "Ghana",
    icon: "/images/home_ghana.png",
  },
  {
    name: "Myanmar",
    icon: "/images/home_myanmar.png",
  },
  {
    name: "Uzbekistan",
    icon: "/images/home_uzbekistan.png",
  },
  {
    name: "Mozambique",
    icon: "/images/home_mozambique.png",
  },
  {
    name: "Kazakhstan",
    icon: "/images/home_kazakhstan.png",
  },
  {
    name: "Iraq",
    icon: "/images/home_iraq.jfif",
  },
  {
    name: "Fiji",
    icon: "/images/home_fiji.png",
  },
];

export default function CountryMarquee() {
  // Duplicate for seamless infinite loop
  const marqueeList = [...countries, ...countries];

  return (
    <section className="py-14 sm:py-20 bg-slate-50/80 border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          Worldwide Reach
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          COUNTRIES COVERED
        </h3>
      </div>

      {/* Marquee Wrapper with left & right gradient fade */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Gradient */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />

        {/* Right Fade Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10" />

        {/* Infinite Scrolling Track */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-4">
          {marqueeList.map((country, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-4 bg-white hover:bg-blue-50/80 border border-slate-200/80 hover:border-blue-300 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 cursor-pointer group"
            >
              {/* Flag Icon */}
              <div className="w-12 h-9 sm:w-14 sm:h-10 rounded-xl bg-slate-100 border border-slate-200/90 overflow-hidden flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
                <Image
                  src={country.icon}
                  alt={country.name}
                  width={56}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Country Name */}
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base whitespace-nowrap">
                  {country.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


