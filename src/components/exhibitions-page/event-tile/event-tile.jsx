import Image from "next/image";
import styles from "./event-tile.module.scss";
import PrimaryButton from "@/components/shared/primary-button";
import EventDateRange from "@/components/shared/event-date-range";
import clsx from "clsx";

export default function EventTile({
  name,
  imageCollection,
  startDate,
  endDate,
  index,
}) {
  const { url, width, height, description } = imageCollection.items[0];
  return (
    <div className={styles.eventTileContainer}>
      <div className={styles.columnOne}>
        <p className={styles.comingUp}>Coming up</p>
        <p className={styles.name}>{name}</p>
        <EventDateRange startDate={startDate} endDate={endDate} />
        <PrimaryButton href={`/event/${name}`} classNames={styles.button}>
          Learn more
        </PrimaryButton>
      </div>
      <Image
        src={url}
        width={width}
        height={height}
        alt={description}
        className={clsx(styles.columnTwo, styles.image)}
        priority={index === 0}
        quality={50}
      />
    </div>
  );
}
