import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import styles from "../darktheme.module.css";
import { useEffect, useState } from "react";

export default function MainLayout({ title, children }) {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);
  const themeToggler = (e) => {
    let checked = e.target.checked;
    checked
      ? (setTheme("dark"), localStorage.setItem("theme", "dark"))
      : (setTheme("light"),
        localStorage.setItem("theme", "light"),
        setChecked(false));
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setTheme("dark");
      setChecked(true);
    }
  }, []);

  // Router.onRouteChangeStart = (url) => {
  //   NProgress.start();
  // };

  // Router.onRouteChangeComplete = () => NProgress.done();

  // Router.onRouteChangeError = () => NProgress.done();

  return (
    <div className={theme === "light" ? "" : styles.body}>
      <Header title={title || "Peter Nortey"} />
      <Navbar themeToggler={themeToggler} checked={checked} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
