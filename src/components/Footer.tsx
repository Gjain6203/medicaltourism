import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          
          {/* Col 1: Brand (Desktop: 5 cols, Tablet: full width across 2 cols, Mobile: 1 col) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
            <div className="inline-block">
              <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl shadow-md transition-transform hover:scale-[1.02]">
                <Image
                  src="/images/sonauralogo1.webp"
                  alt="Sonaura Global HealthCare Logo"
                  width={200}
                  height={50}
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
              Leading medical tourism provider connecting international patients with world-class healthcare in India at affordable costs.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>JCI & NABH Hospital Network</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-400">24/7 Patient Support</span>
            </div>
          </div>

          {/* Col 2: Quick Links (Desktop: 3 cols, Tablet: 1 col, Mobile: 1 col) */}
          <div className="sm:col-span-1 lg:col-span-3 lg:pl-4">
            <h4 className="text-white font-bold mb-4 text-xs sm:text-sm tracking-wider uppercase text-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-all inline-flex items-center gap-1.5 hover:translate-x-1 duration-150">
                  <span className="text-blue-400/80">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-all inline-flex items-center gap-1.5 hover:translate-x-1 duration-150">
                  <span className="text-blue-400/80">›</span> About
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-slate-400 hover:text-white transition-all inline-flex items-center gap-1.5 hover:translate-x-1 duration-150">
                  <span className="text-blue-400/80">›</span> Treatments
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-400 hover:text-white transition-all inline-flex items-center gap-1.5 hover:translate-x-1 duration-150">
                  <span className="text-blue-400/80">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-400 hover:text-white transition-all inline-flex items-center gap-1.5 hover:translate-x-1 duration-150">
                  <span className="text-blue-400/80">›</span> Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-all inline-flex items-center gap-1.5 hover:translate-x-1 duration-150">
                  <span className="text-blue-400/80">›</span> Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-all inline-flex items-center gap-1.5 hover:translate-x-1 duration-150">
                  <span className="text-blue-400/80">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info (Desktop: 4 cols, Tablet: 1 col, Mobile: 1 col) */}
          <div className="sm:col-span-1 lg:col-span-4">
            <h4 className="text-white font-bold mb-4 text-xs sm:text-sm tracking-wider uppercase text-blue-400">
              Contact Info
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-base flex-shrink-0 mt-0.5">📞</span>
                <div className="min-w-0">
                  <strong className="text-slate-200 block text-xs">Phone & WhatsApp:</strong>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5">
                    <a href="tel:+916005110609" className="text-slate-300 hover:text-white transition-colors font-mono">
                      +91 6005110609
                    </a>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <a
                      href="https://wa.me/916005110609"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors inline-flex items-center gap-1 text-xs"
                    >
                      <span>💬</span> WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-base flex-shrink-0 mt-0.5">✉️</span>
                <div className="min-w-0">
                  <strong className="text-slate-200 block text-xs">Email:</strong>
                  <a href="mailto:info@sonauramedicaltourism.com" className="text-slate-400 hover:text-white transition-colors break-all block mt-0.5">
                    info@sonauramedicaltourism.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-base flex-shrink-0 mt-0.5">📍</span>
                <div className="min-w-0">
                  <strong className="text-slate-200 block text-xs">Address:</strong>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors leading-relaxed block mt-0.5"
                  >
                    Sonaura Global HealthCare, beside Jasola Apollo Metro Station, Jasola Vihar, New Delhi, Delhi 110025
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-4 text-center sm:text-left text-slate-400">
            <p>
              Copyright © 2026 Sonaura Global HealthCare. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs">
              <Link href="/privacy_policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/Terms_conditions" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}




