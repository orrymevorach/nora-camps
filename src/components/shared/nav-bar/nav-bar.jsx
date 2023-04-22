import Link from "next/link";
import { clsx } from "clsx";
import { useState } from "react";
import { useWindowSize } from "@/hooks";
import Search from "../search-bar/search-bar";
import DesktopNav from "./desktop-nav/desktop-nav";
import MobileNav from "./mobile-nav/mobile-nav";
import MainLogo from "svg/main-logo";
import styles from "./nav-bar.module.scss";

export default function NavBar() {
  const [searchBarView, setSearchBarView] = useState(false);
  const [isMobileNavOpen, setMobileNavView] = useState(false);
  const { device, isMobile } = useWindowSize();

  if (!device) return;

  const toggleSearchBar = () => {
    setSearchBarView(showSearchBar => !showSearchBar);
    setMobileNavView(false);
  };

  const toggleMobileNavView = () => {
    setMobileNavView(showNav => !showNav);
    setSearchBarView(false);
  };

  return (
    <div
      className={clsx(
        styles.container,
        isMobileNavOpen ? styles.mobileNavActive : ""
      )}
    >
      <nav className={clsx(styles.navigation)}>
        <Link href="/" onClick={() => setMobileNavView(false)}>
          <MainLogo classNames={styles.logo} />
        </Link>
        {!isMobile ? (
          <DesktopNav
            toggleSearchBar={toggleSearchBar}
            toggleMobileNavView={toggleMobileNavView}
          />
        ) : (
          <MobileNav
            toggleMobileNavView={toggleMobileNavView}
            toggleSearchBar={toggleSearchBar}
            mobileNavView={isMobileNavOpen}
          />
        )}
        {searchBarView && <Search setSearchBarView={setSearchBarView}/>}
      </nav>
    </div>
  );
}
