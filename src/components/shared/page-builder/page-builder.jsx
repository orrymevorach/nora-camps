import CollectionTile from '@/components/home-page/collection-tile/collection-tile';
import HeroImage from '@/components/home-page/hero-image/hero-image';
import GalleryContainer from '@/components/shared/gallery-container';
import { CONTENT_MODELS } from '@/utils/contentful';

const { HERO_IMAGE, COLLECTION, GALLERY } = CONTENT_MODELS;
const mapContentModelToComponent = {
  [HERO_IMAGE]: HeroImage,
  [COLLECTION]: CollectionTile,
  [GALLERY]: GalleryContainer,
};

export default function PageBuilder({ entries = [] }) {
  return (
    <>
      {entries.map((contentEntryData, index) => {
        const Component =
          mapContentModelToComponent[contentEntryData.contentModel];
        if (Component) {
          return (
            <Component
              key={`${contentEntryData.contentModel}-${index}`}
              {...contentEntryData}
            />
          );
        }
      })}
    </>
  );
}
