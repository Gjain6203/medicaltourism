import Head from 'next/head';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CountryMarquee from '@/components/CountryMarquee';
import PartnerMarquee from '@/components/PartnerMarquee';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import Contact from '@/components/Contact';

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Patients Gallery & Success Stories | AJ Medical Tourism</title>
        <meta
          name="description"
          content="View our happy international patients gallery and recovery memories from across the globe in India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-20">
        <Header />

        {/* Page Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight">
               Gallery
            </h1>
        
          </div>
        </div>



       
        <Contact/>
        <Footer />
        <FloatingActions />
      </main>
    </>
  );
}
