import type { Metadata } from 'next'
import { Poppins, Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Trybe by Sui - Urban Luxury Fashion Brand',
  description: 'Trybe by Sui is an urban luxury fashion brand based in Abuja, Nigeria, that seamlessly blends retro and contemporary styles. Crafting elegant, high-quality pieces that make a statement.',
  keywords: 'Trybe by Sui, urban luxury fashion, Abuja Nigeria, unisex fashion, African lifestyle brand',
  authors: [{ name: 'Trybe by Sui' }],
  openGraph: {
    siteName: 'Trybe by Sui',
    url: 'https://trybebysui.com',
    title: 'Trybe by Sui - Urban Luxury Fashion',
    type: 'website',
    description: 'Trybe by Sui is an urban luxury fashion brand based in Abuja, Nigeria, that seamlessly blends retro and contemporary styles. Crafting elegant, high-quality pieces that make a statement.',
    images: [
      {
        url: '/images/sui/IMG_5941.JPG',
        width: 1200,
        height: 1200,
        alt: 'Trybe by Sui',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trybe by Sui - Urban Luxury Fashion',
    description: 'Trybe by Sui is an urban luxury fashion brand based in Abuja, Nigeria, that seamlessly blends retro and contemporary styles. Crafting elegant, high-quality pieces that make a statement.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://trybebysui.com" />
        <meta name="theme-color" content="#000" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Trybe by Sui",
              "description": "Urban luxury fashion brand based in Abuja, Nigeria, that seamlessly blends retro and contemporary styles.",
              "logo": "https://trybebysui.com/images/sui/remove-sui.png",
              "sameAs": [
                "https://x.com/sui_by?s=11",
                "https://www.instagram.com/trybe_by_sui?igsh=NGZ6eXhtYzBleTY3&utm_source=qr",
                "https://www.tiktok.com/@trybebysui?_t=ZS-90q75uqoCMW&_r=1"
              ],
              "url": "https://trybebysui.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Abuja",
                "addressCountry": "Nigeria"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "Trybe by Sui",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://trybebysui.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "url": "https://trybebysui.com"
            })
          }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}