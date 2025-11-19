import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

export const name = 'Hugh Boylan'

export default function Layout({ children }) {
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Software engineer" />
          <meta property="og:image" content={`/images/profile.jpg`} />
          <meta name="og:title" content={name} />
          <title>Hugh Boylan | Software Engineer</title>
        </Head>
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
