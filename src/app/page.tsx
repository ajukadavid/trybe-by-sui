import Hero from '@/components/Hero'
import ThankYouSection from '@/components/ThankYouSection'
import GallerySection1 from '@/components/GallerySection1'
import VisionSection from '@/components/VisionSection'
import GallerySection2 from '@/components/GallerySection2'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ThankYouSection />
      <GallerySection1 />
      <VisionSection />
      <GallerySection2 />
    </div>
  )
}