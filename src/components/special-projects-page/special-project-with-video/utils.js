export function getYouTubeEmbedUrl(url) {
  if (!url) return null;

  const trimmedUrl = url.trim();

  try {
    const parsedUrl = new URL(trimmedUrl);
    const host = parsedUrl.hostname.replace("www.", "");

    if (host === "youtu.be") {
      const videoId = parsedUrl.pathname.split("/").filter(Boolean)[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsedUrl.pathname === "/watch") {
        const videoId = parsedUrl.searchParams.get("v");
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
      }

      if (parsedUrl.pathname.startsWith("/shorts/")) {
        const videoId = parsedUrl.pathname.split("/").filter(Boolean)[1];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        const videoId = parsedUrl.pathname.split("/").filter(Boolean)[1];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
      }
    }
  } catch (error) {
    return null;
  }

  return null;
}
