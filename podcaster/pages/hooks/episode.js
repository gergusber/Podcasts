import { useQuery } from '@tanstack/react-query';
import * as api from '../api/episodes';

export const useEpisode = (podcastId) => {
  return useQuery(['episodes', podcastId], () => api.getEpisodesByPodcastApi(podcastId));
}
