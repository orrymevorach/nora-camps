import HeroImage from '@/components/home-page/hero-image/hero-image';
import { CONTENT_MODELS } from '@/utils/contentful';

const { HERO_IMAGE } = CONTENT_MODELS;
const mapContentModelToComponent = {
  [HERO_IMAGE]: HeroImage,
};

export default function PageBuilder({ entries = [] }) {
  return (
    <>
      {entries.map((contentEntryData, index) => {
        const Component =
          mapContentModelToComponent[contentEntryData.contentModel];
        return (
          <Component
            key={`${contentEntryData.contentModel}-${index}`}
            {...contentEntryData}
          />
        );
      })}
    </>
  );
}
