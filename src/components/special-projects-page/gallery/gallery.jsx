import styles from './gallery.module.scss';
import PaintingInfoTemplate, {
  THEMES,
} from '@/components/shared/painting-info-template/painting-info-template';

export default function SpecialProjectsGallery({ items = [] }) {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.name}>
            <PaintingInfoTemplate {...item} theme={THEMES.SPECIAL_PROJECT} />
          </li>
        );
      })}
    </ul>
  );
}
