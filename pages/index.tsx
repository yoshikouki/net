import React from "react";
import Head from 'next/head'
import Link from "next/link";
import utilStyles from '../styles/utils.module.scss'
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>yoshikouki.net</title>
      </Head>

      <main className={utilStyles.main}>
        <h1 className={utilStyles.title}>
          <a href="/">Yoshikouki.net</a>!!1
        </h1>

        <p className={utilStyles.description}>
          実験場
        </p>

        <p className={utilStyles.description}>
          GitHub Actions は正常に稼働して自動でプロイされました!!1
        </p>

        <div className={utilStyles.grid}>
          <Link href={"/blog"}>
            <a className={utilStyles.card}>
              <h3>Blog &rarr;</h3>
              <p>アウトプットまとめ</p>
            </a>
          </Link>

          <a
            href="https://twitter.com/k2_yoshikouki"
            className={utilStyles.card}
          >
            <h3>Twitter &rarr;</h3>
            <p>日常系ツイート多め</p>
          </a>
        </div>
      </main>
    </Layout>
  )
}
