import Image from 'next/image';
import { useState } from 'react';
import styles from './image-carousel.module.scss';
import clsx from 'clsx';

export default function ImageCarousel({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const { url, width, height, alt } = currentImage;
  const hasMultipleImages = images.length > 1;

  return (
    <div>
      <Image
        src={url}
        width={width}
        height={height}
        alt={alt}
        quality={100}
        className={styles.image}
      />
      {hasMultipleImages && (
        <div className={styles.imageSelectionContainer}>
          {images.map(image => {
            const isCurrentImage = currentImage.url === image.url;
            return (
              <button
                key={image.url}
                onClick={() => setCurrentImage(image)}
                className={clsx(
                  styles.imageSelectionTile,
                  isCurrentImage && styles.active
                )}
              >
                <Image
                  src={image.url}
                  width={100}
                  height={100}
                  alt={image.alt}
                  quality={50}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
