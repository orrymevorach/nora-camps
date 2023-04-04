import { formatPrice } from '@/utils/string-utils';
import Image from 'next/image';
import Link from 'next/link';
import styles from './painting-tile.module.scss';

export default function PaintingTile(props) {
  const { name, imageCollection, price } = props;
  const firstImage = imageCollection.items[0];
  return (
    <Link
      href={{
        pathname: `/painting/${name}`,
      }}
      className={styles.paintingTile}
    >
      <div className={styles.imageContainer}>
        <Image
          src={firstImage.url}
          alt={firstImage.description}
          width={firstImage.width}
          height={firstImage.height}
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.paintingName}>{name}</p>
        <p className={styles.price}>{formatPrice(price)}</p>
      </div>
    </Link>
  );
}