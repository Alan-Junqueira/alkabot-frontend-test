import { ReactNode } from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import { Header } from './components/partials/Header'
import './globals.css'
import { BackToTop } from './components/BackToTop'

export const metadata = {
  title: 'Home',
  description: 'Página inicial',
}

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} bg-gray-900`}>
        <Header />
        <BackToTop />
        {children}
      </body>
    </html>
  )
}
