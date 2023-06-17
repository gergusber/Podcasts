import classes from './episode-list.module.css';
import EpisodeItem from '../ListItem/episode-item';
import { Table } from '@nextui-org/react';
import { useRouter } from 'next/router';
const EpisodesList = (props) => {
  const router = useRouter()
  const { episodes } = props;
  const episodesTable = episodes.map(episode => {
    return {
      key: episode.episodeGuid,
      title: episode.trackName,
      date: new Date(episode.releaseDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      duration: episode.trackTimeMillis
    }
  })
  const columns = [
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
  ];
  const onSelectionChange = (data) => {
    console.log(data);

    // TODO : Add the correct parameters to this route
    router.push({
      pathname: '/podcast/[id]/episode/[episodeId]',
      query: {
        id: '1535809341',
        episodeId: '0d6724ac-9ba1-46a9-818e-861b0cd11abe'
      }
    })
  }
  return (
    <Table
      aria-label="Example table with dynamic content"
      color="primary"
      bordered
      sticked
      selectionMode="single"
      onSelectionChange={(data) => onSelectionChange(data)}
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
      <Table.Body items={episodesTable}>
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
