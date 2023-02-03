import Nav from "../components/Nav";
import type { AppProps } from "next/app";
import React from "react";
import { Footer } from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
