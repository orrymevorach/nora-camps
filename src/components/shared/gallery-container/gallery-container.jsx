import styles from './gallery-container.module.scss';
import { CONTENT_MODELS } from '@/utils/contentful';
import EventGallery from '@/components/exhibitions-page/gallery';
import PaintingGallery from '@/components/paintings-page/gallery';
import SpecialProjectGallery from '@/components/special-projects-page/gallery';

const { EVENT, PAINTING, SPECIAL_PROJECT } = CONTENT_MODELS;

const mapGalleryTypeToComponent = {
  [PAINTING]: PaintingGallery,
  [EVENT]: EventGallery,
  [SPECIAL_PROJECT]: SpecialProjectGallery,
};

export default function Gallery(props) {
  const { items } = props;
  const galleryType = items[0].__typename;
  const Component = mapGalleryTypeToComponent[galleryType];

  return (
    <div className={styles.container}>
      <Component {...props} />
    </div>
  );
}
