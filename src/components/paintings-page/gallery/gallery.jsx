import styles from './gallery.module.scss';
import PaintingTile from '@/components/paintings-page/painting-tile';

export default function PaintingGallery({ items = [] }) {
  return (
    <ul className={styles.columnGallery}>
      {items.map(item => {
        return (
          <li key={item.name} className={styles.listItem}>
            <PaintingTile {...item} />
          </li>
        );
      })}
    </ul>
  );
}
