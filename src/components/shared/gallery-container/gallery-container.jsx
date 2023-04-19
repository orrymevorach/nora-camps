import styles from "./gallery-container.module.scss";
import { PAGES } from "@/utils/contentful";
import EventGallery from "@/components/exhibitions-page/gallery";
import PaintingGallery from "@/components/paintings-page/gallery";
import SpecialProjectGallery from "@/components/special-projects-page/gallery";
import CollectionsGallery from "@/components/home-page/gallery";

const { PAINTINGS, EXHIBITIONS, SPECIAL_PROJECTS, HOME, ABOUT } = PAGES;

const mapPageToGalleryComponent = {
  [PAINTINGS]: PaintingGallery,
  [EXHIBITIONS]: EventGallery,
  [SPECIAL_PROJECTS]: SpecialProjectGallery,
  [HOME]: CollectionsGallery,
  [ABOUT]: SpecialProjectGallery,
};

export default function Gallery(props) {
  const { page } = props;
  const GalleryComponent = mapPageToGalleryComponent[page];

  return (
    <div className={styles.container}>
      <GalleryComponent {...props} />
    </div>
  );
}
