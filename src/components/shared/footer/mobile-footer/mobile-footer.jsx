import FooterItems from "../footer-items";
import SocialButtons from "../social-buttons";
import Copyright from "../copyright";
import styles from "./mobile-footer.module.scss";
import MainLogo from "svg/main-logo";

export default function MobileFooter() {
  return (
    <>
      <div className={styles.logos}>
        <MainLogo />
        <SocialButtons />
      </div>
      <FooterItems />
      <Copyright classNames={styles.copyrightPosition} />
    </>
  );
}
