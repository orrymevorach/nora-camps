import Link from 'next/link';
import Image from 'next/image';
import ncLogo from 'images/NC.png';
import styles from './Footer.module.scss';
import SocialButtons from './social-buttons/social-buttons';
import FooterItems from './footer-items/footer-items';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <nav className={styles.footerNav}>
        <FooterItems />
        <div className={styles.footerLine} />
        <div className={styles.footerLogoBackground}>
          <Image src={ncLogo} alt='footer logo' />
        </div>
        <SocialButtons />
      </nav>
    </footer>
  );
}
