import RichText from '@/components/shared/rich-text/rich-text';
import TopImageSection from '@/components/special-projects-page/special-projects-page-top-section/top-image-section/top-image-section';
import styles from './about-the-author.module.scss';

export default function AboutTheAuthor({ description, imageCollection }) {
  return (
    <div className={styles.aboutTheAuthorContainer}>
      <RichText json={description.json} classNames={styles.richText} />
      <TopImageSection images={imageCollection.items} />
    </div>
  );
}
