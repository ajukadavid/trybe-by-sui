'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryImages1 = [
  { 
    src: '/images/sui/IMG_9691.JPG', 
    alt: 'Gallery Image 1',
    caption: 'Image 1'
  },
  { 
    src: '/images/sui/IMG_9821.JPG', 
    alt: 'Gallery Image 2',
    caption: 'Image 2'
  },
  { 
    src: '/images/sui/IMG_9698.JPG', 
    alt: 'Gallery Image 3',
    caption: 'Image 3'
  },
  { 
    src: '/images/sui/IMG_9729.JPG', 
    alt: 'Gallery Image 4',
    caption: 'Image 4'
  },
  { 
    src: '/images/sui/IMG_9730.JPG', 
    alt: 'Gallery Image 5',
    caption: 'Image 5'
  },
  { 
    src: '/images/sui/IMG_9717.JPG', 
    alt: 'Gallery Image 6',
    caption: 'Image 6'
  },
  { 
    src: '/images/sui/IMG_9726.JPG', 
    alt: 'Gallery Image 7',
    caption: 'Image 7'
  },
  { 
    src: '/images/sui/IMG_9789.JPG', 
    alt: 'Gallery Image 8',
    caption: 'Image 8'
  }
]

export default function GallerySection1() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="masonry-gallery">
          {galleryImages1.map((image, index) => (
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
