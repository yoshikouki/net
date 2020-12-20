import React from "react";
import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import Layout from "../components/layout";
import DevApi from "../lib/dev/api";

export default function Labo({addressData}) {
  const result = addressData.results[0]
  let address = result.address1 + result.address2 + result.address3

  return (
    <Layout>
      <Head>
        <title>Labo | yoshikouki.net</title>
      </Head>

      <main className={utilStyles.main}>
        <h1>ラボ</h1>
        <ul>
          <li>
            {addressData.results[0].zipcode}
          </li>
          <li>
            {address}
          </li>
          <li>
            {addressData.status}
          </li>
        </ul>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let api = new DevApi()
  const addressData = await api.getAddressData(8900073)

  return {
    props: {
      addressData
    }
  }
}
