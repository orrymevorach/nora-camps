import Facebook from 'svg/facebook';
import Instagram from 'svg/instagram';
import styles from './social-buttons.module.scss';

export default function SocialButtons() {
  return (
    <div className={styles.container}>
      <Facebook />
      <Instagram />
    </div>
  );
}
