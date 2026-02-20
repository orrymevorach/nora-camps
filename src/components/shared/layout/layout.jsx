import styles from "./layout.module.scss";
import Nav from "../nav-bar/nav-bar";
import Footer from "../footer/footer";
import Newsletter from "../newsletter";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import AnnouncementBar from "../announcement-bar";
import clsx from "clsx";

export default function Layout({
  children,
  paintingsAndCollections,
  announcementBar,
}) {
  const { route } = useRouter();
  const showNewsletter = route !== "/newsletter" && route !== "/contact";
  const hasAnnouncement = Boolean(announcementBar?.text);
  const [isAnnouncementVisible, setIsAnnouncementVisible] =
    useState(hasAnnouncement);
  const [marginTop, setMarginTop] = useState("0px");
  const announcementBarRef = useRef(null);

  // create spacing to make room for announcement bar
  useEffect(() => {
    if (announcementBarRef?.current) {
      const announcementBarHeight = announcementBarRef.current.offsetHeight;
      setMarginTop(`${announcementBarHeight}px`);
    }
  }, [announcementBarRef.current, isAnnouncementVisible]);

  return (
    <div>
      {hasAnnouncement && (
        <AnnouncementBar
          text={announcementBar?.text}
          setIsAnnouncementVisible={setIsAnnouncementVisible}
          announcementBarRef={announcementBarRef}
        />
      )}
      <Nav
        paintingsAndCollections={paintingsAndCollections}
        isAnnouncementVisible={isAnnouncementVisible}
        announcementBarRef={announcementBarRef}
      />
      <main
        className={clsx(styles.children)}
        style={{ marginTop: isAnnouncementVisible ? marginTop : 0 }}
      >
        {children}
      </main>
      {showNewsletter && <Newsletter />}
      <Footer />
    </div>
  );
}
