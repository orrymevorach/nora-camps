import Facebook from 'svg/Facebook';
import Instagram from 'svg/Instagram';
import styles from './social-buttons.module.scss';

export default function SocialButtons() {
  return (
    <div className={styles.container}>
      <Facebook />
      <Instagram />
    </div>
  );
}
