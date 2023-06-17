import classes from './episode-item.module.css';

function EpisodeItem(props) {
  const { trackName, description, releaseDate, episodeUrl, episodeContentType, episodeFileExtension, trackId, trackTimeMillis, episodeGuid } = props.episode;
  console.log(props.episode);
  return (
    <>
      <div className={classes.item}>
        <p>
          <b>{trackName}</b></p>
        <p>{description}</p>

        <div className={classes.item}>
          <audio controls className={classes.audio}>
            <source src={episodeUrl} type={`${episodeContentType}/${episodeFileExtension}`} />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </>
  );
}

export default EpisodeItem;