import FooterItems from "../footer-items";
import SocialButtons from "../social-buttons";
import Copyright from "../copyright";
import styles from "./mobile-footer.module.scss";
import logo from "images/logo.png";
import Image from "next/image";

export default function MobileFooter() {
  return (
    <>
      <div className={styles.logos}>
        <Image src={logo} className={styles.logo} alt="Main logo" />
        <SocialButtons />
      </div>
      <FooterItems />
      <Copyright classNames={styles.copyrightPosition} />
    </>
  );
}
