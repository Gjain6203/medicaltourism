import Head from 'next/head';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import CountryMarquee from '@/components/CountryMarquee';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import PartnerMarquee from '@/components/PartnerMarquee';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Patient Testimonials & Reviews | AJ Medical Tourism</title>
        <meta
          name="description"
          content="Read genuine reviews and testimonials from international patients who received surgery and medical treatments in India through AJ Medical Tourism."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-20">
        <Header />

        {/* Page Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight">
              TESTIMONIALS
            </h1>
          </div>
        </div>



        <Testimonials />
        <Gallery />
       <PartnerMarquee/>
        <CountryMarquee />
        <FAQ/>
        <Contact/>
        <Footer />
        <FloatingActions />
      </main>
    </>
  );
}
