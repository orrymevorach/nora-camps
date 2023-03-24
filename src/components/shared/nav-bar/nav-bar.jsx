import Link from 'next/link';
import RightArrow from '@/components/shared/svg/right-arrow/right-arrow';
import NoraLogo from '@/components/shared/svg/nora-logo/nora-logo';
import MagGlass from '@/components/shared/svg/magnifying-glass-large';
import styles from './nav-bar.module.scss';
import Hamburger from '@/components/shared/svg/hamburger';
import X from '@/components/shared/svg/close-button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useWindowSize } from '@/hooks';
import Search from '../search/search-bar';

export default function NavBar() {
  const [mobileNavView, setMobileNavView] = useState(false);
  const [searchBarView, setSearchBarView] = useState(false);
  const { route } = useRouter();
  const { device } = useWindowSize();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Paintings', href: '/paintings' },
    { label: 'Exhibitions', href: '/exhibitions' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

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
      className={`${styles.container} ${
        mobileNavView ? styles.mobileNavActive : ''
      }`}
    >
      <div className={styles.maxWidth}>
        <Link href='/' onClick={() => setMobileNavView(false)}>
          <NoraLogo />
        </Link>
        {device && device === 'mobile' && (
          <div className={styles.mobileButtons}>
            <button onClick={() => toggleSearchBar()}>
              <MagGlass />
            </button>
            <button onClick={() => toggleMobileNavView()}>
              <Hamburger />
            </button>
          </div>
        )}
        <nav
          className={`${styles.navigation} ${
            mobileNavView ? styles.show : styles.hide
          }`}
        >
          {device && device === 'mobile' && (
            <div className={styles.x}>
              <button onClick={() => toggleMobileNavView()}>
                <X />
              </button>
            </div>
          )}
          <ul className={styles.navUl}>
            {navLinks.map(link => {
              return (
                <li
                  key={link.label}
                  className={styles.navLi}
                  onClick={() => toggleMobileNavView()}
                >
                  <Link
                    href={link.href}
                    className={`${styles.nextLink} ${
                      route === link.href ? styles.activeLink : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {device && device !== 'mobile' && (
            <button onClick={() => toggleSearchBar()}>
              <MagGlass />
            </button>
          )}
          <Link
            href='/mail'
            className={`${styles.joinEmailList} ${styles.nextLink}`}
          >
            <p>Join the Email List</p>
            <RightArrow />
          </Link>
        </nav>
      </div>
      {searchBarView && <Search />}
    </div>
  );
}
