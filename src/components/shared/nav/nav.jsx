import Link from 'next/link';
import RightArrow from 'svg/RightArrow/RightArrow';
import NoraLogo from 'svg/NoraLogo/NoraLogo';
import MagGlass from 'svg/MagGlass';
import styles from './nav.module.scss';
import Hamburger from 'svg/Hamburger';
import X from 'svg/X';
import { useState } from 'react';

export default function Nav() {
  const [mobileNavView, setMobileNavView] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Paintings', href: '/paintings' },
    { label: 'Exhibitions', href: '/exhibitions' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleMobileNavView = () => {
    setMobileNavView(showNav => !showNav);
  };

  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        <Link href='/' onClick={() => setMobileNavView(false)}>
          <NoraLogo />
        </Link>
        <div className={styles.mobileButtons}>
          <MagGlass />
          <button onClick={() => toggleMobileNavView()}>
            <Hamburger />
          </button>
        </div>
        <nav
          className={`${styles.navigation} ${
            mobileNavView ? styles.show : styles.hide
          }`}
        >
          <div className={styles.x}>
            <button onClick={() => toggleHamburger()}>
              <X />
            </button>
          </div>
          <ul className={styles.navUl}>
            {navLinks.map(link => {
              return (
                <li
                  key={link.label}
                  className={styles.navLi}
                  onClick={() => toggleHamburger()}
                >
                  <Link href={link.href} className={styles.nextLink}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className={styles.joinEmailListButton}>
            <p>Join the Email List</p>
            <RightArrow />
          </button>
        </nav>
      </div>
    </div>
  );
}
