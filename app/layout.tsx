import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'normalize.css'
import '../styles/globals.css'
import Layout, { name } from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hughboylan.com'),
  title: 'Hugh Boylan | Software Engineer',
  description: 'Software engineer',
  openGraph: {
    title: name,
    images: ['/images/profile.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
