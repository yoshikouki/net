import React from "react";
import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import Layout from "../components/layout";

export default function Labo() {
  const addressData = "addressData"

  return (
    <Layout>
      <Head>
        <title>Labo | yoshikouki.net</title>
      </Head>

      <main className={utilStyles.main}>
        <h1>ラボ</h1>
        <ul>
          <li>
            {addressData}
          </li>
          <li>test</li>
        </ul>
      </main>
    </Layout>
  )
}
