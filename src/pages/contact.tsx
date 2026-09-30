import Head from 'next/head';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import CountryMarquee from '@/components/CountryMarquee';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import PartnerMarquee from '@/components/PartnerMarquee';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us & Free Consultation | AJ Medical Tourism</title>
        <meta
          name="description"
          content="Get in touch with AJ Medical Tourism for free doctor counseling, cost estimation, visa assistance, and hospital recommendations in India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-20">
        <Header />

        {/* Page Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span>Contact</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight">
              Contact Us
            </h1>
            
          </div>
        </div>

        <Contact />
        <PartnerMarquee/>
        <FAQ />
        <Footer />
        <FloatingActions />
      </main>
    </>
  );
}
