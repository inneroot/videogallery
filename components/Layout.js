import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

const Layout = (props) => (
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
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed&display=swap"
        rel="stylesheet"
      />
    </Head>

    <div className="container">
      <div className="container_wrap">
        <Header />
        {props.children}
      </div>
    </div>
    <Footer />
  </>
);

export default Layout;
