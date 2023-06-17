import classes from './detailEpisodes.module.css';
import EpisodesList from '../../../Episodes/List/episode-list'

function DetailEpisodes(props) {

  return (
    <>
      <span><b>Episodes:{props.episodes.length}</b></span>
      <div >
        <EpisodesList episodes={props.episodes} />
      </div>
    </>
  );
}

export default DetailEpisodes;
