export const getYouTubeEmbedUrl = (videoId: string): string =>
  `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`

export const getYouTubeWatchUrl = (videoId: string): string =>
  `https://www.youtube.com/watch?v=${videoId}`
