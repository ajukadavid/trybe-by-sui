'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const galleryImages2 = [
  { 
    src: '/images/sui/IMG_9798.JPG', 
    alt: 'Gallery Image 9',
    caption: 'Image 9'
  },
  { 
    src: '/images/sui/IMG_9793.JPG', 
    alt: 'Gallery Image 10',
    caption: 'Image 10'
  },
  { 
    src: '/images/sui/IMG_9812.JPG', 
    alt: 'Gallery Image 11',
    caption: 'Image 11'
  },
  { 
    src: '/images/sui/IMG_9813.JPG', 
    alt: 'Gallery Image 12',
    caption: 'Image 12'
  },
  { 
    src: '/images/sui/IMG_9777.JPG', 
    alt: 'Gallery Image 13',
    caption: 'Image 13'
  },
  { 
    src: '/images/sui/IMG_9784.JPG', 
    alt: 'Gallery Image 14',
    caption: 'Image 14'
  },
  { 
    src: '/images/sui/IMG_9792.JPG', 
    alt: 'Gallery Image 15',
    caption: 'Image 15'
  },
  { 
    src: '/images/sui/IMG_9803.JPG', 
    alt: 'Gallery Image 16',
    caption: 'Image 16'
  },
  { 
    src: '/images/sui/IMG_9750.JPG', 
    alt: 'Gallery Image 17',
    caption: 'Image 17'
  },
  { 
    src: '/images/sui/IMG_9814.JPG', 
    alt: 'Gallery Image 18',
    caption: 'Image 18'
  },
  { 
    src: '/images/sui/IMG_9808.JPG', 
    alt: 'Gallery Image 19',
    caption: 'Image 19'
  },
  { 
    src: '/images/sui/IMG_9817.JPG', 
    alt: 'Gallery Image 20',
    caption: 'Image 20'
  }
]

export default function GallerySection2() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="masonry-gallery">
          {galleryImages2.map((image, index) => (
            <div
              key={index}
              className="masonry-item relative group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={600}
                className="w-full h-auto object-cover transition-all duration-300"
                style={{
                  minHeight: `${200 + Math.random() * 200}px`
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg shadow-lg transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={800}
              height={800}
              className="object-contain max-h-full"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
