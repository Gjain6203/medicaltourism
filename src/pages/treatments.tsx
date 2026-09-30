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

      <main className="min-h-screen bg-white text-gray-900 pt-20">
        <Header />

        {/* Page Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight">
             OUR SPECILTIES
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
