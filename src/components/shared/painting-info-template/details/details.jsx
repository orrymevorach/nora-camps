import styles from "./details.module.scss";

export default function Details({ details = [], dimensions = "" }) {
  const hasDetails = details.length;
  const formattedDimensions = hasDetails ? `${dimensions},` : dimensions;
  return (
    <div className={styles.detailsContainer}>
      {dimensions && <p className={styles.detail}>{formattedDimensions}</p>}
      {details.length > 0 &&
        details.map((detail, index) => {
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
