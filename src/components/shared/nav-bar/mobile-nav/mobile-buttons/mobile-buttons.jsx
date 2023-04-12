import Hamburger from '@/components/shared/svg/hamburger';
import styles from './mobile-buttons.module.scss';
import MagnifyingGlass from 'svg/magnifying-glass';

export default function MobileButtons({ toggles }) {
  const { toggleMobileNavView, toggleSearchBar } = toggles;

  return (
    <div className={styles.mobileButtons}>
      <button
        onClick={() => toggleSearchBar()}
        className={styles.magnifyingGlass}
      >
        <MagnifyingGlass />
      </button>
      <button onClick={() => toggleMobileNavView()}>
        <Hamburger />
      </button>
    </div>
  );
}
