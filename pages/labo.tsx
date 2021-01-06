import React, {useState} from "react";
import utilStyles from '../styles/utils.module.scss'
import Layout from "../components/layout";
import DevApi, {ZipCloudJson} from "../lib/dev/api";
import {Button, Link, Table, TableBody, TableCell, TableContainer, TableHead, TextField} from "@material-ui/core";

export default function Labo() {
  const [zipcode, setZipcode] = useState('1234567')
  const [address, setAddress] = useState('住所')
  const [apiStatus, setApiStatus] = useState(0)

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const postZipcode = event.target.zipcode.value

    const api = new DevApi()
    const res: ZipCloudJson = await api.getAddressData(postZipcode)
    console.log('res:', res)
    const address = res.results[0].address1 + res.results[0].address2 + res.results[0].address3
    setZipcode(res.results[0].zipcode)
    setAddress(address)
    setApiStatus(res.status)
  }

  return (
    <Layout title={'Labo | yoshikouki.net'}>
      <main className={utilStyles.main}>
        <h1>ラボ</h1>
        <Link>
          <a href="/labo/blog">Blog with API</a>
        </Link>
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
              <tr>
                <TableCell>郵便番号</TableCell>
                <TableCell>住所</TableCell>
                <TableCell>レスポンスステータス</TableCell>
              </tr>
            </TableHead>
            <TableBody>
              <tr>
                <TableCell>
                  {zipcode}
                </TableCell>
                <TableCell>
                  {address}
                </TableCell>
                <TableCell>
                  {apiStatus}
                </TableCell>
              </tr>
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </Layout>
  )
}
