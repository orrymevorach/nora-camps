import styles from "./copyright.module.scss";
import clsx from "clsx";

export default function Copyright({ classNames = "" }) {
  return (
    <p className={clsx(styles.copyright, classNames)}>
      © 2023, Nora Camps Artist
    </p>
  );
}
