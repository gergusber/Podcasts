import { transformDate } from '@/helpers/utils';
import classes from './episode-item.module.css';

function EpisodeItem(props) {
  const {
    trackName = null,
    description = null,
    releaseDate = null,
    episodeUrl = null,
    episodeContentType = null,
    episodeFileExtension = null,
  } = props.episode;

  const releaseDateParsed = transformDate(releaseDate);

  return (
    <>
      <div className={classes.item}>
        <p>
          <b>{trackName}</b>
        </p>
        <p>
          {description}
          <br />
          <br />
          <span>Released: {releaseDateParsed}</span>
        </p>

        <audio controls className={classes.audio}>
          <source
            src={episodeUrl}
            type={`${episodeContentType}/${episodeFileExtension}`}
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
}

export default EpisodeItem;
