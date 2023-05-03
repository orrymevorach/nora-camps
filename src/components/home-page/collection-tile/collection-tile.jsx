import Image from "next/image";
import styles from "./collection-tile.module.scss";
import PrimaryButton from "@/components/shared/primary-button/primary-button";

export default function CollectionTile({ name, paintingTile }) {
  const image = paintingTile?.imageCollection?.items[0];
  return (
    <div className={styles.container}>
      {image && (
        <Image
          src={image.url}
          alt={image.description}
          width={image.width}
          height={image.height}
          className={styles.image}
          quality={100}
        />
      )}

      {paintingTile?.name && (
        <p className={styles.paintingName}>{paintingTile.name}</p>
      )}
      <div className={styles.collectionContainer}>
        <div className={styles.left}>
          <p className={styles.collection}>Collection</p>
          <p className={styles.collectionName}>{name}</p>
        </div>

        <PrimaryButton
          href={{
            pathname: "/paintings",
            query: {
              collection: name,
            },
          }}
          classNames={styles.button}
        >
          View more
        </PrimaryButton>
      </div>
    </div>
  );
}
