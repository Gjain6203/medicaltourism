import Image from "next/image";

const testimonials = [
  {
    name: 'Idris Hawuva',
    image: '/images/home_gallery8.png',
    text: 'I came from Nigeria for my father s Surgery at Apollo Hospital in India. They have top quality doctors teams and the best services at affordable cost treatment. I like to say thanks to Sonaura Global HealthCare company, really I impressed with the there top quality of services and personal care.',
  },
  {
    name: 'Ugo Baba',
    image: '/images/home_gallery7.png',
    text: 'I am Ugo from Uganda and came to India for my spine surgery in India at Jaypee Hospital I m really satisfied with the high quality and Sonaura Global HealthCare services. They have a top surgeon in India. They have a very good hand in spine surgery with a higher success rate at affordable cost.',
  },
  {
    name: 'Bekashi Lew',
    image: '/images/home_gallery9.png',
    text: 'I am Bekashi from Malaysia came to India for my treatment. They are the best and the services given by them are beyond my expectations. I advise you to all Choose Sonaura Global HealthCare for the treatment plans, they are the best medical tourism company in India and provide treatments at a low cost.',
  },
  {
    name: 'Peter Louis',
    image: '/images/home_gallery6.png',
    text: 'I am Peter Louis working as a press reporter in South Sudan came to Jaypee Hospital for my general health check-up. I was extremely pleased to be treated by professional staff in an excellent environment at Jaypee Hospital. Offered a higher quality of care to their patients. Special thanks to the Sonaura Global HealthCare team.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/80 relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Patient Testimonials
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 overflow-hidden"
            >
              {/* Top Gradient Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header: Patient Image, Name & Rating */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 p-0.5 shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300 flex-shrink-0 border border-blue-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="64px"
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors leading-snug">
                      {testimonial.name}
                    </h4>
                    {/* Modern 5-Star Rating */}
                    <div className="flex items-center gap-1 mt-1 text-amber-400 text-xs">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Quote Icon */}
                <div className="text-blue-200 group-hover:text-blue-300 transition-colors text-3xl font-serif leading-none mb-2">
                  “
                </div>

                {/* Message Content */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic font-normal">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Verified Pill Footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verified Patient</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



