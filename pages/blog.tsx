import React from "react";
import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import Layout from "../components/layout";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog | yoshikouki.net</title>
      </Head>

      <main className={utilStyles.main}>
      </main>
    </Layout>
  )
}