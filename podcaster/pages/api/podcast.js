//api/podcast.js

import { getPodcasts  } from '@/helpers/api-util';

export const getPodcastsApi = async () => {
  return await getPodcasts();
}