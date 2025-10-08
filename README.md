# Kai Trump Shop - Next.js E-commerce

A modern e-commerce website for Kai Trump's clothing brand, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, responsive design with mobile-first approach
- **E-commerce Functionality**: Shopping cart, product variants, and checkout flow
- **Image Optimization**: Next.js Image component with lazy loading
- **SEO Optimized**: Meta tags, structured data, and Open Graph
- **Performance**: Optimized for speed and Core Web Vitals
- **Accessibility**: WCAG compliant with proper ARIA labels

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Fonts**: Poppins (Google Fonts)
- **Icons**: Heroicons (SVG)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kaitrump-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── cart/              # Cart page
│   ├── products/          # Products page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── Gallery.tsx       # Image gallery
│   ├── Newsletter.tsx    # Newsletter signup
│   └── ...
├── lib/                   # Utilities and contexts
│   └── cart-context.tsx   # Shopping cart context
├── types/                 # TypeScript type definitions
│   └── index.ts
└── public/               # Static assets
    └── images/           # Optimized images
```

## Key Components

### Cart System
- Context-based state management
- Local storage persistence
- Add/remove/update quantities
- Variant selection

### Image Gallery
- Masonry layout
- Lightbox modal
- Lazy loading
- Responsive images

### Newsletter
- Email validation
- Form submission handling
- Success states

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP support
- **Font Loading**: Google Fonts with display=swap
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD for organization and website
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for demonstration purposes. All rights reserved.

## Contact

For questions or support, please contact the development team.