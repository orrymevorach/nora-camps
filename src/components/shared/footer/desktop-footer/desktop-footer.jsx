import FooterItems from "../footer-items";
import SocialButtons from "../social-buttons";
import Copyright from "../copyright";
import styles from "./desktop-footer.module.scss";
import MainLogo from "svg/main-logo";

export default function DesktopFooter() {
  return (
    <>
      <FooterItems />
      <div className={styles.logos}>
        <MainLogo />
        <SocialButtons />
        <Copyright classNames={styles.copyrightPosition} />
      </div>
    </>
  );
}
