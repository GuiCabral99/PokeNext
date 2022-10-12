import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

import style from "../../styles/Content.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokéNext</title>
      </Head>
      <Navbar />
      <main className={style.main_container}>{children}</main>
      <Footer />
    </>
  );
}
