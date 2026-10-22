
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      {/* Top Notification / Contact Bar for Desktop */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white text-xs py-1.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-blue-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 International Patient Assistance
            </span>
            <a href="tel:+916005110609" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-mono">
              <span>📞</span> +91 6005110609
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="mailto:sonaurahealth@gmail.com" className="hover:text-white transition-colors">
              ✉️ sonaurahealth@gmail.com
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 font-medium flex items-center gap-1">
              ⭐ JCI & NABH Accredited Hospitals
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02]">
              <Image
                src="/images/sonauralogo1.webp"
                alt="Sonaura Global HealthCare Logo"
                width={220}
                height={56}
                priority
                className="h-10 sm:h-12 md:h-14 w-auto object-contain max-w-[170px] sm:max-w-[220px]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-xl text-sm xl:text-base font-semibold transition-all duration-200 ${
                    active
                      ? 'text-blue-600 bg-blue-50/90 shadow-xs'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA on Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
            >
              <span>Get Free Quote</span>
              <span>→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-20 bg-slate-950/50 backdrop-blur-sm lg:hidden z-40 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl relative z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-1.5 max-w-lg mx-auto">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    active
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-bold'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-xl shadow-md"
              >
                Get Free Consultation
              </Link>
            </div>
            <div className="pt-3 border-t border-slate-100 mt-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+916005110609"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 text-slate-800 rounded-xl font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors"
                >
                  <span>📞</span> Call Us
                </a>
                <a
                  href="https://wa.me/916005110609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm transition-colors shadow-sm"
                >
                  <span>💬</span> WhatsApp
                </a>
              </div>
              <p className="text-center text-[11px] text-slate-400 font-mono mt-1.5">
                24/7 Helpline: +91 6005110609
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}





