import classes from './detailEpisodes.module.css';
import EpisodesList from '../../../Episodes/List/episode-list'

function DetailEpisodes(props) {

  return (
    <>
      <div className={classes.container__table}>
        <span><b>Episodes:{props.episodes.length}</b></span>
        <EpisodesList episodes={props.episodes} />
      </div>
    </>
  );
}

export default DetailEpisodes;
