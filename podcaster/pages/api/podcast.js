//api/podcast.js

import { getPodcasts, getPodcast } from '@/helpers/api-util';

export const getPodcastsApi = async () => {
  return await getPodcasts();
}

export const getPodcastApi = async (podcastId) => {
  return await getPodcast(podcastId);
}