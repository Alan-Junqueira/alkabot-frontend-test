import { ReactNode } from 'react'
import './globals.css'
import { IBM_Plex_Mono } from 'next/font/google'
import { Header } from './components/partials/Header'

export const metadata = {
  title: 'Home',
  description: 'Página inicial',
}

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} bg-[#08070B]`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
