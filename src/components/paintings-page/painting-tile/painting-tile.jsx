import { formatPrice } from "@/utils/string-utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./painting-tile.module.scss";
import clsx from "clsx";

export default function PaintingTile(props) {
  const { name, imageCollection, price, customStylesObject = '' } = props;
  const firstImage = imageCollection.items[0];

  return (
    <Link
      href={{
        pathname: `/painting/${name}`,
      }}
      className={styles.paintingTile}
    >
      <div
        className={
          clsx(styles.imageContainer, customStylesObject.imageContainer)
        }
      >
        <Image
          src={firstImage.url}
          alt={firstImage.description}
          width={firstImage.width}
          height={firstImage.height}
        />
      </div>
      <div
        className={
          clsx(styles.textContainer, customStylesObject.textContainer)
        }
      >
        <p className={styles.paintingName}>{name}</p>
        <p className={styles.price}>{formatPrice(price)}</p>
      </div>
    </Link>
  );
}
