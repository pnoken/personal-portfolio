import "../styles/globals.css";
import "../styles/switch.css";
import MainLayout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
