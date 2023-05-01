import { useEffect } from "react";
import NavItems from "../nav-items/nav-items";
import MobileButtons from "./mobile-buttons/mobile-buttons";

export default function MobileNav({
  toggleMobileNavView,
  toggleSearchBar,
  isMobileNavOpen,
}) {
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMobileNavOpen]);
  return (
    <div>
      <MobileButtons toggles={{ toggleMobileNavView, toggleSearchBar }} />
      {isMobileNavOpen && <NavItems toggles={{ toggleMobileNavView }} />}
    </div>
  );
}
