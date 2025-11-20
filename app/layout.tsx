import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Hugh Boylan | Principal Software Engineer',
  description:
    'Full-Stack application developer and cloud architect with more than 8 years of experience delivering quality web and mobile solutions.',
  keywords: [
    'Hugh Boylan',
    'Software Engineer',
    'Cloud Architect',
    'Full-Stack Developer',
    'AWS',
    'React',
    'Node.js',
  ],
  authors: [{ name: 'Hugh Boylan' }],
  openGraph: {
    title: 'Hugh Boylan | Principal Software Engineer',
    description:
      'Full-Stack application developer and cloud architect with more than 8 years of experience.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
