import styles from "./special-project-with-video.module.scss";
import RichText from "@/components/shared/rich-text/rich-text";
import VideoWithPlaylistTiles from "./video-with-playlist-tiles/video-with-playlist-tiles";

export default function SpecialProjectWithVideo({
  heading,
  description,
  videos = [],
  featureVideo,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.heading}>{heading}</p>
        <RichText json={description.json} />
        <div className={styles.border} />
        {featureVideo?.url && (
          <VideoWithPlaylistTiles
            featureVideo={featureVideo}
            projectHeading={heading}
            videos={videos}
          />
        )}
      </div>
    </div>
  );
}
