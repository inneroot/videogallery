import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Mainpage from "../components/mainp";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Movie_store A Entertainment Category Flat Bootstarp Resposive Website
          Template | Single :: w3layouts
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="keywords"
          content="Movie_store Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
        Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design"
        />
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link
          href="css/style.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />

        <script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
        <link
          href="http://fonts.googleapis.com/css?family=Roboto+Condensed:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <Mainpage />
    </>
  );
}
