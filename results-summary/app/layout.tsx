import './globals.scss'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Hanken_Grotesk } from 'next/font/google'

const overpass = Hanken_Grotesk({ subsets: [] })

export const metadata: Metadata = {
  title: 'Results Summary',
  description: 'Challenge 02',
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
