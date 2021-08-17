import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import styles from "../darktheme.module.css";
import { useState } from "react";

export default function MainLayout({ title, children }) {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className={theme === "light" ? "" : styles.body}>
      <Header title={title || "Peter Nortey"} />
      <Navbar themeToggler={themeToggler} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
