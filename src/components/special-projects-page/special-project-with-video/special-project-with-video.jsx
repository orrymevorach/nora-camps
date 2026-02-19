import RichText from "@/components/shared/rich-text/rich-text";
import styles from "./special-project-with-video.module.scss";
import { getYouTubeEmbedUrl } from "./utils";

export default function SpecialProjectWithVideo({
  videoLink,
  heading,
  description,
}) {
  const youTubeEmbedUrl = getYouTubeEmbedUrl(videoLink);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {youTubeEmbedUrl ? (
          <iframe
            className={styles.media}
            src={youTubeEmbedUrl}
            title={heading || "YouTube video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <video className={styles.media} src={videoLink} controls></video>
        )}
        <p className={styles.heading}>{heading}</p>
        <RichText json={description.json} classNames={styles.richText} />
      </div>
    </div>
  );
}
