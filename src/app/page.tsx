import Hero from '@/components/Hero'
import ThankYouSection from '@/components/ThankYouSection'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ThankYouSection />
      <Gallery />
    </div>
  )
}