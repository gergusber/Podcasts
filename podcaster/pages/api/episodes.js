//api/episodes.js

import { getEpisodesByPodcastId } from '@/helpers/api-util';

export const getEpisodesByPodcastApi = async (podcastId) => {
  return await getEpisodesByPodcastId(podcastId);
}