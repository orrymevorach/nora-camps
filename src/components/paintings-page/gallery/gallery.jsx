import Wrapper from "@/components/shared/wrapper/wrapper";
import styles from "./gallery.module.scss";
import PaintingTile from "@/components/paintings-page/painting-tile";

export default function PaintingGallery({ items = [] }) {
  return (
    <Wrapper>
      <ul className={styles.columnGallery}>
        {items.map((item, index) => {
          return (
            <li key={item.name} className={styles.listItem}>
              <PaintingTile {...item} index={index} />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
