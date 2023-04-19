import LocationMarker from "@/components/shared/svg/location-marker";
import styles from "./location.module.scss";

export default function Location({ location }) {
  return (
    <div className={styles.location}>
      <LocationMarker classNames={styles.locationMarker} /> {location}
    </div>
  );
}
