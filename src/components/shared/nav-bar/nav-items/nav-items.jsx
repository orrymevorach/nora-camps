import Link from "next/link";
import { useRouter } from "next/router";
import { clsx } from "clsx";
import CloseButton from "../../svg/close-button";
import styles from "./nav-items.module.scss";
import { useWindowSize } from "@/hooks";
import PrimaryButton from "@/components/shared/primary-button";

export default function NavItems({ toggles }) {
  const { toggleMobileNavView } = toggles;
  const { isMobile } = useWindowSize();
  const { route } = useRouter();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Paintings", href: "/paintings" },
    { label: "Exhibitions", href: "/exhibitions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <ul className={styles.navUl}>
      {isMobile && (
        <li className={styles.closeButton}>
          <button onClick={() => toggleMobileNavView()}>
            <CloseButton />
          </button>
        </li>
      )}
      {navLinks.map(link => {
        return (
          <li
            key={link.label}
            className={styles.navLi}
            onClick={() => toggleMobileNavView()}
          >
            <Link
              href={link.href}
              className={clsx(
                styles.nextLink,
                route === link.href ? styles.activeLink : ""
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
      {isMobile && (
        <li className={styles.navLi}>
          <PrimaryButton href="/mail" dark={!!route === "/mail"}>
            Join the Email List
          </PrimaryButton>
        </li>
      )}
    </ul>
  );
}
