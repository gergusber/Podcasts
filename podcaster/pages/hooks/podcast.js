import { getPodcasts } from '@/helpers/api-util';
import { useQuery } from '@tanstack/react-query';
import * as api from '../api/podcast';

export const usePodcasts = () => {
    return useQuery(['podcasts'], () => api.getPodcastsApi());
}
