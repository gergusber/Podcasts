import { useQuery } from '@tanstack/react-query';
import * as api from '../pages/api/podcast';

export const usePodcasts = () => {
    return useQuery(['podcasts'], () => api.getPodcastsApi());
}

export const usePodcast = (podcastId) => {
    return useQuery(['podcast', podcastId], () => api.getPodcastApi(podcastId));
}
