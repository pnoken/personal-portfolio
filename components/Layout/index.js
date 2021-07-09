import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function MainLayout({ title, children }) {
  return (
    <>
      <Header title={title} />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
