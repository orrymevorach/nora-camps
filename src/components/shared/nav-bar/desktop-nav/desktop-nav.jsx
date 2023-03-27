import Link from 'next/link';
import RightArrow from 'svg/right-arrow/right-arrow';
import NavItems from '../nav-items/nav-items';
import { clsx } from 'clsx';
import styles from '../nav-bar.module.scss';
import MagnifyingGlass from 'svg/magnifying-glass';

export default function DesktopNav({ toggleMobileNavView, toggleSearchBar }) {
  return (
    <>
      <NavItems toggles={{ toggleMobileNavView }} />
      <button
        onClick={() => toggleSearchBar()}
        className={styles.magnifyingGlass}
      >
        <MagnifyingGlass />
      </button>
      <Link
        href='/mail'
        className={clsx(styles.joinEmailList, styles.nextLink)}
      >
        <p>Join the Email List</p>
        <RightArrow />
      </Link>
    </>
  );
}
