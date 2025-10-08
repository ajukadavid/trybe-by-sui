import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Single Hero Image */}
      <div className="relative h-full">
        <Image
          src="/images/sui/IMG_9773.JPG"
          alt="Trybe by Sui Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlay content */}
      <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-red-700 max-w-4xl mt-12 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
           TRYBE BY SUI
          </h1>
          {/* <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
            Urban luxury fashion brand that seamlessly blends retro and contemporary styles.
          </p>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Crafting elegant, high-quality pieces that make a statement. Your outfit speaks for you before you even say a word.
          </p> */}
        </div>
      </div>
    </section>
  )
}