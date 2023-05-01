import NavItems from "../nav-items/nav-items";
import styles from "../nav-bar.module.scss";
import PrimaryButton from "@/components/shared/primary-button";
import { useRouter } from "next/router";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DesktopNav({ toggleMobileNavView, toggleSearchBar }) {
  const { route } = useRouter();
  return (
    <>
      <NavItems toggles={{ toggleMobileNavView }} />
      <button
        onClick={() => toggleSearchBar()}
        className={styles.magnifyingGlass}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <PrimaryButton href="/mail" dark={route === "/mail"}>
        Stay Connected
      </PrimaryButton>
    </>
  );
}
