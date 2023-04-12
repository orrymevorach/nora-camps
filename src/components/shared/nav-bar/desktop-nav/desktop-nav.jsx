import NavItems from '../nav-items/nav-items';
import { clsx } from 'clsx';
import styles from '../nav-bar.module.scss';
import MagnifyingGlass from 'svg/magnifying-glass';
import PrimaryButton from '@/components/shared/primary-button';

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
      <PrimaryButton href='/mail' classNames={styles.nextLink}>
        Join the Email List
      </PrimaryButton>
    </>
  );
}
