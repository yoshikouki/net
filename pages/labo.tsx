import React from "react";
import utilStyles from '../styles/utils.module.scss'
import Layout from "../components/layout";
import {Link} from "@material-ui/core";

export default function Labo() {
  return (
    <Layout title={'Labo | yoshikouki.net'}>
      <main className={utilStyles.main}>
        <h1>ラボ</h1>
        <Link>
          <a href="/labo/blog">Blog with API</a>
        </Link>
        <Link>
          <a href="/labo/zipcode">住所取得君</a>
        </Link>
      </main>
    </Layout>
  )
}
