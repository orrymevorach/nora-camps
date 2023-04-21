import NavItems from "../nav-items/nav-items";
import styles from "../nav-bar.module.scss";
import MagnifyingGlass from "svg/magnifying-glass";
import PrimaryButton from "@/components/shared/primary-button";
import { useRouter } from "next/router";

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
      <PrimaryButton href="/mail" dark={!!route === "/mail"}>
        Join the Email List
      </PrimaryButton>
    </>
  );
}
