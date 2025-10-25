import Image from 'next/image'
import Header from '@/components/Header'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">ABOUT TRYBE BY SUI</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                Trybe by Sui is an urban luxury fashion brand based in Abuja, Nigeria, that seamlessly blends retro and contemporary styles. As a unisex brand, our mission is to craft elegant, high-quality pieces that make a statement, ensuring our clients exude sophistication and confidence wherever they go. We believe that your outfit speaks for you before you even say a word.
              </p>
              <p className="mb-6">
                Founded with a vision to bridge the gap between traditional African aesthetics and modern global fashion, Trybe by Sui represents the new generation of African luxury brands. Our designs celebrate individuality while maintaining the highest standards of craftsmanship and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-3xl font-semibold text-black mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a globally recognized African lifestyle and design brand, known for transforming ideas into impactful fashion statements and creative experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
