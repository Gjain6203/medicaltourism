'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    treatment: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitted(false);

    try {
      let isSuccess = false;
      let responseMsg = '';

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 404) {
        // Fallback for static cPanel deployment without Node.js runtime
        const fallbackRes = await fetch('https://formsubmit.co/ajax/sonaurahealth@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `🏥 New Patient Enquiry: ${formData.name} - Sonaura HealthCare`,
            Name: formData.name,
            Email: formData.email,
            'Phone/WhatsApp': formData.phone,
            Country: formData.country || 'Not specified',
            Treatment: formData.treatment || 'General Inquiry',
            Message: formData.message || 'No description provided',
            _template: 'table',
          }),
        });

        const fallbackData = await fallbackRes.json();
        isSuccess = fallbackData?.success === 'true' || fallbackData?.success === true;
        responseMsg = fallbackData?.message || '';
      } else {
        const data = await res.json();
        isSuccess = res.ok && data.success;
        responseMsg = data?.message || '';
      }

      if (isSuccess) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          treatment: '',
          message: ''
        });
      } else {
        setErrorMessage(responseMsg || 'Kuch problem aayi, kripya dobara koshish karein.');
      }
    } catch (err: any) {
      setErrorMessage('Server se connect nahi ho paya. Kripya thodi der baad prayas karein.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Contact Information (Left Column - 5 cols) */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-3.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              24/7 Global Support
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Get In Touch
            </h2>
            
            <div className="space-y-4 sm:space-y-5">
              {/* Phone & WhatsApp Card */}
              <div className="group flex items-start gap-4 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  📞
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 mb-1 text-base">Direct Helpline & WhatsApp</h4>
                  <p className="text-xs text-slate-500 mb-2.5">
                    Call 24/7 or chat with our medical coordinators to share reports.
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href="tel:+916005110609"
                      className="inline-flex items-center gap-1.5 text-slate-800 font-semibold hover:text-blue-600 transition-colors text-xs sm:text-sm font-mono bg-slate-100 hover:bg-blue-50 px-3 py-2 rounded-xl border border-slate-200/70"
                    >
                      <span>📞</span> +91 6005110609
                    </a>
                    <a
                      href="https://wa.me/916005110609"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-800 font-bold hover:text-emerald-900 transition-colors text-xs sm:text-sm bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl border border-emerald-300/80"
                    >
                      <span>💬</span> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group flex items-start gap-4 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-base">Email</h4>
                  <a
                    href="mailto:sonaurahealth@gmail.com"
                    className="text-slate-600 font-medium hover:text-blue-600 transition-colors text-sm sm:text-base break-all"
                  >
                    sonaurahealth@gmail.com
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="group flex items-start gap-4 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-base">Address</h4>
                  <a
                    href="https://maps.google.com/?q=Sonaura+Global+HealthCare,+beside+Jasola+Apollo+Metro+Station,+Jasola+Vihar,+New+Delhi,+Delhi+110025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 transition-colors leading-relaxed block text-sm sm:text-base font-normal"
                  >
                    Sonaura Global HealthCare<br />
                    Beside Jasola Apollo Metro Station, Jasola Vihar<br />
                    New Delhi, Delhi 110025, India
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column - 7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 lg:p-11 rounded-3xl border border-slate-200/80 shadow-2xl shadow-blue-500/5 relative">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 block">Free Assessment</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Send us a Message
              </h3>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-2xl text-sm flex items-center gap-3 animate-in fade-in duration-300">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Thank you! Your inquiry has been sent to our medical team. We will contact you within 24 hours.</span>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-800 rounded-2xl text-sm flex items-center gap-3 animate-in fade-in duration-300">
                <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5 text-xs sm:text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 transition-all placeholder:text-slate-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5 text-xs sm:text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 transition-all placeholder:text-slate-400"
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5 text-xs sm:text-sm">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 transition-all placeholder:text-slate-400"
                    placeholder="Your phone number with country code"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5 text-xs sm:text-sm">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 transition-all placeholder:text-slate-400"
                    placeholder="Your country"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1.5 text-xs sm:text-sm">
                  Treatment Interested In
                </label>
                <div className="relative">
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a treatment</option>
                    <option value="cardiac">Cardiac Surgery (CABG / Valve)</option>
                    <option value="brain">Brain & Spine Surgery</option>
                    <option value="orthopedic">Orthopedic & Knee/Hip Joint</option>
                    <option value="nephrology">Nephrology & Kidney Transplant</option>
                    <option value="lung">Lung Transplant</option>
                    <option value="gastro">Gastroenterology & Liver Transplant</option>
                    <option value="urology">Urology Surgery</option>
                    <option value="cancer">Cancer Treatment</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1.5 text-xs sm:text-sm">
                  Message / Symptoms
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 transition-all placeholder:text-slate-400"
                  placeholder="Please describe your medical symptoms or condition..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200 text-sm sm:text-base cursor-pointer transform active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message & Get Quote</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}



