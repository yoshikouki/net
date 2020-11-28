import '../styles/globals.scss'
import { AppProps } from "next/app";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
