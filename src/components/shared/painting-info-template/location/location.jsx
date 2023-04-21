import LocationMarker from "@/components/shared/svg/location-marker";
import styles from "./location.module.scss";

export default function Location({ location: { label, url } }) {
  return (
    <a href={url} className={styles.location} target="_blank">
      <LocationMarker classNames={styles.locationMarker} /> {label}
    </a>
  );
}
