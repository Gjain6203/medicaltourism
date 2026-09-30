const testimonials = [
  {
    name: 'Idris Hawuva',
    image: '/images/home_gallery8.png',
    text: 'I came from Nigeria for my father s Surgery at Apollo Hospital in India. They have top quality doctors teams and the best services at affordable cost treatment. I like to say thanks to AJ Medical Tourism company, really I impressed with the there top quality of services and personal care.',
  },
  {
    name: 'Ugo Baba',
    image: '/images/home_gallery7.png',
    text: 'I am Ugo from Uganda and came to India for my spine surgery in India at Jaypee Hospital I m really satisfied with the high quality and AJ Medical Tourism services. They have a top surgeon in India. They have a very good hand in spine surgery with a higher success rate at affordable cost.',
  },
  {
    name: 'Bekashi Lew',
    image: '/images/home_gallery9.png',
    text: 'I am Bekashi from Malaysia came to India for my treatment. They are the best and the services given by them are beyond my expectations. I advise you to all Choose AJ Medical Tourism for the treatment plans, they are the best medical tourism company in India and provide treatments at a low cost.',
  },
  {
    name: 'Peter Louis',
    image: '/images/home_gallery6.png',
    text: 'I am Peter Louis working as a press reporter in South Sudan came to Jaypee Hospital for my general health check-up. I was extremely pleased to be treated by professional staff in an excellent environment at Jaypee Hospital. Offered a higher quality of care to their patients. Special thanks to the AJ Medical Tourism team.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Patient Testimonials</h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Top: Image & Patient Details */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-blue-50 border-2 border-blue-100 flex-shrink-0 shadow-sm group-hover:border-blue-500 transition-colors">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors leading-tight">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>

                {/* Message Content */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



