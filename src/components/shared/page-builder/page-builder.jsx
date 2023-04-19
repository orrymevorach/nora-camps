import CollectionTile from "@/components/home-page/collection-tile/collection-tile";
import HeroImage from "@/components/home-page/hero-image/hero-image";
import GalleryContainer from "@/components/shared/gallery-container";
import SpecialProjectsPageTopSection from "@/components/special-projects-page/special-projects-page-top-section";
import { CONTENT_MODELS } from "@/utils/contentful";
import PaintingInfoTemplate from "../painting-info-template/painting-info-template";
import AboutTheAuthor from "@/components/about-page/about-the-author";
import RichText from "../rich-text/rich-text";

const {
  HERO_IMAGE,
  COLLECTION,
  GALLERY,
  SPECIAL_PROJECTS_TOP_SECTION,
  PAINTING,
  ABOUT_THE_AUTHOR,
  RICH_TEXT,
  ABOUT_PAGE_TOP_SECTION,
} = CONTENT_MODELS;

const mapContentModelToComponent = {
  [HERO_IMAGE]: HeroImage,
  [COLLECTION]: CollectionTile,
  [GALLERY]: GalleryContainer,
  [SPECIAL_PROJECTS_TOP_SECTION]: SpecialProjectsPageTopSection,
  [PAINTING]: PaintingInfoTemplate,
  [ABOUT_THE_AUTHOR]: AboutTheAuthor,
  [RICH_TEXT]: ({ richText }) => <RichText json={richText.json} />,
  [ABOUT_PAGE_TOP_SECTION]: PaintingInfoTemplate,
};

export default function PageBuilder({ entries = [], page }) {
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
              page={page}
            />
          );
        }
      })}
    </>
  );
}
