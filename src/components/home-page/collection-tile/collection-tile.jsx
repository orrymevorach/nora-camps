import Image from 'next/image';
import styles from './collection-tile.module.scss';
import PrimaryButton from '@/components/shared/primary-button/primary-button';

export default function CollectionTile({ name, paintingsCollection }) {
  const firstPaintingInCollection = paintingsCollection.items[0];
  const image = firstPaintingInCollection.imageCollection.items[0];
  return (
    <div className={styles.container}>
      <Image
        src={image.url}
        alt={image.description}
        width={image.width}
        height={image.height}
        className={styles.image}
        quality={100}
      />
      <p className={styles.paintingName}>{firstPaintingInCollection.name}</p>
      <div className={styles.collectionContainer}>
        <div className={styles.left}>
          <p className={styles.collection}>Collection</p>
          <p className={styles.collectionName}>{name}</p>
        </div>

        <PrimaryButton
          href={`/collection?collection=${name}`}
          classNames={styles.button}
        >
          View other Landscapes
        </PrimaryButton>
      </div>
    </div>
  );
}
