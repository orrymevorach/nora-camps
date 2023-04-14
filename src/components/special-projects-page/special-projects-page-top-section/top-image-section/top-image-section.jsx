import Image from 'next/image';
import styles from './top-image-section.module.scss';

export default function TopImageSection({ images }) {
  return (
    <div className={styles.container}>
      {images.map(({ url, width, height, description }, index) => {
        return (
          <Image
            key={url}
            src={url}
            width={width}
            height={height}
            alt={description}
            className={styles[`image-${index + 1}`]}
          />
        );
      })}
    </div>
  );
}
