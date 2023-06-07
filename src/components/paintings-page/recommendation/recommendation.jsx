import PaintingTile from "../painting-tile/painting-tile";
import styles from "./recommendation.module.scss";
import { removeCurrentPaintingFromRecommendedList } from "@/utils/array-utils";

export default function Recommendation({
  paintingData = [],
  collectionData = [],
}) {
  const customStylesObject = {
    imageContainer: styles.imageContainer,
    textContainer: styles.textContainer,
  };

  const recommendedPaintings = removeCurrentPaintingFromRecommendedList(
    paintingData,
    collectionData
  );

  return (
    <div className={styles.container}>
      <p className={styles.header}>PAINTINGS</p>
      <p className={styles.subHeader}>You may also like</p>
      <div className={styles.row}>
        {recommendedPaintings.map(item => {
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
