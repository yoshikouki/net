import React, {useState} from "react";
import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import Layout from "../components/layout";
import DevApi, {ZipCloudJson} from "../lib/dev/api";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TextField} from "@material-ui/core";

export default function Labo() {
  const [zipcode, setZipcode] = useState('1234567')
  const [address, setAddress] = useState('住所')
  const [apiStatus, setApiStatus] = useState('0')

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const postZipcode = event.target.zipcode.value
    const res: ZipCloudJson = await DevApi.prototype.getAddressData(Number(postZipcode))
    const addressData = res.results[0]
    const address = addressData.address1 + addressData.address2 + addressData.address3
    setZipcode(postZipcode)
    setAddress(address)
  }

  return (
    <Layout>
      <Head>
        <title>Labo | yoshikouki.net</title>
      </Head>

      <main className={utilStyles.main}>
        <h1>ラボ</h1>
        <form onSubmit={submit}>
          <TextField
            // required
            fullWidth
            id="zipcode"
            name="zipcode"
            label="郵便番号"
          />
          <Button
            color="primary"
            type="submit"
            fullWidth
          >
            住所取得
          </Button>

        </form>
        <TableContainer>
          <Table size="medium" aria-label="A address Table">
            <TableHead>
              <TableCell>郵便番号</TableCell>
              <TableCell>住所</TableCell>
              <TableCell>レスポンスステータス</TableCell>
            </TableHead>
            <TableBody>
              <TableCell>
                {zipcode}
              </TableCell>
              <TableCell>
                {address}
              </TableCell>
              <TableCell>
                {apiStatus}
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </Layout>
  )
}
