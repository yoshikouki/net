import React from "react";
import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export const siteTitle = 'yoshikouki.net'

export default function Layout({
  title = 'yoshikouki.net',
  children,
  home
}: {
  title?: string
  children?: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href={"/favicon.ico"} />
        <meta
          name="description"
          content="@yoshikouki についてのポータルサイトです。"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      {!home && (
        <header className={styles.header}>
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{siteTitle}</a>
              </Link>
            </h2>
          </>
        </header>
      )}

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/k2_yoshikouki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          @k2_yoshikouki
        </a>
      </footer>
    </div>
  )
}
