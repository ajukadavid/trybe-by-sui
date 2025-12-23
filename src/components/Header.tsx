'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const SHOP_URL = 'https://trybe-by-sui.company.site/'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(SHOP_URL, '_blank')
  }

  return (
    <>
      <header className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-black hover:text-gray-300"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-black hover:text-gray-300 ml-2"
                aria-label="Search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/sui/remove-sui.png"
                  alt="Trybe by Sui"
                  width={50}
                  height={50}
                  className="h-12 w-12"
                />
                <span className="sr-only">Trybe by Sui</span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-gray-300 uppercase text-sm font-medium">
                Home
              </Link>
              <a 
                href={SHOP_URL}
                onClick={handleProductsClick}
                className="text-black hover:text-gray-300 uppercase text-sm font-medium cursor-pointer"
              >
                Products
              </a>
              <Link href="/about" className="text-black hover:text-gray-300 uppercase text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-300 uppercase text-sm font-medium">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
            <div className="lg:hidden bg-white text-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-black hover:text-gray-300 uppercase text-sm font-medium">
                Home
              </Link>
              <a 
                href={SHOP_URL}
                onClick={handleProductsClick}
                className="block px-3 py-2 text-black hover:text-gray-300 uppercase text-sm font-medium cursor-pointer"
              >
                Products
              </a>
              <Link href="/about" className="block px-3 py-2 text-black hover:text-gray-300 uppercase text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-black hover:text-gray-300 uppercase text-sm font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Search</h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="flex">
              <input
                type="search"
                placeholder="Search products"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
