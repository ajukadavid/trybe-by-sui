'use client'

import { useEffect } from 'react'

const SHOP_URL = 'https://trybe-by-sui.company.site/'

export default function ProductsPage() {
  useEffect(() => {
    // Redirect to external shop when page loads
    window.location.href = SHOP_URL
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-16 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Redirecting to shop...</p>
      </div>
    </div>
  )
}
