import './globals.css'
import { Roboto, Playfair_Display } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

const playfair = Playfair_Display({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Kelly Caldwell and Kashmere',
  description: 'An 80s Revival Band',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
