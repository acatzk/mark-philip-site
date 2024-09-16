import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '~/styles/globals.css'

export const metadata: Metadata = {
  title: 'Mark Philip Portfolio',
  description:
    "I provide reliable electrical solutions for both residential and commercial properties. From repairs and upgrades to complex installations, my services prioritize safety and quality. Whether you're a homeowner or a business, I tailor my work to meet your needs, ensuring everything complies with local regulations and standards."
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
