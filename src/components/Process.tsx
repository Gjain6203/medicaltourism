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
    description: 'Sonaura Global HealthCare will provide airport assistance in India. Your pre-decided hotel/ guest house along with choice of meal and lodging facility would be waiting for you.'
  },
  {
    number: '6',
    title: 'Hassle-Free Treatment',
    description: 'Drop your queries and Friendly Health will guide post the treatment process. We will serve you from scratch. Our 24*7 dedicated teams will assist you.'
  },
  {
    number: '7',
    title: 'Stress-Free Stay',
    description: 'We will be with you till the point of patient discharge and even post that. Every after care need of yours is well taken care of. Top patient care is our topmost priority'
  },
  {
    number: '8',
    title: 'Post-Treatment Follow-up',
    description: 'Sonaura Global HealthCare takes the responsibility after the treatment process and even when the patient goes back to their country. We assist your counseling with your doctor.'
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-3">
            OUR 8 STEP PROCESS TO TREATMENT
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed font-normal">
            This is the whole pipeline of the process that works to help you. We’ve got you covered by every possible means and reveal out a completely transparent journey.
          </p>
        </div>

        {/* Stepper Pipeline Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 font-black text-base flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                    0{step.number}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Step {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                <span>Phase 0{step.number}</span>
                <span className="group-hover:text-blue-600 transition-colors font-bold">End-to-End</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}






