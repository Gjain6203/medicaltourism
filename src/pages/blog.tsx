import Head from 'next/head';
import Header from '@/components/Header';
import PartnerMarquee from '@/components/PartnerMarquee';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import Image from 'next/image';
import Link from 'next/link';

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

      <main className="min-h-screen bg-white text-slate-900 pt-16 sm:pt-20 lg:pt-28">
        <Header />

        {/* Page Banner */}
        <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-18 sm:py-24 text-center overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              KNOWLEDGE & GUIDES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight">
              Medical Tourism Blog & Insights
            </h1>
            <p className="text-blue-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal">
              Expert guides, treatment overviews, visa assistance, and health tips for international medical tourists.
            </p>
          </div>
        </div>

        {/* Blog Grid Section */}
        <section className="py-16 sm:py-24 bg-slate-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 flex flex-col hover:-translate-y-2"
                >
                  {/* Blog Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-3">
                      <span>📅 {post.date}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 flex-grow line-clamp-3 font-normal">
                      {post.snippet}
                    </p>

                    <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                      <Link
                        href="/contact"
                        className="text-blue-600 hover:text-blue-700 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
                      >
                        <span>Read Consultation Guide</span>
                        <span>→</span>
                      </Link>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                        ↗
                      </span>
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
