import FooterItems from '../footer-items';
import SocialButtons from '../social-buttons';
import Copyright from '../copyright';
import styles from './desktop-footer.module.scss';
import SmallLogo from '../small-logo/small-logo';

export default function DesktopFooter() {
  return (
    <>
      <FooterItems />
      <div className={styles.logos}>
        <SmallLogo />
        <SocialButtons />
        <div className={styles.copyright}>
          <Copyright />
        </div>
      </div>
    </>
  );
}
