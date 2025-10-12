'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const heroImages = [
  '/images/sui/IMG_9773.JPG',
  '/images/sui/IMG_9782.JPG',
  '/images/sui/IMG_9738.JPG',
  '/images/sui/IMG_9798.JPG',
  '/images/sui/IMG_9701.JPG',
  '/images/sui/IMG_9731.JPG',
  '/images/sui/IMG_9788.JPG',
  '/images/sui/IMG_9813.JPG',
  '/images/sui/IMG_9950.JPG',
  '/images/sui/IMG_9702.JPG'
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="relative h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Trybe by Sui Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      
      {/* Overlay content */}
      <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
        <div className="text-center max-w-4xl mt-12 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-red-600" style={{
            textShadow: '4px 4px 0px #fff, -4px -4px 0px #fff, 4px -4px 0px #fff, -4px 4px 0px #fff, 0px 4px 0px #fff, 0px -4px 0px #fff, 4px 0px 0px #fff, -4px 0px 0px #fff, 6px 6px 2px rgba(255,255,255,0.3), -6px -6px 2px rgba(255,255,255,0.3), 6px -6px 2px rgba(255,255,255,0.3), -6px 6px 2px rgba(255,255,255,0.3)'
          }}>
           TRYBE BY SUI
          </h1>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}