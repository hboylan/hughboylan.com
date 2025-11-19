'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const name = 'Hugh Boylan'

export default function Layout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  return (
    <>
      <div className="max-w-2xl px-4 mx-auto my-12 mb-24">
        <header className="flex flex-col items-center">
          {isHome ? (
            <>
              <Image
                src="/images/profile.jpg"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full"
                alt={name}
              />
              <h1 className="text-5xl leading-tight font-extrabold tracking-tight my-4">
                {name}
              </h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  src="/images/profile.jpg"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full"
                  alt={name}
                />
              </Link>
              <h2 className="text-2xl leading-snug my-4">
                <Link href="/" className="text-inherit">
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!isHome && (
          <div className="mt-12">
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
      <footer className="w-full h-24 border-t border-gray-200 flex justify-center items-center">
        <a
          href="https://github.com/hboylan/hughboylan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          View source on Github
        </a>
      </footer>
    </>
  )
}
