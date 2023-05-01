import DesktopFooter from "./desktop-footer";
import MobileFooter from "./mobile-footer";
import { useWindowSize } from "@/hooks";
import styles from "./footer.module.scss";

export default function Footer() {
  const { isMobile } = useWindowSize();
  return (
    <footer className={styles.container}>
      <nav className={styles.footerNav}>
        {!isMobile ? <DesktopFooter /> : <MobileFooter />}
      </nav>
    </footer>
  );
}
