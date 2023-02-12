import Nav from "../components/Nav/Nav";
import type { AppProps } from "next/app";
import React from "react";
import { Footer } from "../components/Footer";
import PersistentDrawerLeft from "../components/Nav/NavDrawer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
