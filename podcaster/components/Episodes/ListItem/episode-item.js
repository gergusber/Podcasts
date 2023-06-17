import classes from './episode-item.module.css';
import Image from 'next/image';
import Link from 'next/link';
function EventItem(props) {
  const { trackName, description, releaseDate, trackId, trackTimeMillis, episodeGuid } = props.episode;

  return (
    <tr>
      <Link href={`/episode/${episodeGuid}`}
      >
        <li className={classes.card}>
          <h3>{trackName}</h3>
          <p>Date: {releaseDate}</p>
          <p>duration: {trackTimeMillis}</p>
        </li>
      </Link>
    </tr>
  );
}

export default EventItem;
