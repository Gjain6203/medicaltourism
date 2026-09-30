import Head from "next/head";
import Header from "@/components/Header";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import PartnerMarquee from "@/components/PartnerMarquee";
import CountryMarquee from "@/components/CountryMarquee";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Treatments from "@/components/Treatments";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | AJ Medical Tourism India</title>
        <meta
          name="description"
          content="Learn about AJ Medical Tourism, the premier medical tourism company connecting global patients with top hospitals and surgeons in India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-20">
        <Header />

        {/* Page Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span>ABOUT</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight">
              About Us
            </h1>
          </div>
        </div>

        <About />
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
