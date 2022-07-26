import React from "react";
import Navbar from "./navbar";
import Home from "../Views/Home";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Home />

      <Footer />
    </div>
  );
}

export default Layout;
