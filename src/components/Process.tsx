const steps = [
  {
    number: '1',
    title: 'Inquiry Process',
    description: 'Drop your queries and Friendly Advance will guide the treatment process. We will serve you from scratch. Our 24*7 dedicated teams will assist you.'
  },
  {
    number: '2',
    title: 'Finding Best Treatment',
    description: 'Suggestion of best medical treatment. We set-up pre-visit counseling; a second opinion with the medical team; and others.'
  },
  {
    number: '3',
    title: 'Planning The Visit',
    description: 'Starting from ticketing to VISA and selection of the most affordable packages will be held by us. We will provide you a hassle-free service.'
  },
  {
    number: '4',
    title: 'Helping With Technicality',
    description: 'Stop worrying about VISA as we provide assistance with VISA letters. Also, We suggest hospitals/clinics as per your budget. We also provide priority consultation post-arrival.'
  },
  {
    number: '5',
    title: 'Airport Assistance',
    description: 'AJ Medical Tourism will provide airport assistance in India. Your pre-decided hotel/ guest house along with choice of meal and lodging facility would be waiting for you.'
  },
  {
    number: '6',
    title: 'Hassle-Free Treatment',
    description: 'Drop your queries and Friendly Health will guide post the treatment process. We will serve you from scratch. Our 24*7 dedicated teams will assist you.'
  },
  {
    number: '7',
    title: 'Stress-Free Discharge',
    description: 'We will be with you till the point of patient discharge and even post that. Every after care need of yours is well taken care of. Top patient care is our topmost priority'
  },
  {
    number: '8',
    title: 'Handling Follow-Up',
    description: 'AJ Medical Tourism takes the responsibility after the treatment process and even when the patient goes back to their country. We assist your counseling with your doctor.'
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Understanding the Process</h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            This is the whole pipeline of the process that works to help you. We’ve got you covered by every possible means and reveal out a completely transparent journey.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Card Header with Step Number & Tag */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 font-bold text-base sm:text-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {step.number.padStart(2, '0')}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2.5">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



