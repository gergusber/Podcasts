import classes from './episode-list.module.css';
import { Table } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const EpisodesList = (props) => {
  const router = useRouter()
  const { episodes, podcastId } = props;
  const episodesLoaded = useMemo(() => {
    return episodes.map(episode => {
      return {
        key: episode.trackId,
        title: episode.trackName,
        date: new Date(episode.releaseDate).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        duration: episode.trackTimeMillis
      }
    })
  }, [episodes]);


  const columns = useMemo(
    () => [
      {
        key: "title",
        label: "Title",
      },
      {
        key: "date",
        label: "Date",
      },
      {
        key: "duration",
        label: "Duration",
      },
    ],
    []);
  const onSelectionChange = (episodeId) => {
    console.log('episodeId', episodeId);
    // console.log(episodes);
    // const data = episodes.filter(episode => episode.trackId === Number(episodeId))[0]
    // console.log('data from episode Object', data)
    router.push(`/podcast/${podcastId}/episode/${episodeId}`)
    // const object = {
    //   trackId: data.trackId,
    //   episodeGuid: data.episodeGuid,
    //   summary: data.description,
    //   name: data.trackName,
    //   imageSrc: data.artworkUrl160,
    //   title: data.collectionName,
    //   duration: data.trackTimeMillis,
    //   releaseDate: data.releaseDate,
    //   episodeUrl: data.episodeUrl,
    //   episodeFileExtension: data.episodeFileExtension,
    //   episodeContentType: data.episodeContentType,
    //   contentAdvisoryRating: data.contentAdvisoryRating
    // }
    // router.push({
    //   pathname: '/podcast/[podcastId]/episode/[episodeId]',
    //   query: {
    //     podcastId: podcastId,
    //     episodeId: episodeId,
       
    //   },
    // })
  }
  return (
    <Table
      aria-label="Example table with dynamic content"
      color="primary"
      bordered
      sticked
      selectionMode="single"
      onRowAction={onSelectionChange}
      css={{
        minWidth: "60%",
        width: "80%",
        height: "auto"
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={episodesLoaded}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}

export default EpisodesList;
