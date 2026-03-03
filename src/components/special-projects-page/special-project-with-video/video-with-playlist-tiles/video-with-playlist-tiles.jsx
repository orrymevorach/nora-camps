import { useState, useRef } from "react";
import styles from "./video-with-playlist-tiles.module.scss";
import { getYouTubeEmbedUrl } from "../utils";
import PlayButton from "@/components/shared/svg/play-button";
import { useWindowSize } from "@/hooks";
import PrimaryButton from "@/components/shared/primary-button";
import clsx from "clsx";

export default function VideoWithPlaylistTiles({
  projectHeading,
  videos,
  featureVideo,
}) {
  const { isMobile } = useWindowSize();
  const [activeVideo, setActiveVideo] = useState(featureVideo);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const videoYouTubeEmbedUrl = getYouTubeEmbedUrl({ url: activeVideo.url });
  const videoContainerRef = useRef(null);

  const displayedVideos =
    isMobile && !showAllVideos ? videos.slice(0, 4) : videos;

  function handleThumbnailClick(video) {
    if (isMobile && videoContainerRef.current) {
      const elementPosition =
        videoContainerRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
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
        <>
          <div className={styles.thumbnailsContainer}>
            {displayedVideos.map(video => {
              return (
                <div className={styles.thumbnailContainer} key={video.id}>
                  <button
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
          {isMobile && videos.length > 4 && !showAllVideos && (
            <>
              <PrimaryButton
                handleClick={() => setShowAllVideos(true)}
                classNames={styles.button}
              >
                Show All Videos
              </PrimaryButton>
              <div className={clsx(styles.border, styles.mobileBorder)} />
            </>
          )}
        </>
      )}
    </div>
  );
}
