import React from "react";
import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import Layout from "../components/layout";
import DevApi, {ZipCloudJson} from "../lib/dev/api";
import {GetStaticProps} from "next";

interface Props {
  addressData: ZipCloudJson
}

export default function Labo({ addressData }: Props) {
  const result = addressData.results[0]
  const address = result.address1 + result.address2 + result.address3

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
  const addressData: ZipCloudJson = await api.getAddressData(8900073)

  return {
    props: {
      addressData
    }
  }
}
