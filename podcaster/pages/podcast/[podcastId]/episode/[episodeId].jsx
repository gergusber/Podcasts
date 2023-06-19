import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/EpisodeDetail.module.css';
import EpisodeItem from '@/components/Episodes/ListItem/episode-item';
import DetailPodcastOverview from '@/components/Podcast/Detail/DetailOverview/detailOverview';
import { getPodcast } from '@/helpers/api-util';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { usePodcast } from '@/hooks/podcast';
import { useEpisode } from '@/hooks/episode';
import { Loading } from '@nextui-org/react';
import { getPodcastApi } from '@/pages/api/podcast';
import { getEpisodesByPodcastApi } from '@/pages/api/episodes';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function PodcastDetailPage() {
  const router = useRouter();
  const { podcastId, episodeId } = router.query;

  const { data: dataPodcastSelected, isLoadingPodcastSelected } =
    usePodcast(podcastId);
  const { data: dataEpisodes, isLoadingEpisodes } = useEpisode(podcastId);
  const [podcast, setPodcast] = useState(dataPodcastSelected);
  const [episodes, setEpisodes] = useState(dataEpisodes);
  const [episodeSelected, setEpisodeSelected] = useState();

  useEffect(() => {
    const episode = episodes.results.filter(
      (x) => x.trackId === Number(episodeId)
    );
    setEpisodeSelected(episode);
  }, [episodes, episodeId]);

  if (isLoadingPodcastSelected || isLoadingEpisodes || !episodeSelected) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Episode Detail</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <div className={styles.center}>
            {podcast && <DetailPodcastOverview podcast={podcast.results[0]} />}
            {episodes && episodeSelected && (
              <EpisodeItem episode={episodeSelected[0]} podcastId={podcastId} />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { podcastId } = context.params;
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(['podcast', podcastId], () =>
    getPodcastApi(podcastId)
  );
  await queryClient.fetchQuery(['episodes', podcastId], () =>
    getEpisodesByPodcastApi(podcastId)
  );

  const podcastSelected = await getPodcast(podcastId);
  if (!podcastSelected || !podcastSelected.results) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
