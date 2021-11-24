import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";

export default function Header({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="I am Peter Nortey, A JavaScript Developer with over two years professional experience as a frontend developer."
      />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, Software Engineer, Peter, React, NodeJS, Ghana, Software Developer in Accra"
      />
      <meta name="author" content="Peter Nortey" />
      <link
        href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
        rel="stylesheet"
      />
      <link rel="icon" href="images/icon.svg" />
    </Head>
  );
}
