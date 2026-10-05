import Link from "next/link";

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
    <section id="why-choose-us" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Doctor Network Banner */}
        <div className="mb-16 sm:mb-20 bg-slate-950 text-white p-8 sm:p-12 md:p-14 rounded-3xl text-center shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              India&apos;s Premier Medical Network
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
              100+ Expert Doctors Across Top Hospitals In India
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto">
We are the medical service provider to assist you in your complete medical journey of any kind.
            </p>
            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-slate-950 font-bold px-8 py-3.5 rounded-2xl transition-all shadow-md hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                <span>Contact Us</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block mb-3">
            OUR ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            WHY CHOOSE US?
          </h2>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-105 transition-transform shadow-xs">
                  <span>{reason.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Verified</span>
                <span className="text-blue-600 font-bold">24/7 Available</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}






