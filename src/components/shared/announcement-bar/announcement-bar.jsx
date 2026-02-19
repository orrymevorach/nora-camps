import { useEffect, useState } from "react";
import styles from "./announcement-bar.module.scss";
import CloseButton from "../svg/close-button";
import RichText from "../rich-text";

const DISMISS_STORAGE_KEY = "announcement-bar-dismissed-until";
const FORTY_EIGHT_HOURS_IN_MS = 48 * 60 * 60 * 1000;

export default function AnnouncementBar({
  text = "",
  setIsAnnouncementVisible,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!text) {
      setIsAnnouncementVisible?.(false);
      return;
    }

    const dismissedUntil = localStorage.getItem(DISMISS_STORAGE_KEY);
    const isDismissed = dismissedUntil && Number(dismissedUntil) > Date.now();
    const shouldShow = !isDismissed;

    setIsVisible(shouldShow);
    setIsAnnouncementVisible?.(shouldShow);
  }, [setIsAnnouncementVisible, text]);

  const closeAnnouncement = () => {
    const dismissedUntil = Date.now() + FORTY_EIGHT_HOURS_IN_MS;
    localStorage.setItem(DISMISS_STORAGE_KEY, String(dismissedUntil));
    setIsVisible(false);
    setIsAnnouncementVisible?.(false);
  };

  if (!text || !isVisible) return null;

  return (
    <div className={styles.container} role="status" aria-live="polite">
      <RichText json={text.json} classNames={styles.richText} />
      <button className={styles.closeButton} onClick={closeAnnouncement}>
        <CloseButton isSmall />
      </button>
    </div>
  );
}
