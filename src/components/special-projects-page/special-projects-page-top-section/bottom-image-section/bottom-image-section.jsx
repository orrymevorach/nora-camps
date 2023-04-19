import styles from "./bottom-image-section.module.scss";
import Image from "next/image";

export default function BottomImageSection({ images }) {
  const [firstImage, secondImage, thirdImage] = images;
  return (
    <div className={styles.bottomImageSectionContainer}>
      <div className={styles.topRow}>
        <Image
          src={firstImage.url}
          alt={firstImage.description}
          width={firstImage.width}
          height={firstImage.height}
        />
        <Image
          src={secondImage.url}
          alt={secondImage.description}
          width={secondImage.width}
          height={secondImage.height}
        />
      </div>
      <Image
        src={thirdImage.url}
        alt={thirdImage.description}
        width={thirdImage.width}
        height={thirdImage.height}
        className={styles.bottomImage}
      />
    </div>
  );
}
