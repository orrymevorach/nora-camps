import Link from 'next/link';
import RightArrow from '@/components/shared/svg/RightArrow/RightArrow';
import NoraLogo from 'svg/NoraLogo/NoraLogo';
import styles from './nav.module.scss';

export default function Nav() {
  const navLinks = ['Home', 'Paintings', 'Exhibitions', 'About', 'Contact'];

  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        <NoraLogo />
        <nav className={styles.navigation}>
          <ul className={styles.navUl}>
            {navLinks.map(link => {
              return (
                <li key={link} className={styles.navLi}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className={styles.nextLink}
                  >
                    {link}
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
