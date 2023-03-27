import FooterItems from '../footer-items/footer-items';
import Image from 'next/image';
import SocialButtons from '../social-buttons/social-buttons';
import Copyright from '../copyright/copyright';
import ncLogo from 'images/NC.png';
import styles from './desktop-footer.module.scss';

export default function DesktopFooter() {
  return (
    <>
      <FooterItems />
      <div className={styles.logos}>
        <div className={styles.footerLogoBackground}>
          <Image src={ncLogo} alt='footer logo' />
        </div>
        <SocialButtons />
        <div className={styles.copyright}>
          <Copyright />
        </div>
      </div>
    </>
  );
}
