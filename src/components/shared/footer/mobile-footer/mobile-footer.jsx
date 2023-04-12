import FooterItems from '../footer-items';
import SocialButtons from '../social-buttons';
import Copyright from '../copyright';

import styles from './mobile-footer.module.scss';
import SmallLogo from '../small-logo/small-logo';

export default function MobileFooter() {
  return (
    <>
      <div className={styles.logos}>
        <SmallLogo />
        <SocialButtons />
      </div>
      <FooterItems />
      <div className={styles.copyright}>
        <Copyright />
      </div>
    </>
  );
}
