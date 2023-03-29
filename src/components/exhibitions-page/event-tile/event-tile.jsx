import Image from 'next/image';
import styles from './event-tile.module.scss';
import PrimaryButton from '@/components/shared/primary-button';
import { formatDate } from '@/utils/string-utils';

export default function EventTile({
  name,
  imageCollection,
  startDate,
  endDate,
}) {
  const { url, width, height, description } = imageCollection.items[0];
  return (
    <div className={styles.eventTileContainer}>
      <div className={styles.column}>
        <p className={styles.comingUp}>Coming up</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.date}>
          {startDate && <span>{formatDate(startDate)}</span>}
          {endDate && (
            <>
              {' '}
              - <br /> <span>{formatDate(endDate)}</span>
            </>
          )}
        </p>
        <PrimaryButton href={`/event/${name}`} classNames={styles.button}>
          Learn more
        </PrimaryButton>
      </div>
      <Image
        src={url}
        width={width}
        height={height}
        alt={description}
        className={styles.column}
      />
    </div>
  );
}
