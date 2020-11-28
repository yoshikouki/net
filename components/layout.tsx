import React from "react";
import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = 'yoshikouki'
export const siteTitle = 'yoshikouki.net'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
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
        <title/>
      </Head>
      <header className={styles.header}>
        {!home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
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
