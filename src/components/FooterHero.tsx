import Image from 'next/image'

export default function FooterHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-full">
        <Image
          src="/images/sui/IMG_9808.JPG"
          alt="Trybe by Sui Footer Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Text overlay */}
      <div className="absolute inset-0 bg-transparent bg-opacity-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white" style={{
            textShadow: '4px 4px 0px #000, -4px -4px 0px #000, 4px -4px 0px #000, -4px 4px 0px #000, 0px 4px 0px #000, 0px -4px 0px #000, 4px 0px 0px #000, -4px 0px 0px #000, 6px 6px 2px rgba(0,0,0,0.5), -6px -6px 2px rgba(0,0,0,0.5), 6px -6px 2px rgba(0,0,0,0.5), -6px 6px 2px rgba(0,0,0,0.5)'
          }}>
            URBAN LUXURY AT IT&apos;S BEST
          </h2>
        </div>
      </div>
    </section>
  )
}
