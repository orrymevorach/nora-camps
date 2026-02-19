import Nav from "../nav-bar/nav-bar";
import Footer from "../footer/footer";
import Newsletter from "../newsletter";
import { useRouter } from "next/router";
import { useState } from "react";
import AnnouncementBar from "../announcement-bar";

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

  return (
    <div>
      {hasAnnouncement && (
        <AnnouncementBar
          text={announcementBar?.text}
          setIsAnnouncementVisible={setIsAnnouncementVisible}
        />
      )}
      <Nav
        paintingsAndCollections={paintingsAndCollections}
        isAnnouncementVisible={isAnnouncementVisible}
      />
      <main>{children}</main>
      {showNewsletter && <Newsletter />}
      <Footer />
    </div>
  );
}
