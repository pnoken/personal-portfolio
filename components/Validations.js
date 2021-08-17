import styles from "./validation.module.css";

export default function Validation({ children }) {
  return <div className={styles.alert}>{children}</div>;
}
