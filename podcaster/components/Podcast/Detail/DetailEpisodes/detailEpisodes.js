import classes from './detailEpisodes.module.css';
import EpisodesList from '../../../Episodes/List/episode-list'

function DetailEpisodes(props) {
  console.log(props.episodes);
  return (
    <>
      <div className={classes.container__table}>
        <span><b>Episodes:{props.episodes.length}</b></span>
        <EpisodesList episodes={props.episodes} podcastId={props.podcastId} />
      </div>
    </>
  );
}

export default DetailEpisodes;
