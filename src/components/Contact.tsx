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

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        treatment: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl mr-6 flex-shrink-0 font-bold">
                  📞
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <a
                      href="tel:+919654250311"
                      className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
                    >
                      +91 9654250311
                    </a>
                   
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl mr-6 flex-shrink-0 font-bold">
                  ✉️
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Email</h4>
                  <a
                    href="mailto:info@ajmedicaltourism.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    info@ajmedicaltourism.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl mr-6 flex-shrink-0 font-bold">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Address</h4>
                  <a
                    className="text-gray-600 hover:text-blue-600 transition-colors leading-relaxed block group"
                  >
                    37, South, Pocket 1, Jasola<br />
                    New Delhi, Delhi 110025<br />
                    India
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                Thank you! Our medical case manager will contact you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-gray-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-gray-900"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-gray-900"
                  placeholder="Your phone number with country code"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Country *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-gray-900"
                  placeholder="Your country"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Treatment Interested In</label>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-gray-900 bg-white"
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
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Message / Symptoms</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-gray-900"
                  placeholder="Please describe your medical symptoms or condition..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition shadow"
              >
                Send Message & Get Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


