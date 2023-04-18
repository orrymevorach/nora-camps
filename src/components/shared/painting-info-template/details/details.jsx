import styles from "./details.module.scss";

export default function Details({ details }) {
  return (
    <div className={styles.detailsContainer}>
      {details.map((detail, index) => {
        const isLastDetail = details.length === index + 1;
        if (isLastDetail)
          return (
            <p className={styles.detail} key={detail}>
              {detail}
            </p>
          );
        return (
          <p className={styles.detail} key={detail}>
            {detail},
          </p>
        );
      })}
    </div>
  );
}
