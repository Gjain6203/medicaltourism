const reasons = [
  {
    icon: '👥',
    title: 'Professional Teams',
    description: 'In addition to providing medical care, professional staff in medical tourism may also be responsible for educating patients about their treatment options, helping them navigate the healthcare system, and ensuring that they receive the highest quality of care possible.'
  },
  {
    icon: '🏥',
    title: 'Qualified Doctors',
    description: 'Certified doctors are medical professionals who have completed a rigorous education and training program and have passed a certification exam in their area of specialization. Certification is a voluntary process that is designed to ensure that doctors have the necessary knowledge, skills, and expertise to provide high-quality medical care.'
  },
  {
    icon: '🚨',
    title: 'Emergency Case',
    description: 'Medical tourism providers may have procedures in place to handle emergency cases, such as a 24/7 emergency hotline or on-call medical staff who can assist patients in need. It is important for medical tourists to be aware of these procedures and to have access to emergency contact information in case of a medical emergency.'
  },
  {
    icon: '⏰',
    title: '24/7 Services',
    description: '24/7 emergency services are medical services that are available around the clock, seven days a week, to provide immediate care for patients who are experiencing a medical emergency. These services are critical for ensuring that patients receive timely medical attention when they need it most, and can help to save lives in situations where every second counts.'
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Doctor Network Banner */}
        <div className="mb-10 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white p-8 sm:p-12 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              100+ Expert Doctors Across Top Hospitals In India
            </h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
“We are the medical service provider to assist you in your complete medical journey of any kind.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Contact Us 
            </a>
          </div>
        </div>



        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">WHY CHOOSE US?</h2>
         
        </div>

        {/* Reason Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-sm">
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {reason.icon}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}


