import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import utilStyles from 'styles/utils.module.css'
import styles from './layout.module.css'

export const name = 'Hugh Boylan'

export default function Template({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <meta content="Hugh Boylan - Web Developer" name="description" />
        <meta content={`/profile.jpg`} property="og:image" />
        <meta content={name} name="og:title" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              alt={name}
              className={utilStyles.borderCircle}
              height={144}
              priority
              src="/images/profile.jpg"
              width={144}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  alt={name}
                  className={utilStyles.borderCircle}
                  height={108}
                  priority
                  src="/images/profile.jpg"
                  width={108}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
