import styles from "./social-buttons.module.scss";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialButtons() {
  return (
    <a
      href="https://www.instagram.com/noracamps/?hl=en"
      className={styles.container}
      target="_blank"
    >
      <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      <p className={styles.handle}>@noracamps_artist</p>
    </a>
  );
}
