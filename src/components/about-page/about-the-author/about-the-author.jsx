import RichText from '@/components/shared/rich-text/rich-text';
import TopImageSection from '@/components/special-projects-page/special-projects-page-top-section/top-image-section/top-image-section';
import styles from './about-the-author.module.scss';
import { richTextConfig } from '@/components/shared/painting-info-template/rich-text-config';

export default function AboutTheAuthor({ description, imageCollection }) {
  return (
    <div className={styles.aboutTheAuthorContainer}>
      <RichText
        json={description.json}
        config={richTextConfig}
        classNames={styles.richText}
      />
      <TopImageSection images={imageCollection.items} />
    </div>
  );
}
