import { Table } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { millisToMinutesAndSeconds, transformDate } from '@/helpers/utils';

const EpisodesList = (props) => {
  const router = useRouter();
  const { episodes, podcastId } = props;
  const episodesLoaded = useMemo(() => {
    return episodes.map((episode) => {
      if (episode.wrapperType !== 'podcastEpisode') {
        return null;
      }
      return {
        key: episode.trackId,
        title: episode.trackName,
        date: transformDate(episode.releaseDate),
        duration: millisToMinutesAndSeconds(episode.trackTimeMillis),
      };
    });
  }, [episodes]);

  const columns = useMemo(
    () => [
      {
        key: 'title',
        label: 'Title',
      },
      {
        key: 'date',
        label: 'Date',
      },
      {
        key: 'duration',
        label: 'Duration',
      },
    ],
    []
  );
  const onSelectionChange = (episodeId) => {
    router.push(`/podcast/${podcastId}/episode/${episodeId}`);
  };
  return (
    <Table
      aria-label='Episodes list'
      color='primary'
      bordered
      sticked
      selectionMode='single'
      onRowAction={onSelectionChange}
      css={{
        minWidth: '60%',
        maxWidth: '60%',
        width: '60%',
        height: 'auto',
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
};

export default EpisodesList;
