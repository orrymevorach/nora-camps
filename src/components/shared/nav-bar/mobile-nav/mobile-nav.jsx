import NavItems from '../nav-items/nav-items';
import MobileButtons from './mobile-buttons/mobile-buttons';

export default function MobileNav({
  toggleMobileNavView,
  toggleSearchBar,
  mobileNavView,
}) {
  return (
    <div>
      {mobileNavView && <NavItems toggles={{ toggleMobileNavView }} />}
      <MobileButtons toggles={{ toggleMobileNavView, toggleSearchBar }} />
    </div>
  );
}
