import styles from "./special-project-with-video.module.scss";
import RichText from "@/components/shared/rich-text/rich-text";
import VideoWithPlaylistTiles from "./video-with-playlist-tiles/video-with-playlist-tiles";

export default function SpecialProjectWithVideo({
  videoLink,
  heading,
  description,
  videos = [],
}) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {videoLink && (
          <VideoWithPlaylistTiles
            videoLink={videoLink}
            projectHeading={heading}
            videos={videos}
          />
        )}
        <p className={styles.heading}>{heading}</p>
        <RichText json={description.json} classNames={styles.richText} />
      </div>
    </div>
  );
}
