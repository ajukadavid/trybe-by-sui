import Hero from '@/components/Hero'
import ThankYouSection from '@/components/ThankYouSection'
import KaiQuote from '@/components/KaiQuote'
import Gallery from '@/components/Gallery'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ThankYouSection />
      <Gallery />
    </div>
  )
}