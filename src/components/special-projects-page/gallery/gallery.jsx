import { isOdd } from "@/utils/string-utils";
import styles from "./gallery.module.scss";
import PaintingInfoTemplate from "@/components/shared/painting-info-template/painting-info-template";
import { PAGES } from "@/utils/contentful";
import AboutTheAuthor from "@/components/about-page/about-the-author/about-the-author";
const { SPECIAL_PROJECTS, ABOUT } = PAGES;
import clsx from "clsx";

const mapPageToComponent = {
  [SPECIAL_PROJECTS]: ({ page, item, index }) => (
    <PaintingInfoTemplate
      {...item}
      page={page}
      imageOnRightSide={isOdd(index)}
    />
  ),
  [ABOUT]: ({ page, item }) => <AboutTheAuthor page={page} {...item} />,
};
export default function SpecialProjectsGallery({ items = [], page }) {
  const Component = mapPageToComponent[page];
  const isAboutPage = page === ABOUT;
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li
            key={`gallery-${index}`}
            className={clsx(
              styles.listItem,
              isAboutPage && styles.aboutListItem
            )}
          >
            <Component page={page} index={index} item={item} />
          </li>
        );
      })}
    </ul>
  );
}
