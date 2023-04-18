import PaintingTile from '../paintings-page/painting-tile/painting-tile';
import styles from './recommendation.module.scss';

export default function Recommendation({ collectionData }) {
  const classNames = {
    imageContainer: styles.imageContainer,
  };
  return (
    <div className={styles.container}>
      <p className={styles.header}>PAINTINGS</p>
      <p className={styles.subHeader}>You may also like</p>
      <div className={styles.row}>
        {collectionData.map(item => {
          return (
            <div className={styles.painting} key={item.name}>
              <PaintingTile {...item} classNames={classNames} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
