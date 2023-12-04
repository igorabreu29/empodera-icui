import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { AOSProvider } from '@/components/AOSProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Empodera Icuí',
    template: 'Empodera Icuí | %s',
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    'Website do projeto Empodera Icuí, criado com fins de conscientizar as pessoas e principalmente ajudar as mulheres.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} text-black bg-zinc-100 min-h-screen`}
      >
        <AOSProvider>
          <Header />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  )
}
