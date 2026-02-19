import { formatPrice } from "@/utils/string-utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./painting-tile.module.scss";
import clsx from "clsx";
import { useRouter } from "next/router";
import { PAINTINGS_SCROLL_POSITION_KEY } from "@/pages/paintings";

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

  // Set scroll position. When user hits back button from painting page, we want to restore their scroll position on the paintings page. We use sessionStorage to store the scroll position because it persists across page navigations but is cleared when the tab is closed.
  const handleTileClick = () => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(
      PAINTINGS_SCROLL_POSITION_KEY,
      String(window.scrollY)
    );
  };

  return (
    <Link
      href={{
        pathname: `/painting/${name}`,
        query: {
          collection: query.collection,
        },
      }}
      className={styles.paintingTile}
      onClick={handleTileClick}
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
