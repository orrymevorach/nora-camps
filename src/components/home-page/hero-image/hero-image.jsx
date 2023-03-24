import styles from './hero-image.module.scss';

export default function HeroImage({ heading, description, backgroundImage }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage.url})` }}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>{heading}</h1>
      </div>
    </div>
  );
}
