import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Product Listing Page - Modern E-commerce',
  description: 'Discover our curated collection of premium products. Shop the latest trends and best deals on our e-commerce platform.',
  openGraph: {
    title: 'Product Listing Page - Modern E-commerce',
    description: 'Discover our curated collection of premium products. Shop the latest trends and best deals on our e-commerce platform.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Modern E-commerce Store",
              "description": "Discover our curated collection of premium products",
              "url": "https://your-store-url.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://your-store-url.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

