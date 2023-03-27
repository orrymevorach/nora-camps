import Link from 'next/link';
import { clsx } from 'clsx';
import NoraLogo from 'svg/nora-logo/nora-logo';
import styles from './nav-bar.module.scss';
import { useState } from 'react';
import { useWindowSize } from '@/hooks';
import Search from '../search/search-bar';
import DesktopNav from './desktop-nav/desktop-nav';
import MobileNav from './mobile-nav/mobile-nav';

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
    <nav
      className={clsx(
        styles.navigation,
        isMobileNavOpen ? styles.mobileNavActive : ''
      )}
    >
      <Link href='/' onClick={() => setMobileNavView(false)}>
        <NoraLogo />
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
      {searchBarView && <Search />}
    </nav>
  );
}
