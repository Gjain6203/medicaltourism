"use client";

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
    <section className="py-10 sm:py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
          OUR PARTNER HOSPITALS
        </h3>
      </div>

      {/* Marquee Wrapper with left & right gradient fade */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Gradient */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right Fade Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Infinite Scrolling Track */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
          {marqueeList.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 sm:gap-4 bg-gray-50 hover:bg-blue-50/80 border border-gray-100 hover:border-blue-200 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer group"
            >
              {/* Icon / Badge */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center p-2 shadow-sm group-hover:scale-110 transition-transform">
                <img
                  src={partner.icon}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Info */}
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base whitespace-nowrap">
                  {partner.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

