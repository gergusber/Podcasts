import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/EpisodeDetail.module.css'
import EpisodeItem from "@/components/Episodes/ListItem/episode-item";
import DetailPodcastOverview from "@/components/Podcast/Detail/DetailOverview/detailOverview";
import { getPodcast, getPodcasts, getEpisodesByPodcastId } from '@/helpers/api-util'
import { useRouter } from 'next/router'
import { URL } from 'url';

const inter = Inter({ subsets: ['latin'] })

export default function PodcastDetailPage(props) {
  const { podcast, episode } = props;
  const router = useRouter();
  const { podcastId } = router.query;

  if (!podcast) {
    <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>Podcaster</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={podcast.icon} />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <div className={styles.center}>
            <DetailPodcastOverview podcast={podcast} />
            <EpisodeItem episode={episode} podcastId={podcastId} />
          </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths(params) {
  return { // if we need to load it only when its needed
    paths: [],
    fallback: 'blocking'
  }
  // const { podcastId } = params;
  // const podcast = await getPodcast(podcastId);
  // const podcastIds = podcast.feed.entry.map(podcast => (podcast.id.attributes['im:id'])); // we construct the object of params with all the pIds dynamic 
  // const listOfEpisodes = await getEpisodesByPodcastId(podcastId)
  // const listOfEpisodes2 = listOfEpisodes.results.map(episodes => (episodes.trackId))
  // const episodes = listOfEpisodes2.map(episodes => (episodes.trackId))
  // // The returned paths will be pre-rendered as static HTML at build time
  // return {
  //   paths:{
  //     params:{
  //       podcastId:podcastIds,
  //       episodeId:episodes
  //     }
  //   },
  //   fallback: "blocking",// Set this to true if you have additional dynamic paths that are not listed here
  // };
}

export async function getStaticProps(context) {
  const { podcastId, episodeId } = context.params;
  const podcastSelected = await getPodcast(podcastId);

  if (!podcastSelected || !podcastSelected.results) {
    return {
      notFound: true,
    }
  }
  const podcastsFromDb = await getPodcasts();
  const selectedPodcastData = podcastsFromDb.feed.entry.filter((podcast) => podcast.id.attributes['im:id'] === podcastId)
  const entry = selectedPodcastData[0]
  const name = entry['im:name'].label;
  const author = entry['im:artist'].label;
  const imageSrc = entry['im:image'][1]?.label;
  const id = entry.id.attributes['im:id'];
  const summary = entry.summary.label;
  const title = entry.title.label

  const listOfEpisodes = await getEpisodesByPodcastId(podcastId)

  const trackWrapper = listOfEpisodes.results.slice(0, 1)[0];
  const episodesWithoutWrapperTrack = listOfEpisodes.results.slice(1);
  const episode = episodesWithoutWrapperTrack.filter(x => x.trackId === Number(episodeId))

  return {
    props: {
      podcast: {
        summary,
        name,
        author,
        imageSrc,
        id,
        title,
        ...podcastSelected.results[0],
      },
      episode: episode[0]
    },
  };
}
