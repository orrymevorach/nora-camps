import styles from './gallery.module.scss';
import PaintingTile from '../painting-tile';

export default function Gallery(props) {
  const { items } = props;
  return (
    <div className={styles.container}>
      <ul className={styles.gallery}>
        {items.map(item => {
          return (
            <li key={item.name} className={styles.listItem}>
              <PaintingTile {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
