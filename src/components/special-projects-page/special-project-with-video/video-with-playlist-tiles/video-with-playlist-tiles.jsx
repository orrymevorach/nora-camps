import { useState } from "react";
import styles from "./video-with-playlist-tiles.module.scss";
import { getYouTubeEmbedUrl } from "../utils";
import PlayButton from "@/components/shared/svg/play-button";

export default function VideoWithPlaylistTiles({
  projectHeading,
  videos,
  videoLink,
}) {
  const defaultVideoYouTubeEmbedUrl = getYouTubeEmbedUrl({ url: videoLink });
  const [activeVideoUrl, setActiveVideoUrl] = useState(
    defaultVideoYouTubeEmbedUrl
  );

  function handleThumbnailClick(url) {
    const videoEmbedUrl = getYouTubeEmbedUrl({ url });
    setActiveVideoUrl(videoEmbedUrl);
  }

  return (
    <div>
      <iframe
        className={styles.video}
        src={activeVideoUrl}
        title={projectHeading || "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      {videos.length && (
        <div className={styles.thumbnailsContainer}>
          {videos.map(video => {
            return (
              <button
                key={video.id}
                onClick={() => handleThumbnailClick(video.url)}
                className={styles.thumbnail}
                type="button"
              >
                <div
                  className={styles.thumbnailBackground}
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                />
                <PlayButton classNames={styles.playButton} />
                <span className={styles.thumbnailTitle}>{video.title}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
