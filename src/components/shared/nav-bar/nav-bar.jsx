import Link from "next/link";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks";
import SearchBar from "../search-bar/search-bar";
import DesktopNav from "./desktop-nav/desktop-nav";
import MobileNav from "./mobile-nav/mobile-nav";
import logo from "images/logo.png";
import styles from "./nav-bar.module.scss";
import Image from "next/image";

export default function NavBar({
  paintingsAndCollections,
  isAnnouncementVisible = false,
  announcementBarRef,
}) {
  const [searchBarView, setSearchBarView] = useState(false);
  const [isMobileNavOpen, setMobileNavView] = useState(false);
  const [marginTop, setMarginTop] = useState("0px");
  const { device, isMobile } = useWindowSize();

  // create spacing to make room for announcement bar
  useEffect(() => {
    if (announcementBarRef?.current) {
      const announcementBarHeight = announcementBarRef.current.offsetHeight;
      setMarginTop(`${announcementBarHeight}px`);
    }
  }, [announcementBarRef?.current, isAnnouncementVisible]);

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
      style={{ top: isAnnouncementVisible ? marginTop : 0 }}
    >
      <nav className={clsx(styles.navigation)}>
        <Link href="/" onClick={() => setMobileNavView(false)}>
          <Image src={logo} className={styles.logo} alt="Main logo" />
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
            isMobileNavOpen={isMobileNavOpen}
          />
        )}
        {searchBarView && (
          <SearchBar
            setSearchBarView={setSearchBarView}
            paintingsAndCollections={paintingsAndCollections}
          />
        )}
      </nav>
    </div>
  );
}
