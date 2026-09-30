'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'WHAT IS COVERED IN THE COST FOR SURGERY?',
    answer: 'The price includes surgery cost, doctor’s fee, standard prescribed tests, and all standard expenses.'
  },
  {
    question: 'HOW DOES INDIA COMPARE WITH OTHER COUNTRIES FOR MEDICAL TREATMENT?',
    answer: 'India has some of the world’s best healthcare facilities, staffed by doctors with international qualifications & vast and varied experience. The cost of treatment is substantially lesser than in developed countries, in some cases the difference can result in as much as 60% savings. For patients, the result is a win-win… situation, world-class medical attention and patient care services and savings too.'
  },
  {
    question: 'WHAT ABOUT MY DOCTOR APPOINTMENTS?',
    answer: 'Our Case Manager will be the incharge between you and the hospital and will arrange your appointments as well as the referrals that will be needed for various services like the outpatient clinic, laboratory and pathology, medical imaging, and inpatient surgical procedures.'
  },
  {
    question: 'WHAT IS THE ADVANTAGE TO GET TREATMENT THROUGH AJMEDICALTOURISM.COM?',
    answer: 'For surgical cases, ajmedicaltourism.com offers comprehensive support to its patients, including airport pick-up and drop-off after treatment, transportation between the hotel and hospital, and the assistance of a dedicated Case Manager assigned to each patient throughout their treatment journey. We also strive to provide our patients with the best possible price for their treatment.'
  },
  {
    question: 'I WILL BE NEW IN COUNTRY, WILL I GET ANY ASSISTANCE?',
    answer: 'Yes, A dedicated Case Manager will be assigned to you to take care of you and will be with you throughout all your medical needs.'
  },
  {
    question: 'CAN YOU HELP ME GET A VISA?',
    answer: 'Certainly, once you confirm your visit to India for medical treatment, we will help you with a visa invitation letter from the hospital. If you would like the concerned hospital to send a visa invitation letter to the Indian Embassy in your country, please send us the patient’s name and passport number, medical escort’s name and passport number, country, tentative date of arrival in Delhi, India for treatment, and the patient’s medical reports, including all relevant medical documents, diagnostic reports, test results, prescriptions, and previous treatment records, via email.'
  },
   {
    question: 'DOES AJMedicals PROVIDE ACCOMMODATION?',
    answer: 'Yes, Depending on your budget, we can arrange accommodation for you and your attendant close to the hospital at nearby guest houses, service apartments, or luxurious 5-star hotels. Price range starting from $20 per day.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">FREQUENTLY ASKED QUESTION</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition flex justify-between items-center gap-3"
              >
                <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                <span className={`transform transition flex-shrink-0 text-xs sm:text-sm ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



