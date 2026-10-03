import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="mb-3">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
            ABOUT US
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-8 sm:mb-10">
          About Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Info - 7 cols */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              A Journey To Good Health
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              AJ MEDICAL TOURISM is one of the renowned and most reputable companies that specialize in Indian medical tourism. India presents World Class Medical Facilities, as compared to any of the Western and European countries. India is state of the art in terms of Hospitals and has the finest medical experts. With the most splendid infrastructure, facilities, and prices, you can get the treatments done in India fairly. The availability of Ayurveda and Naturopathy in the purest form turns India into the most sought-after health destination.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              AJ MEDICAL TOURISM is an Indian Medical Tourism Company that provides treatments and tour packages for international patients coming to India. With an excellent cost control formula, we assist international patients in getting the best quality of medical services and treatment facilities. As a Media tourism company, we are working with various hospitals and medical specialists covering all forms of health – modern and holistic.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-2xl transition-all shadow-md hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                <span>Know More</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>

          {/* Right Original Image Card - 5 cols */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100">
              <Image
                src="/images/home_about.jpg"
                alt="AJ Medical Tourism About Us"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/50 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Accredited Network</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">World-Class Hospitals & Doctors</p>
                </div>
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}






