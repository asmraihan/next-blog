import { Inter } from 'next/font/google'
import './globals.css'
import Session from './components/providers/Session'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Blog',
  description: 'A simple blog built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Session>
          {children}
        </Session>
      </body>
    </html>
  )
}
