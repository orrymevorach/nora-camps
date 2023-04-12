import CollectionTile from '@/components/home-page/collection-tile/collection-tile';
import HeroImage from '@/components/home-page/hero-image/hero-image';
import GalleryContainer from '@/components/shared/gallery-container';
import SpecialProjectsPageTopSection from '@/components/special-projects-page/special-projects-page-top-section';
import { CONTENT_MODELS } from '@/utils/contentful';

const { HERO_IMAGE, COLLECTION, GALLERY, SPECIAL_PROJECTS_TOP_SECTION } =
  CONTENT_MODELS;
const mapContentModelToComponent = {
  [HERO_IMAGE]: HeroImage,
  [COLLECTION]: CollectionTile,
  [GALLERY]: GalleryContainer,
  [SPECIAL_PROJECTS_TOP_SECTION]: SpecialProjectsPageTopSection,
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
