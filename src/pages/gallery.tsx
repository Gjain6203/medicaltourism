
import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import Image from 'next/image';

// Photo Gallery Items
const photoItems = [
  { id: 'p1', image: '/images/sonaura_gallery1.webp' },
  { id: 'p2', image: '/images/sonaura_gallery2.webp' },
  { id: 'p3', image: '/images/sonaura_gallery3.webp' },
  { id: 'p4', image: '/images/sonaura_gallery4.webp' },
  { id: 'p5', image: '/images/sonaura_gallery5.webp' },
  { id: 'p6', image: '/images/sonaura_gallery6.webp' },
  { id: 'p7', image: '/images/sonaura_gallery7.webp' },
  // { id: 'p8', image: '/images/sonaura_gallery8.webp' },
];




// Video Gallery Items (10 MP4 Videos)
// const videoItems = [
//   { id: 'v1', videoUrl: '/video/video1.mp4' },
//   { id: 'v2', videoUrl: '/video/video2.mp4' },
//   { id: 'v3', videoUrl: '/video/video3.mp4' },
//   { id: 'v4', videoUrl: '/video/video4.mp4' },
//   { id: 'v5', videoUrl: '/video/video5.mp4' },
//   { id: 'v6', videoUrl: '/video/video6.mp4' },
//   { id: 'v7', videoUrl: '/video/video7.mp4' },
//   { id: 'v8', videoUrl: '/video/video8.mp4' },
//   { id: 'v9', videoUrl: '/video/video9.mp4' },
//   { id: 'v10', videoUrl: '/video/video10.mp4' },
// ];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'photos' | 'videos'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Gallery | Sonaura Global HealthCare India</title>
        <meta
          name="description"
          content="View our medical tourism photo gallery and patient video stories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-16 sm:pt-20 lg:pt-28">
        <Header />

        {/* Page Banner */}
        <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-18 sm:py-24 text-center overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              PATIENT EXPERIENCES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Gallery
            </h1>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-sm border border-slate-200/80">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-7 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              className={`px-7 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'photos'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Images
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('videos')}
              className={`px-7 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'videos'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="pb-20 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Photos Grid */}
          {(activeTab === 'all' || activeTab === 'photos') && (
            <div className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {photoItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPhoto(item.image)}
                    className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 hover:-translate-y-2 bg-slate-100 cursor-pointer border border-slate-200/80"
                  >
                    <Image
                      src={item.image}
                      alt="Gallery image"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/95 text-slate-900 flex items-center justify-center text-xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                        🔍
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Videos Grid */}
          {/* {(activeTab === 'all' || activeTab === 'videos') && (
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {videoItems.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video.videoUrl)}
                    className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 bg-gray-900 cursor-pointer"
                  > */}
                    {/* Video preview thumbnail snapshot */}
                    {/* <video
                      src={`${video.videoUrl}#t=0.5`}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    /> */}

                    {/* Play Button Overlay */}
                    {/* <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600/95 text-white flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-red-600 transition-all">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )} */}

        </section>

        {/* Photo Modal Lightbox */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center text-xl font-bold transition focus:outline-none"
                aria-label="Close"
              >
                ✕
              </button>
              <Image
                src={selectedPhoto}
                alt="Enlarged gallery view"
                width={1200}
                height={800}
                unoptimized
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </div>
          </div>
        )}

        {/* Video Modal Player (Native HTML5 MP4 + iframe fallback) */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-black/80 hover:bg-red-600 text-white flex items-center justify-center text-lg font-bold transition focus:outline-none"
                aria-label="Close video"
              >
                ✕
              </button>
              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                {selectedVideo.endsWith('.mp4') || selectedVideo.startsWith('/video') ? (
                  <video
                    src={selectedVideo}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full max-h-[80vh] object-contain"
                  />
                ) : (
                  <iframe
                    src={`${selectedVideo}?autoplay=1`}
                    title="Gallery Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        <Footer />
        <FloatingActions />
      </main>
    </>
  );
}



