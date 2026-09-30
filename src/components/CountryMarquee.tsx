"use client";

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
    <section className="py-10 sm:py-14 bg-gray-50/60 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
          COUNTRIES COVERED
        </h3>
      </div>

      {/* Marquee Wrapper with left & right gradient fade */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Gradient */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-gray-50 to-transparent z-10" />

        {/* Right Fade Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* Infinite Scrolling Track */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
          {marqueeList.map((country, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 sm:gap-4 bg-white hover:bg-blue-50/80 border border-gray-100 hover:border-blue-200 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer group"
            >
              {/* Flag Icon */}
              <div className="w-14 h-10 sm:w-16 sm:h-12 rounded-xl bg-gray-50 border border-gray-200/80 overflow-hidden flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <img
                  src={country.icon}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Country Name */}
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base whitespace-nowrap">
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


