import PaintingTile from "../painting-tile/painting-tile";
import styles from "./recommendation.module.scss";

export default function Recommendation({ collectionData = [] }) {
  const customStylesObject = {
    imageContainer: styles.imageContainer,
    textContainer: styles.textContainer,
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>PAINTINGS</p>
      <p className={styles.subHeader}>You may also like</p>
      <div className={styles.row}>
        {collectionData.map(item => {
          return (
            <PaintingTile
              key={item.name}
              {...item}
              customStylesObject={customStylesObject}
            />
          );
        })}
      </div>
    </div>
  );
}
