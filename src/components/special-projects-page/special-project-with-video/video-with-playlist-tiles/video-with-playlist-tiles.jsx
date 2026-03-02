import { useState, useRef } from "react";
import styles from "./video-with-playlist-tiles.module.scss";
import { getYouTubeEmbedUrl } from "../utils";
import PlayButton from "@/components/shared/svg/play-button";
import { useWindowSize } from "@/hooks";

export default function VideoWithPlaylistTiles({
  projectHeading,
  videos,
  featureVideo,
}) {
  const { isMobile } = useWindowSize();
  const [activeVideo, setActiveVideo] = useState(featureVideo);
  const videoYouTubeEmbedUrl = getYouTubeEmbedUrl({ url: activeVideo.url });
  const videoContainerRef = useRef(null);

  function handleThumbnailClick(video) {
    if (isMobile && videoContainerRef.current) {
      videoContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveVideo(video);
  }

  return (
    <div ref={videoContainerRef}>
      <iframe
        className={styles.video}
        src={videoYouTubeEmbedUrl}
        title={projectHeading || "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p className={styles.videoTitle}>
        Resonance <span className={styles.horizontalLine}></span> Nora Camps,
        2026
      </p>
      <div className={styles.border} />
      <p className={styles.seriesText}>From the series</p>
      {videos.length && (
        <div className={styles.thumbnailsContainer}>
          {videos.map(video => {
            return (
              <div className={styles.thumbnailContainer}>
                <button
                  key={video.id}
                  onClick={() => handleThumbnailClick(video)}
                  className={styles.thumbnail}
                  type="button"
                >
                  <div
                    className={styles.thumbnailBackground}
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />
                  <PlayButton classNames={styles.playButton} />
                </button>
                <p className={styles.thumbnailTitle}>{video.title}</p>
              </div>
            );
          })}
        </div>
      )}
      <div className={styles.border} />
    </div>
  );
}
