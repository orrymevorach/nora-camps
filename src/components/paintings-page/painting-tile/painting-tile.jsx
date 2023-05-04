import { formatPrice } from "@/utils/string-utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./painting-tile.module.scss";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function PaintingTile(props) {
  const {
    name,
    imageCollection,
    price,
    dimensions,
    customStylesObject = "",
    index,
    status,
  } = props;
  const firstImage = imageCollection.items[0];
  const { query } = useRouter();
  const showStatus = status && status !== "Available";

  return (
    <Link
      href={{
        pathname: `/painting/${name}`,
        query: {
          collection: query.collection,
        },
      }}
      className={styles.paintingTile}
    >
      <div
        className={clsx(
          styles.imageContainer,
          customStylesObject.imageContainer
        )}
      >
        <Image
          src={firstImage.url}
          alt={firstImage.description}
          width={firstImage.width}
          height={firstImage.height}
          priority={index === 0 || index === 1}
          placeholder="blur"
          blurDataURL={firstImage.url}
        />
      </div>
      <div
        className={clsx(styles.textContainer, customStylesObject.textContainer)}
      >
        <div>
          <p className={styles.paintingName}>{name}</p>
          <p className={styles.paintingName}>{dimensions}</p>
          {showStatus && <p className={styles.status}>{status}</p>}
        </div>

        <p className={styles.price}>{formatPrice(price)}</p>
      </div>
    </Link>
  );
}
