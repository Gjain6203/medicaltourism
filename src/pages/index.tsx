import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PartnerMarquee from '@/components/PartnerMarquee';
import CountryMarquee from '@/components/CountryMarquee';
import About from '@/components/About';
import Treatments from '@/components/Treatments';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonaura Global HealthCare | World-Class Healthcare &amp; Affordable Surgeries in India</title>
        <meta
          name="description"
          content="Find the best medical treatment and super-specialist surgeons in India. Save up to 70-80% on Heart, Spine, Orthopedic, Cancer and Transplant surgeries with JCI accredited hospitals."
        />
        <meta name="keywords" content="Medical Tourism India, Surgery in India, Apollo Hospitals, Fortis Healthcare, Medanta Medicity, Knee Replacement India, Heart Bypass India, Medical Visa India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://sonaurahealthcare.com/" />
        <meta property="og:url" content="https://sonaurahealthcare.com/" />
        <meta property="og:title" content="Sonaura Global HealthCare | World-Class Healthcare & Affordable Surgeries in India" />
        <meta property="og:description" content="Find the best medical treatment and super-specialist surgeons in India. Save up to 70-80% on Heart, Spine, Orthopedic, Cancer and Transplant surgeries." />
        <link rel="icon" href="/sonaura_favicon.webp" type="image/webp" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        <Header />
        <Hero />
        <About />
        <Treatments />
        <Process />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
         <PartnerMarquee />
         <CountryMarquee />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingActions />
      </main>
    </>
  );
}

