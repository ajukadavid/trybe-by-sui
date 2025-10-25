import Hero from '@/components/Hero'
import ThankYouSection from '@/components/ThankYouSection'
import VisionSection from '@/components/VisionSection'
import ProductGallery from '@/components/ProductGallery'
import FooterHero from '@/components/FooterHero'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ThankYouSection />
      <ProductGallery />
      {/* <GallerySection1 /> */}
      <VisionSection />
      {/* <GallerySection2 /> */}
      <FooterHero />
    </div>
  )
}
