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
    description: 'Consult a doctor online at AJ MEDICAL TOURISM and get a free follow-up session with us.'
  },
  {
    icon: '/images/home_nephrology.png',
    title: 'NEPHROLOGY TREATMENT',
    description: 'Looking for the Best Nephrology Treatment or Kidney Transplant Hospitals in India? We will help you.'
  },
  {
    icon: '/images/home_lung.jfif',
    title: 'LUNG TRANSPLANT',
    description: 'A lung transplant is a complex and life-saving surgical procedure where a diseased lung is replaced with a healthy one from a donor. '
  },
  {
    icon: '/images/home_gastroenterology.jpg',
    title: 'GASTROENTEROLOGY',
    description: 'AJ Medical Tourism has a team of the best Gastroenterology Doctors in India. Book an appointment today.'
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
    <section id="treatments" className="py-12 sm:py-16 lg:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">OUR TOP TREATMENTS</h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            AJ MEDICAL TOURISM helps you to choose the best hospitals, best doctors, and best treatment plans at an affordable cost. Our company's goal is to have satisfied and happy medical tourists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <img
                  src={treatment.icon}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-1">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {treatment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



