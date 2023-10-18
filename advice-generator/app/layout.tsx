import './globals.scss'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: [] })

export const metadata: Metadata = {
  title: 'Advice Generator',
  description: 'Challenge 03',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
