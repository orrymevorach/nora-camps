import Facebook from '@/components/shared/svg/face';
import Instagram from '@/components/shared/svg/insta';
import styles from './social-buttons.module.scss';

export default function SocialButtons() {
  return (
    <div className={styles.container}>
      <Facebook />
      <Instagram />
    </div>
  );
}
