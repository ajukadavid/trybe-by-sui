import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      {/* Newsletter Section */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Navigation Links */}
            <div className="text-center lg:text-left">
              <nav className="flex flex-wrap justify-center lg:justify-start gap-6">
                <Link href="/faq" className="text-black hover:text-gray-300 uppercase text-sm">
                  FAQ
                </Link>
                <Link href="mailto:support@kaitrump.shop" className="text-black hover:text-gray-300 uppercase text-sm">
                  Customer Support
                </Link>
                <Link href="/contact" className="text-black hover:text-gray-300 uppercase text-sm">
                  Contact Us
                </Link>
                <Link href="/privacy" className="text-black hover:text-gray-300 uppercase text-sm">
                  Privacy Policy
                </Link>
                    <Link href="/terms" className="text-black hover:text-gray-300 uppercase text-sm">
                  Terms + Conditions
                </Link>
                <Link href="/accessibility" className="text-black hover:text-gray-300 uppercase text-sm">
                  Accessibility
                </Link>
              </nav>
            </div>

            {/* Logo and Social */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/images/sui/remove-sui.png"
                  alt="Trybe by Sui"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm text-gray-400 mb-4">© 2025 TRYBE BY SUI. ALL RIGHTS RESERVED.</p>
              <h5 className="text-lg font-semibold mb-4">Stay Connected</h5>
              <div className="flex justify-center space-x-4">
                <Link
                  href="https://x.com/kaitrump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-300"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/kaitrumpgolfer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-300"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.721v8.562h8.558V7.707zm1.297-1.297v11.156H6.424V6.41h11.152z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@kaitrump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-300"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.tiktok.com/@thekaitrumpgolfer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-300"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.36a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Empty column for layout */}
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
