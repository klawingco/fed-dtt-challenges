import './globals.scss'
import type { Metadata } from 'next'
import { Overpass } from 'next/font/google'

const overpass = Overpass({ subsets: [] })

export const metadata: Metadata = {
  title: 'Interactive Rating Component',
  description: 'Challenge 01',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  )
}
