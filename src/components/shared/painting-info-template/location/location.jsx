import LocationMarker from "@/components/shared/svg/location-marker";
import styles from "./location.module.scss";

export default function Location({ location: { name, googleMapsLink } }) {
  return (
    <a href={googleMapsLink} className={styles.location} target="_blank">
      <LocationMarker classNames={styles.locationMarker} /> {name}
    </a>
  );
}
