import { isOdd } from '@/utils/string-utils';
import styles from './gallery.module.scss';
import PaintingInfoTemplate, {
  THEMES,
} from '@/components/shared/painting-info-template/painting-info-template';

export default function SpecialProjectsGallery({ items = [] }) {
  return (
    <ul>
      {items.map((item, index) => {
        const imageOnRightSide = isOdd(index);
        return (
          <li key={item.name} className={styles.listItem}>
            <PaintingInfoTemplate
              {...item}
              theme={THEMES.SPECIAL_PROJECT}
              imageOnRightSide={imageOnRightSide}
            />
          </li>
        );
      })}
    </ul>
  );
}
