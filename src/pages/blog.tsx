import Head from 'next/head';
import Header from '@/components/Header';
import PartnerMarquee from '@/components/PartnerMarquee';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const blogPosts = [
  {
    title: 'Why India is the #1 Destination for Heart Surgery & Cardiology in 2026',
    category: 'Cardiac Care',
    date: 'September 2026',
    image: '/images/home_Cardiac.jpeg',
    snippet: 'Learn why patients from the US, UK, Africa, and the Middle East travel to India for bypass surgery, valve replacements, and minimally invasive cardiac procedures with up to 80% cost savings.',
    readTime: '5 min read',
  },
  {
    title: 'Complete Guide to Getting a Medical Visa (Med Visa) for India',
    category: 'Visa & Travel Guide',
    date: 'September 2026',
    image: '/images/home_about.jpg',
    snippet: 'Step-by-step instructions on obtaining an official Visa Invitation Letter (VIL) from accredited hospital chains, required documents, and priority airport assistance.',
    readTime: '6 min read',
  },
  {
    title: 'Robotic Knee & Joint Replacement in India: Benefits & Fast Recovery',
    category: 'Orthopedics',
    date: 'August 2026',
    image: '/images/home_orthopaedic.jpg',
    snippet: 'Discover how robotic technology is revolutionizing orthopedic surgery in India, ensuring pinpoint precision, minimal blood loss, and walking on the same day.',
    readTime: '4 min read',
  },
  {
    title: 'Cost Breakdown: Medical Treatments in India vs USA & Europe',
    category: 'Cost & Savings',
    date: 'August 2026',
    image: '/images/home_cancer.webp',
    snippet: 'A comprehensive transparent comparison of surgery costs across major super-speciality procedures with zero waiting times and JCI-accredited care.',
    readTime: '7 min read',
  },
  {
    title: 'Minimally Invasive Spine Surgery: Say Goodbye to Chronic Back Pain',
    category: 'Brain & Spine',
    date: 'July 2026',
    image: '/images/home_brain&spine.jpg',
    snippet: 'How cutting-edge endoscopic spine decompression and disc fusion procedures in Delhi NCR help international patients achieve complete painless mobility.',
    readTime: '5 min read',
  },
  {
    title: 'Living Donor Liver & Kidney Transplants: Success Rates and Logistics',
    category: 'Organ Transplant',
    date: 'July 2026',
    image: '/images/home_nephrology.png',
    snippet: 'An overview of clinical protocols, legal workup, and world-class transplant outcomes at India’s top multi-speciality hospital networks.',
    readTime: '8 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Medical Tourism Blog & Healthcare Guides | AJ Medical Tourism</title>
        <meta
          name="description"
          content="Read latest articles, surgical guides, cost comparisons, and medical visa tips for patients traveling to India for healthcare."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-20">
        <Header />

        {/* Page Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight">
              Medical Tourism Blog & Insights
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Expert guides, treatment overviews, visa assistance, and health tips for international medical tourists.
            </p>
          </div>
        </div>

        {/* Blog Grid Section */}
        <section className="py-20 bg-gray-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
                >
                  {/* Blog Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {post.category}
                    </span>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2.5">
                      <span>📅 {post.date}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {post.snippet}
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                      <a
                        href="/contact"
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
                      >
                        <span>Read Consultation Guide</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PartnerMarquee />
        <FAQ />
        <Footer />
        <FloatingActions />
      </main>
    </>
  );
}
