import styles from "./eyebrow.module.scss";

export default function Eyebrow({ startDate, endDate, leftText, rightText }) {
  if (startDate) {
    const today = new Date().toISOString();
    const dateToCompare = endDate || startDate;
    const isEventUpcoming = dateToCompare >= today;
    leftText = isEventUpcoming ? "Coming up" : "Past";
  }

  return (
    <div className={styles.eyebrowContainer}>
      <p className={styles.eyebrowLeft}>{leftText}</p>
      <p className={styles.eyebrowRight}>{rightText}</p>
    </div>
  );
}
