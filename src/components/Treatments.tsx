import Image from "next/image";
import Link from "next/link";

const treatments = [
  {
    icon: '/images/home_Cardiac.jpeg',
    title: 'CARDIAC SURGERY',
    description: 'Top Medical tourism companies in India with the best specialists in Cardiology.'
  },
  {
    icon: '/images/home_brain&spine.jpg',
    title: 'BRAIN & SPINE SURGERY',
    description: 'Best Medical tourism company in India with top and foremost neurosurgeons.'
  },
  {
    icon: '/images/home_orthopaedic.jpg',
    title: 'ORTHOPAEDIC & JOINT',
    description: 'Consult a doctor online at Sonaura Global HealthCare and get a free follow-up session with us.'
  },
  {
    icon: '/images/home_nephrology.png',
    title: 'NEPHROLOGY TREATMENT',
    description: 'Looking for the Best Nephrology Treatment or Kidney Transplant Hospitals in India? We will help you.'
  },
  {
    icon: '/images/home_lung.jfif',
    title: 'LUNG TRANSPLANT',
    description: 'A lung transplant is a complex and life-saving surgical procedure where a diseased lung is replaced with a healthy one from a donor.'
  },
  {
    icon: '/images/home_gastroenterology.jpg',
    title: 'GASTROENTEROLOGY',
    description: 'Sonaura Global HealthCare has a team of the best Gastroenterology Doctors in India. Book an appointment today.'
  },
  {
    icon: '/images/home_urology.jpg',
    title: 'UROLOGY SURGERY',
    description: 'Find the solution to your genitourinary problems with our Best Urology doctors here.'
  },
  {
    icon: '/images/home_cancer.webp',
    title: 'CANCER TREATMENT',
    description: 'Beat Cancer with chemotherapy and other treatments that will be provided with full assistance.'
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block mb-3">
            OUR SPECIALTIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-3">
            OUR TOP TREATMENTS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed font-normal">
            Sonaura Global HealthCare helps you to choose the best hospitals, best doctors, and best treatment plans at an affordable cost. Our company goal is to have satisfied and happy medical tourists.
          </p>
        </div>

        {/* Treatment Cards Grid with Original Images and Modern Clean UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={treatment.icon}
                  alt={treatment.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {treatment.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 group/link"
                  >
                    <span>Free Consultation</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                  <span className="w-7 h-7 rounded-full bg-slate-50 text-blue-600 flex items-center justify-center text-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    +
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}






