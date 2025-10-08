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
        <div className="text-center max-w-4xl mt-12 px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-red-600" style={{
            textShadow: '4px 4px 0px #fff, -4px -4px 0px #fff, 4px -4px 0px #fff, -4px 4px 0px #fff, 0px 4px 0px #fff, 0px -4px 0px #fff, 4px 0px 0px #fff, -4px 0px 0px #fff, 6px 6px 2px rgba(255,255,255,0.3), -6px -6px 2px rgba(255,255,255,0.3), 6px -6px 2px rgba(255,255,255,0.3), -6px 6px 2px rgba(255,255,255,0.3)'
          }}>
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