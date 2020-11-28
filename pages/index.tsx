import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>yoshikouki.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://yoshikouki.net">Yoshikouki.net</a>!!1
        </h1>

        <p className={styles.description}>
          実験場
        </p>

        <p className={styles.description}>
          GitHub Actions は正常に稼働して自動でプロイされました!!1
        </p>

        <div className={styles.grid}>
          <a href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>アウトプットまとめ</p>
          </a>

          <a href="https://twitter.com/k2_yoshikouki" className={styles.card}>
            <h3>Twitter &rarr;</h3>
            <p>日常系ツイート多め</p>
          </a>
        </div>
      </main>

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
