import classes from './episode-list.module.css';
import EpisodeItem from '../ListItem/episode-item';

const EpisodesList = (props) => {
  const { episodes } = props;
  return (

    <ul className={classes.grid}>
      {Array.isArray(episodes) ?
        episodes.map((episode) => (
          <EpisodeItem key={episode.episodeGuid} episode={episode} />
        )) :
        <p>No Episodes Found</p>}
    </ul>
  );
}

export default EpisodesList;
