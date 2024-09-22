import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '~/styles/globals.css'
import Navbar from '~/components/navbar'

export const metadata: Metadata = {
  title: 'Mark Philip | Reliable Electrical Services for Homes & Businesses',
  description:
    'Reliable electrical services for residential and commercial properties, specializing in repairs, upgrades, and complex installations. Ensuring safety, quality, and compliance for all your electrical needs, tailored to meet homeowner and business requirements.'
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
      <body className="relative h-[9999px] scroll-smooth antialiased selection:bg-core-primary selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
