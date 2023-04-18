import { formatDate } from "@/utils/string-utils";
import styles from "./event-date-range.module.scss";

export default function EventDateRange({ startDate, endDate }) {
  return (
    <p className={styles.date}>
      {startDate && <span>{formatDate(startDate)}</span>}
      {endDate && (
        <>
          {" "}
          - <br /> <span>{formatDate(endDate)}</span>
        </>
      )}
    </p>
  );
}
