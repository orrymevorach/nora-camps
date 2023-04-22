import styles from "./wrapper.module.scss";

export default function Wrapper({ children, size = "large" }) {
  return (
    <div className={styles.padding}>
      <div className={styles[`${size}Wrapper`]}>{children}</div>
    </div>
  );
}
