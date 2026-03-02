export function getYouTubeEmbedUrl({ url }) {
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

function extractPlaylistId(url) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.searchParams.get("list");
  } catch (err) {
    return null;
  }
}

export async function getYouTubePlaylist({ playlistLink }) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistId = extractPlaylistId(playlistLink);
  if (!playlistId) return [];

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
  );

  const data = await res.json();

  const videos = data.items.map(item => {
    return {
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium
        ? item.snippet.thumbnails.medium.url
        : null,
      url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
    };
  });
  return videos;
}

export async function getYouTubeVideoDataFromUrl({ videoUrl }) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  try {
    const parsedUrl = new URL(videoUrl);

    const videoId = parsedUrl.searchParams.get("v");

    const videoRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`
    );
    if (!videoRes.ok) {
      throw new Error("Failed to fetch video data");
    }

    const videoData = await videoRes.json();
    if (!videoData.items || videoData.items.length === 0) {
      throw new Error("No video data found for the provided URL");
    }
    return videoData.items[0].snippet;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}
