'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const oldCollection = [
  {
    id: 1,
    image: '/images/sui/IMG_9712.JPG',
    hoverImage: 'https://postimg.cc/0MM0CwCQ',
    name: 'Red and black Trybe by Sui custom design comfy Sweatshirt',
    price: '60,000',
    currency: 'Naira',
    collection: 'New'
  },
  {
    id: 2,
    image: '/images/sui/IMG_9725.JPG',
    hoverImage: '/images/sui/IMG_9726.JPG',
    name: 'Black and white Trybe by Sui custom design comfy Sweatshirt',
    price: '55,000',
    currency: 'Naira',
    collection: 'New'
  },
  {
    id: 3,
    image: '/images/sui/IMG_9702.JPG',
    hoverImage: '/images/sui/IMG_9698.JPG',
    name: 'Army Green & Black custom design shirt and pants sets',
    price: '70,000',
    currency: 'Naira',
    collection: 'New'
  },
  {
    id: 4,
    image: '/images/sui/IMG_9731.JPG',
    hoverImage: '/images/sui/IMG_9751.JPG',
    name: 'Trybe by Sui “Rhythm design” green/black shirt and short sets',
    price: '68,000',
    currency: 'Naira',
    collection: 'New'
  },
  {
    id: 5,
    image: '/images/sui/IMG_9793.JPG',
    hoverImage: '/images/sui/IMG_9792.JPG',
    name: 'TBS Denim Jacket and Pant set',
    price: '95,000',
    currency: 'Naira',
    collection: 'New'
  },
  {
    id: 7,
    image: '/images/sui/IMG_9813.JPG',
    hoverImage: '/images/sui/IMG_9812.JPG',
    name: 'TBS Denim and Jort set',
    price: '90,000',
    currency: 'Naira',
    collection: 'New'
  },
  {
    id: 8,
    image: '/images/sui/IMG_9796.JPG',
    hoverImage: '/images/sui/IMG_9795.JPG',
    name: 'Trybe by Sui Black “Summer Transit” limited editionT shirt',
    price: '50,000',
    currency: 'Naira',
    collection: 'New'
  },
  {
    id: 9,
    image: '/images/sui/IMG_9691.JPG',
    hoverImage: '/images/sui/IMG_9693.JPG',
    name: 'TBS Design green & black cropped top and short set',
    price: '65,000',
    currency: 'Naira',
    collection: 'New'
  }
]

const newCollection = [
  {
    id: 10,
    image: '/images/sui/IMG_3060.JPG',
    hoverImage: '/images/sui/IMG_3062.JPG',
    name: 'Trybe by sui Red Varsity Jacket',
    price: '70,000',
    currency: 'Naira',
    description: 'Contemporary luxury piece',
  },

  {
    id: 11,
    image: '/images/sui/IMG_3067.JPG',
    hoverImage: '/images/sui/IMG_3066.JPG',
    name: 'Black T-shirt & short set',
    price: '60,000',
    currency: 'Naira',
    description: 'Latest premium design',
  },
  {
    id: 12,
    image: '/images/sui/IMG_3155.JPG',
    hoverImage: '/images/sui/IMG_3157.JPG',
    name: 'Trybe by Sui Green Nigerian Jersey',
    price: '65,000',
    currency: 'Naira',
    description: 'Modern take on classic style',
  },
  {
    id: 13,
    image: '/images/sui/IMG_3158.JPG',
    hoverImage: '/images/sui/IMG_3159.JPG',
    name: 'Trybe by Sui Grey Varsity Jacket',
    price: '75,000',
    currency: 'Naira',
    description: 'Contemporary luxury fashion',
  },
  {
    id: 14,
    image: 'https://image2url.com/images/1760693126469-bafd2510-d828-4c31-b0c4-620e2c1c7960.jpg',
    hoverImage: 'https://image2url.com/images/1760693148778-e6aa13a3-41ad-4a0f-ade7-edbcc9004ea7.jpg',
    name: 'Trybe by Sui Blue and white Knitted vest and cap set',
    price: '60,000',
    currency: 'Naira',
    description: 'Premium urban collection',
  },
  {
    id: 15,
    image: 'https://image2url.com/images/1760693080080-f093cbf9-9ccc-4edc-b597-84d32baba30a.jpg',
    hoverImage: '/images/sui/IMG_3206.JPG',
    name: 'White and black Custom Jersey',
    price: '60,000',
    currency: 'Naira',
    description: 'Latest luxury design',
  },
  {
    id: 16,
    image: '/images/sui/IMG_3376.JPG',
    hoverImage: 'https://i.postimg.cc/260t8hc2/IMG-3106.jpg',
    name: 'Red and black Hockey Jersey',
    price: '65,000',
    currency: 'Naira',
    description: 'Exclusive contemporary piece',
  }
]

const products = [...oldCollection, ...newCollection]

// Hero slider images
const heroImages = [
  '/images/sui/IMG_5941.JPG',
  '/images/sui/IMG_5944.JPG',
  '/images/sui/IMG_5945.JPG',
  '/images/sui/IMG_5950.JPG'
]

export default function ProductGallery() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
       

        {/* Classic Collection */}
        <div className="mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
          SS25 - SUMMER TRANSIT COLLECTION
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {oldCollection.map((product) => (
            <div
              key={product.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-lg">
                {/* Default Image */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Image */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Image
                    src={product.hoverImage}
                    alt={`${product.name} - Hover view`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Overlay with Price */}
                <div className={`absolute inset-0  bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                
                </div>

                {/* Collection Tag */}
                <div className={`absolute top-4 left-4 px-3 py-1  text-sm font-semibold shadow-lg ${
                  product.collection === 'New Collection' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-black'
                }`}>
                  {product.collection}
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-6 text-center px-2">
                <h3 className="text-sm uppercase text-gray-900 leading-tight tracking-wide">
                  {product.name}
                </h3>
                <div className="mt-2 text-red-600 font-semibold text-lg">
                  ₦{product.price}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Hero Slider Section */}
        <div className="my-20">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            {/* Slider Images */}
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image}
                  alt={`Trybe by Sui - Premium Fashion ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
            
            {/* Overlay with Text */}
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Discover Our Latest
                </h2>
                <p className="text-lg md:text-xl opacity-90">
                  Experience the evolution of luxury fashion
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* New Collection */}
        <div className="mb-16">
          <h3 className="text-4xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            TRYBE BY SUI SS24 - IN TRYBE WE TRUST
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newCollection.map((product) => (
            <div
              key={product.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-lg">
                {/* Default Image */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Image */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Image
                    src={product.hoverImage}
                    alt={`${product.name} - Hover view`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Overlay with Price */}
                <div className={`absolute inset-0  bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* <div className="text-center text-red-500">
                    <div className="text-3xl font-bold mb-2">
                      ₦{product.price}
                    </div>
                    <div className="text-lg opacity-90">
                      {product.name}
                    </div>
                    <div className="text-sm opacity-75 mt-1">
                      {product.description}
                    </div>
                  </div> */}
                </div>

              </div>

              {/* Product Info */}
              <div className="mt-6 text-center px-2">
                <h3 className="text-sm uppercase  text-gray-900 leading-tight tracking-wide">
                  {product.name}
                </h3>
                <div className="mt-2 text-red-600 font-semibold text-lg">
                  ₦{product.price}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
