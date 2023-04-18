import RichText from "@/components/shared/rich-text/rich-text";
import styles from "./special-projects-page-top-section.module.scss";
import TopImageSection from "./top-image-section";
import BottomImageSection from "./bottom-image-section";

export default function SpecialProjectsPageTopSection({
  topImagesCollection,
  heading,
  description,
  bottomLeftImagesCollection,
  bottomRightImagesCollection,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <TopImageSection images={topImagesCollection.items} />
        <p className={styles.heading}>{heading}</p>
        <RichText json={description.json} classNames={styles.richText} />
      </div>
      <div className={styles.row}>
        <BottomImageSection images={bottomLeftImagesCollection.items} />
        <BottomImageSection images={bottomRightImagesCollection.items} />
      </div>
    </div>
  );
}
