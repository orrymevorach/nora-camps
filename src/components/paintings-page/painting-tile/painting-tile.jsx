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
  } = props;
  const firstImage = imageCollection.items[0];
  const { query } = useRouter();
  const hasQuery = (query && query.collection) || "All";

  return (
    <Link
      href={{
        pathname: `/painting/${name}`,
        query: {
          location: hasQuery,
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
        />
      </div>
      <div
        className={clsx(styles.textContainer, customStylesObject.textContainer)}
      >
        <div>
          <p className={styles.paintingName}>{name}</p>
          <p className={styles.paintingName}>{dimensions}</p>
        </div>

        <p className={styles.price}>{formatPrice(price)}</p>
      </div>
    </Link>
  );
}
