"use client";

import { useState } from "react";

const faqs = [
  {
    question: "WHAT IS COVERED IN THE COST FOR SURGERY?",
    answer: "The price includes surgery cost, doctor’s fee, standard prescribed tests, and all standard expenses.",
  },
  {
    question: "HOW DOES INDIA COMPARE WITH OTHER COUNTRIES FOR MEDICAL TREATMENT?",
    answer: "India has some of the world’s best healthcare facilities, staffed by doctors with international qualifications & vast and varied experience. The cost of treatment is substantially lesser than in developed countries, in some cases the difference can result in as much as 60% savings. For patients, the result is a win-win… situation, world-class medical attention and patient care services and savings too.",
  },
  {
    question: "WHAT ABOUT MY DOCTOR APPOINTMENTS?",
    answer: "Our Case Manager will be the incharge between you and the hospital and will arrange your appointments as well as the referrals that will be needed for various services like the outpatient clinic, laboratory and pathology, medical imaging, and inpatient surgical procedures.",
  },
  {
    question: "WHAT IS THE ADVANTAGE TO GET TREATMENT THROUGH SONAURA GLOBAL HEALTHCARE?",
    answer: "For surgical cases, Sonaura Global HealthCare offers comprehensive support to its patients, including airport pick-up and drop-off after treatment, transportation between the hotel and hospital, and the assistance of a dedicated Case Manager assigned to each patient throughout their treatment journey. We strive to provide the best value to our patients for their treatment.",
  },
  {
    question: "I WILL BE NEW IN COUNTRY, WILL I GET ANY ASSISTANCE?",
    answer: "Yes, A dedicated Case Manager will be assigned to you to take care of you and will be with you throughout all your medical needs.",
  },
  {
    question: "CAN YOU HELP ME GET A VISA?",
    answer: "Certainly, once you confirm your visit to India for medical treatment, we will help you with a visa invitation letter from the hospital. If you would like the concerned hospital to send a visa invitation letter to the Indian Embassy in your country, please send us the patient’s name and passport number, medical escort’s name and passport number, country, tentative date of arrival in Delhi, India for treatment, and the patient’s medical reports, including all relevant medical documents, diagnostic reports, test results, prescriptions, and previous treatment records, via email.",
  },
  {
    question: "DOES SONAURA GLOBAL HEALTHCARE ARRANGE ACCOMMODATION?",
    answer: "Yes, depending on your budget we can arrange accommodation for you and your attendant near the hospital in a guest house, service apartment, or 5-star hotel. Prices start from $20 per day.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block mb-3">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            FREQUENTLY ASKED QUESTION
          </h2>
        </div>

        {/* Minimalist Accordion List with Original Content */}
        <div className="divide-y divide-slate-200/90 border-y border-slate-200/90">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="py-5 sm:py-6 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left font-bold text-slate-950 flex justify-between items-center gap-4 cursor-pointer select-none group"
                >
                  <span className={`text-sm sm:text-base md:text-lg tracking-tight transition-colors ${
                    isOpen ? "text-blue-600" : "text-slate-950 group-hover:text-blue-600"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <span className="text-xl sm:text-2xl font-light text-blue-600 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3.5 pr-8 text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base animate-in fade-in duration-200">
                    <p className="font-normal">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}





