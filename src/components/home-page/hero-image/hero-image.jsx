import RichText from "@/components/shared/rich-text/rich-text";
import styles from "./hero-image.module.scss";
import { BLOCKS } from "@contentful/rich-text-types";

export default function HeroImage({ heading, description, backgroundImage }) {
  const richTextConfig = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={styles.description}>{children}</p>
      ),
    },
  };
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage.url})` }}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <RichText json={description.json} config={richTextConfig} />
      </div>
    </div>
  );
}
