import Link from "next/link";
import { clsx } from "clsx";
import { useState } from "react";
import { useWindowSize } from "@/hooks";
import SearchBar from "../search-bar/search-bar";
import DesktopNav from "./desktop-nav/desktop-nav";
import MobileNav from "./mobile-nav/mobile-nav";
import logo from "images/logo.png";
import styles from "./nav-bar.module.scss";
import Image from "next/image";

export default function NavBar({ paintingsAndCollections }) {
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
          <Image src={logo} className={styles.logo} />
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
