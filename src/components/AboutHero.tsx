'use client'

import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-full bg-white">
        <Image
          src="/images/sui/IMG_7411.jpg"
          alt="Trybe by Sui About Hero"
          fill
          className="object-contain md:object-cover"
          priority
        />
      </div>
      
      {/* Overlay content */}
      <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
        <div className="text-center max-w-4xl mt-12 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-red-600" style={{
            textShadow: '4px 4px 0px #fff, -4px -4px 0px #fff, 4px -4px 0px #fff, -4px 4px 0px #fff, 0px 4px 0px #fff, 0px -4px 0px #fff, 4px 0px 0px #fff, -4px 0px 0px #fff, 6px 6px 2px rgba(255,255,255,0.3), -6px -6px 2px rgba(255,255,255,0.3), 6px -6px 2px rgba(255,255,255,0.3), -6px 6px 2px rgba(255,255,255,0.3)'
          }}>
           ABOUT TRYBE BY SUI
          </h1>
        </div>
      </div>
    </section>
  )
}
