import PaintingTile from '../paintings-page/painting-tile/painting-tile';
import styles from './recommendation.module.scss';

export default function Recommendation({ collectionData = [] }) {
  const paintings = collectionData.paintingsCollection
    ? collectionData.paintingsCollection
    : collectionData;

  const classNames = {
    imageContainer: styles.imageContainer,
    textContainer: styles.textContainer,
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>PAINTINGS</p>
      <p className={styles.subHeader}>You may also like</p>
      <div className={styles.row}>
        {paintings.map(item => {
          return (
            <div className={styles.painting} key={item.name}>
              <PaintingTile {...item} customStylesObject={classNames} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
