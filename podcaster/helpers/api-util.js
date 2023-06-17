const URL = process.env.URL_FETCH;
const URL_FETCH_PODCAST_DETAIL = process.env.URL_FETCH_PODCAST_DETAIL

export async function getPodcasts() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export const getPodcast = async (podcastId) => {
  const response = await fetch(`${URL_FETCH_PODCAST_DETAIL}${podcastId}`);
  const data = await response.json();
  console.log('data from podcast ', data);
  return data;
}


export const getEpisodesByPodcastId = async (podcastId) => {
  const response = await fetch(`${URL_FETCH_PODCAST_DETAIL}${podcastId}&media=podcast&entity=podcastEpisode&limit=100`);
  const data = await response.json();
  console.log('data from podcast episodes ', data);
  return data;
}