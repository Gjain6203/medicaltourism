import Head from 'next/head';
import Header from '@/components/Header';
import Treatments from '@/components/Treatments';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import PartnerMarquee from '@/components/PartnerMarquee';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import CountryMarquee from '@/components/CountryMarquee';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function TreatmentsPage() {
  return (
    <>
      <Head>
        <title>Top Medical Treatments & Surgeries in India | AJ Medical Tourism</title>
        <meta
          name="description"
          content="Explore super-speciality medical treatments in India including Cardiac, Brain & Spine, Orthopedic, Cancer, Organ Transplants with affordable costs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-slate-900 pt-16 sm:pt-20 lg:pt-28">
        <Header />

        {/* Page Banner */}
        <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-18 sm:py-24 text-center overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              WORLD-CLASS CARE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              OUR SPECIALTIES
            </h1>
          </div>
        </div>

        <Treatments />
        <Process />
        <WhyChooseUs />
       <CountryMarquee/>
       <PartnerMarquee/>
       <Gallery/>
       <Testimonials/>


        <FAQ />
        <Contact/>
        <Footer />
        <FloatingActions />
      </main>
    </>
  );
}
