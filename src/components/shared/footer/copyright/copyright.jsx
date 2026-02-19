import { getCurrentYear } from "@/utils/string-utils";
import styles from "./copyright.module.scss";
import clsx from "clsx";

export default function Copyright({ classNames = "" }) {
  const currentYear = getCurrentYear();
  return (
    <p className={clsx(styles.copyright, classNames)}>
      © {currentYear}, Nora Camps Artist
    </p>
  );
}
