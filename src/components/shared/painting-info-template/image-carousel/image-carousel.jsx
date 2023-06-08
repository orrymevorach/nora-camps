import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./image-carousel.module.scss";
import clsx from "clsx";

export default function ImageCarousel({
  images,
  hasBackground = true,
  classNames,
}) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const { url, width, height, description } = currentImage;
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    const updateCurrentImage = () => {
      setCurrentImage(images[0]);
    };
    if (images) {
      updateCurrentImage();
    }
  }, [images]);
  return (
    <div className={classNames}>
      <Image
        src={url}
        width={width}
        height={height}
        alt={description}
        quality={100}
        className={clsx(styles.image, hasBackground && styles.background)}
        priority
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
                  alt={image.alt || "image carousel"}
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
