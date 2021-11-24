import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";

export default function Header({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:description"
        content="Self taught JavaScript Developer with 2+ years experience developing applications with React & NodeJS. Recently I have developed interested in Blockchain Application Development with Solidity. I also offer free crypto advice and strategy at Coinly."
      />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, Software Engineer, Peter, React, NodeJS, Ghana, Software Developer in Accra"
      />
      <meta property="og:image" content="/images/mtipet.jpg" />
      <link
        href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
        rel="stylesheet"
      />
      <link rel="icon" href="images/icon.svg" />
    </Head>
  );
}
