'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/home')
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      {/* Logo GIF */}
      <div className="mb-8">
        <Image
          src="/images/sui/sui.gif"
          alt="Trybe by Sui Logo"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>
      
      {/* Get Started Button */}
      <button
        onClick={handleGetStarted}
        className="text-white text-xl font-semibold px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
        style={{ fontFamily: 'HappySwirly, cursive' }}
      >
        GET STARTED
      </button>
    </div>
  )
}
