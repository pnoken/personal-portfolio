import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";

export default function Header({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="images/icon.svg" />
    </Head>
  );
}
