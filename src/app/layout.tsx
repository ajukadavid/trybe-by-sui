import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/lib/cart-context'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Kai Trump Official - Kai Trump Shop',
  description: 'From championship greens to millions online, Kai Trump unveils KT, elevated basics with a quiet mark. Thoughtful fabric, graceful lines, made to live in.',
  keywords: 'Kai Trump Shop, kaitrump.shop',
  authors: [{ name: 'AdornThemes' }],
  openGraph: {
    siteName: 'Kai Trump Shop',
    url: 'https://kaitrump.shop',
    title: 'Kai Trump Official',
    type: 'website',
    description: 'From championship greens to millions online, Kai Trump unveils KT, elevated basics with a quiet mark. Thoughtful fabric, graceful lines, made to live in.',
    images: [
      {
        url: '/images/sui/IMG_5941.JPG',
        width: 1200,
        height: 1200,
        alt: 'Kai Trump Shop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kai Trump Official',
    description: 'From championship greens to millions online, Kai Trump unveils KT, elevated basics with a quiet mark. Thoughtful fabric, graceful lines, made to live in.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/favicon-16x16_c07db629-c2f4-414a-91cb-039a6515032a_32x32.png@v=1757454987',
    apple: '/images/apple-touch-icon_152x.png@v=1757455003',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="canonical" href="https://kaitrump.shop" />
        <meta name="theme-color" content="#000" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Kai Trump Shop",
              "logo": "https://kaitrump.shop/images/KT-Logo-White-Drop.png@v=1757455146",
              "sameAs": [
                "https://x.com/kaitrump?",
                "https://www.instagram.com/kaitrumpgolfer",
                "https://www.youtube.com/@kaitrump"
              ],
              "url": "https://kaitrump.shop"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "Kai Trump Shop",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://kaitrump.shop/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "url": "https://kaitrump.shop"
            })
          }}
        />
      </head>
      <body className="font-sans">
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}