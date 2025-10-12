'use client'

import Image from 'next/image'
import { useState } from 'react'

const products = [
  {
    id: 1,
    image: '/images/sui/IMG_9725.JPG',
    name: 'Premium Shirt',
    price: '50,000',
    currency: 'Naira',
    description: 'High-quality cotton shirt'
  },
  {
    id: 2,
    image: '/images/sui/IMG_9712.JPG',
    name: 'Designer Shirt',
    price: '60,000',
    currency: 'Naira',
    description: 'Elegant designer shirt'
  },
  {
    id: 3,
    image: '/images/sui/IMG_9702.JPG',
    name: 'Luxury Item',
    price: '70,000',
    currency: 'Naira',
    description: 'Premium luxury piece'
  },
  {
    id: 4,
    image: '/images/sui/IMG_9731.JPG',
    name: 'Complete Outfit',
    price: '68,000',
    currency: 'Naira',
    description: 'Full outfit ensemble'
  },
  {
    id: 5,
    image: '/images/sui/IMG_9792.JPG',
    name: 'Jacket & Pants Set',
    price: '95,000',
    currency: 'Naira',
    description: 'Premium jacket and pants combination'
  },
  {
    id: 6,
    image: '/images/sui/IMG_9793.JPG',
    name: 'Designer Jacket',
    price: '95,000',
    currency: 'Naira',
    description: 'High-end designer jacket'
  },
  {
    id: 7,
    image: '/images/sui/IMG_9813.JPG',
    name: 'Premium Collection',
    price: '90,000',
    currency: 'Naira',
    description: 'Exclusive premium piece'
  },
  {
    id: 8,
    image: '/images/sui/IMG_9796.JPG',
    name: 'Luxury Collection',
    price: '50,000',
    currency: 'Naira',
    description: 'Sophisticated luxury item'
  }
]

export default function ProductGallery() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of urban luxury fashion pieces. 
            Hover over any item to see pricing details.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay with Price */}
                <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold mb-2">
                      ₦{product.price}
                    </div>
                    <div className="text-lg opacity-90">
                      {product.name}
                    </div>
                    <div className="text-sm opacity-75 mt-1">
                      {product.description}
                    </div>
                  </div>
                </div>

                {/* Price Badge (always visible) */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  ₦{product.price}
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
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
