import { useRouter } from 'next/router';
import NavItems from '../nav-items/nav-items';
import styles from '../nav-bar.module.scss';
import MagnifyingGlass from 'svg/magnifying-glass';
import PrimaryButton from '@/components/shared/primary-button';

export default function DesktopNav({ toggleMobileNavView, toggleSearchBar }) {
  const { route } = useRouter();

  return (
    <>
      <NavItems toggles={{ toggleMobileNavView }} />
      <button
        onClick={() => toggleSearchBar()}
        className={styles.magnifyingGlass}
      >
        <MagnifyingGlass />
      </button>
      <PrimaryButton
        href='/mail'
        classNames={route === '/mail' && styles.joinEmailButtonActive}
      >
        Join the Email List
      </PrimaryButton>
    </>
  );
}
