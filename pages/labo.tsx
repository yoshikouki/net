import React from "react";
import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import Layout from "../components/layout";
import DevApi, {ZipCloudJson} from "../lib/dev/api";
import {GetStaticProps} from "next";
import {Table, TableBody, TableCell, TableContainer, TableHead} from "@material-ui/core";

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
        <TableContainer>
          <Table size="medium" aria-label="A address Table">
            <TableHead>
              <TableCell>郵便番号</TableCell>
              <TableCell>住所</TableCell>
              <TableCell>レスポンスステータス</TableCell>
            </TableHead>
            <TableBody>
              <TableCell>
                {addressData.results[0].zipcode}
              </TableCell>
              <TableCell>
                {address}
              </TableCell>
              <TableCell>
                {addressData.status}
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const api = new DevApi()
  const addressData: ZipCloudJson = await api.getAddressData(8900073)

  return {
    props: {
      addressData
    }
  }
}
