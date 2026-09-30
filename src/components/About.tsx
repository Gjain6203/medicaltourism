import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">A Journey To Good Health</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
AJ MEDICAL TOURISM is one of the renowned and most reputable companies that specialize in Indian medical tourism. India presents World Class Medical Facilities, as compared to any of the Western and European countries. India is state of the art in terms of Hospitals and has the finest medical experts. With the most splendid infrastructure, facilities, and prices, you can get the treatments done in India fairly. The availability of Ayurveda and Naturopathy in the purest form turns India into the most sought-after health destination.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
AJ MEDICAL TOURISM is an Indian Medical Tourism Company that provides treatments and tour packages for international patients coming to India. With an excellent cost control formula, we assist international patients in getting the best quality of medical services and treatment facilities. As a Media tourism company, we are working with various hospitals and medical specialists covering all forms of health – modern and holistic.
            </p>

            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-7 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base shadow"
            >
              Know  More
            </a>
          </div>

          {/* Right Highlights Card */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
           <Image
           src="/images/home_about.jpg"
           alt="about image"
           width={900}
           height={450}
           className="w-full h-auto rounded"
           />
          </div>

        </div>

      </div>
    </section>
  );
}



