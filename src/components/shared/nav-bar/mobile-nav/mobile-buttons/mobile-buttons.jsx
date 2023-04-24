import Hamburger from "@/components/shared/svg/ham";
import styles from "./mobile-buttons.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileButtons({ toggles }) {
  const { toggleMobileNavView, toggleSearchBar } = toggles;

  return (
    <div className={styles.mobileButtons}>
      <button
        onClick={() => toggleSearchBar()}
        className={styles.magnifyingGlass}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <button onClick={() => toggleMobileNavView()}>
        <Hamburger />
      </button>
    </div>
  );
}
