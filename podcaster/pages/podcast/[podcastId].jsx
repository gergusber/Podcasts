import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import DetailPodcastOverview from '@/../components/Podcast/Detail/DetailOverview/detailOverview';
import DetailEpisodes from '@/../components/Podcast/Detail/DetailEpisodes/detailEpisodes';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { usePodcast } from '@/../hooks/podcast';
import { useEpisode } from '@/../hooks/episode';
import { Loading } from '@nextui-org/react';
import { getPodcastApi } from '../api/podcast';
import { getEpisodesByPodcastApi } from '../api/episodes';
import { useState } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function PodcastDetailPage() {
  const router = useRouter();
  const { podcastId } = router.query;
  const { data: dataPodcastSelected, isLoadingPodcastSelected } =
    usePodcast(podcastId);
  const { data: dataEpisodes, isLoadingEpisodes } = useEpisode(podcastId);
  const [podcast, setPodcast] = useState(dataPodcastSelected);
  const [episodes, setEpisodes] = useState(dataEpisodes);

  if (isLoadingPodcastSelected || isLoadingEpisodes) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Podcast Detail</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.item}>
          <div className={styles.center}>
            {podcast && <DetailPodcastOverview podcast={podcast.results[0]} />}
            {episodes && (
              <DetailEpisodes
                episodes={episodes.results}
                podcastId={podcastId}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { podcastId } = context.params;
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(['podcast', podcastId], () =>
    getPodcastApi(podcastId)
  );
  await queryClient.fetchQuery(['episodes', podcastId], () =>
    getEpisodesByPodcastApi(podcastId)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
