import classes from './episode-item.module.css';

function EpisodeItem(props) {
  const { trackName = null,
    description = null,
    releaseDate = null,
    episodeUrl = null,
    episodeContentType = null,
    episodeFileExtension = null,
    trackId = null,
    trackTimeMillis = null,
    episodeGuid = null } = props.episode;

  return (
    <>
      <div className={classes.item}>
        <p><b>{trackName}</b></p>
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
