'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

export const name = 'Hugh Boylan'

export default function Layout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          {isHome ? (
            <>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!isHome && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
      <footer className={styles.footer}>
        <a
          href="https://github.com/hboylan/hughboylan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on Github
        </a>
      </footer>
    </>
  )
}
