'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import { Product } from '@/types'

// Mock products data
const mockProducts: Product[] = [
  {
    id: 'kt-signature-pullover',
    name: 'KT Signature Pullover Sweatshirt',
    price: 89.99,
    image: '/images/Squares_0008_9-bg_50x.jpg@v=1757868919',
    description: 'Premium quality sweatshirt with thoughtful fabric and graceful lines, made to live in.',
    variants: [
      { id: 'small', name: 'Small', price: 89.99, available: true },
      { id: 'medium', name: 'Medium', price: 89.99, available: true },
      { id: 'large', name: 'Large', price: 89.99, available: true },
      { id: 'xl', name: 'XL', price: 89.99, available: false },
    ]
  },
  {
    id: 'kt-basic-tee',
    name: 'KT Basic Tee',
    price: 39.99,
    image: '/images/Squares_0002_3_50x.jpg@v=1757540396',
    description: 'Clean, comfortable basic tee with the KT mark.',
    variants: [
      { id: 'small', name: 'Small', price: 39.99, available: true },
      { id: 'medium', name: 'Medium', price: 39.99, available: true },
      { id: 'large', name: 'Large', price: 39.99, available: true },
    ]
  },
  {
    id: 'kt-hoodie',
    name: 'KT Hoodie',
    price: 79.99,
    image: '/images/Squares_0006_7_50x.jpg@v=1757540396',
    description: 'Cozy hoodie with premium materials and clean design.',
    variants: [
      { id: 'small', name: 'Small', price: 79.99, available: true },
      { id: 'medium', name: 'Medium', price: 79.99, available: true },
      { id: 'large', name: 'Large', price: 79.99, available: true },
    ]
  }
]

export default function ProductsPage() {
  const { addToCart } = useCart()
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({})

  const handleAddToCart = (product: Product) => {
    const selectedVariantId = selectedVariants[product.id]
    const variant = product.variants?.find(v => v.id === selectedVariantId)
    addToCart(product, variant)
  }

  const handleVariantChange = (productId: string, variantId: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variantId
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KT Collection</h1>
          <p className="text-lg text-gray-600">Elevated basics with a quiet mark</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-gray-900 mb-4">${product.price}</p>
                
                {product.variants && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Size
                    </label>
                    <select
                      value={selectedVariants[product.id] || ''}
                      onChange={(e) => handleVariantChange(product.id, e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="">Select Size</option>
                      {product.variants.map((variant) => (
                        <option
                          key={variant.id}
                          value={variant.id}
                          disabled={!variant.available}
                        >
                          {variant.name} {!variant.available ? '(Sold Out)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.variants && !selectedVariants[product.id]}
                  className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
