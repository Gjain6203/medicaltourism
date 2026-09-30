import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/medicaltourism_logo.webp"
                alt="AJ Medical Tourism Logo"
                width={160}
                height={60}
                className="brightness-0 invert object-contain h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Leading medical tourism provider connecting international patients with world-class healthcare in India at affordable costs.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/treatments" className="hover:text-white transition">Treatments</a></li>
              <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
              <li><a href="/testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Contact Info</h4>
            <p className="text-gray-400 mb-2 text-xs sm:text-sm">
              <strong>Phone / WhatsApp:</strong><br />
              <a href="tel:+919654250311" className="hover:text-white transition">
                +91 9654250311
              </a>
            </p>
            <p className="text-gray-400 mb-2 text-xs sm:text-sm">
              <strong>Email:</strong><br />
              <a href="mailto:info@ajmedicaltourism.com" className="hover:text-white transition break-all">
                info@ajmedicaltourism.com
              </a>
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              <strong>Address:</strong><br />
              <a
                href="https://maps.google.com/?q=37,+South,+Pocket+1,+Jasola,+New+Delhi,+Delhi+110025,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition leading-relaxed block"
              >
                37, South, Pocket 1, Jasola, New Delhi, 110025, India
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-4 text-center sm:text-left">
            <p className="text-gray-400">
              Copyright © 2026 AJ Medical Tourism. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



