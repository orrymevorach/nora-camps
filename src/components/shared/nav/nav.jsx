import Link from 'next/link';
import RightArrow from 'svg/RightArrow/RightArrow';
import NoraLogo from 'svg/NoraLogo/NoraLogo';
import styles from './nav.module.scss';

export default function Nav() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Paintings', href: '/paintings' },
    { label: 'Exhibitions', href: '/exhibitions' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        <Link href="/">
          <NoraLogo />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.navUl}>
            {navLinks.map(link => {
              return (
                <li key={link.label} className={styles.navLi}>
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
