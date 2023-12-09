import './globals.css'
import Session from './components/providers/Session'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'


export const metadata = {
  title: 'Next Blog',
  description: 'A simple blog built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Session>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </Session>
      </body>
    </html>
  )
}
