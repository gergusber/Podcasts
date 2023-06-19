import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import PodcastList from '@/components/Podcast/List/podcast-list';
import { getPodcastsApi } from './api/podcast';
import PodcastSearchBar from '@/components/Layout/SearchBar/podcastSearchBar';
import { useState, useEffect } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { usePodcasts } from '@/hooks/podcast';
import { Loading } from '@nextui-org/react';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [searchValue, setSearchValue] = useState();

  const { data, isLoading } = usePodcasts();
  const [podcasts, setPodcasts] = useState(data.feed);
  const { entry } = podcasts;
  const [entries, setEntries] = useState(entry);
  const searchValueHandler = async (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) {
      setEntries(entry);
      return;
    } else {
      const filteredEntries = entry.filter((podcastEntry) => {
        const title = podcastEntry.title.label;
        return title.toLowerCase().includes(searchValue.toLowerCase());
      });

      setEntries(filteredEntries);
    }
  }, [searchValue, entry]);

  if (isLoading || !podcasts) return <Loading />;

  return (
    <>
      <Head>
        <title>Podcaster - Home</title>
      </Head>
      <div className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <div className={styles.center}>
            <PodcastSearchBar
              handleSearchChange={searchValueHandler}
              searchValue={searchValue}
            />
          </div>
        </div>
        {!entries.length && (
          <div>
            <p>No results for the search</p>
          </div>
        )}
        <div>{entries && <PodcastList podcastList={entries} />}</div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(['podcasts'], () => getPodcastsApi());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
