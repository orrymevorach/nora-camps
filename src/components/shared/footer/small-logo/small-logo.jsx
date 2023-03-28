import Image from 'next/image';
import ncLogo from 'images/NC.png';
import styles from './small-logo.module.scss';

export default function SmallLogo() {
  return (
    <div className={styles.footerLogoBackground}>
      <Image className={styles.noraLogo} src={ncLogo} alt='footer logo' />
    </div>
  );
}
