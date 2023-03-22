import { useWindowSize } from '@/hooks';
import Link from 'next/link';
import RightArrow from 'svg/RightArrow/RightArrow';
import NoraLogo from 'svg/NoraLogo/NoraLogo';
import MagGlass from 'svg/MagGlass';
import styles from './nav.module.scss';
import Hamburger from 'svg/Hamburger';
import X from 'svg/X';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Nav() {
  const [hamToggle, setHamToggle] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Paintings', href: '/paintings' },
    { label: 'Exhibitions', href: '/exhibitions' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const { device } = useWindowSize();

  const toggleHamburger = () => {
    setHamToggle(showNav => !showNav);
  };

  useEffect(() => {
    const resetToggles = () => {
      setHamToggle(false);
    };
    resetToggles();
  }, [device]);

  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        <Link href='/' onClick={() => setHamToggle(false)}>
          <NoraLogo />
        </Link>
        <div className={styles.mobileView}>
          <MagGlass />
          <button onClick={() => toggleHamburger()}>
            <Hamburger />
          </button>
        </div>
        <nav
          className={`${styles.navigation} ${
            hamToggle ? styles.show : styles.hide
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
