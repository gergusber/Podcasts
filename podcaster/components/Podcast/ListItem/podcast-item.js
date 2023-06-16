import classes from './podcast-item.module.css';
import Image from 'next/image';

function EventItem(props) {
  const { podcast } = props;
  const name = podcast['im:name'].label;
  const author = podcast['im:artist'].label;
  const imageSrc = podcast['im:image'][1]?.label;

  return (
    <li className={classes.card}>
      <div style={{ borderRadius: "50%", overflow: 'hidden' }}>
        {imageSrc && <Image
          loader={() => podcast['im:image'][1].label}
          src={imageSrc}
          height={200}
          width={240}
          alt={name} objectFit="cover" />}

        {!imageSrc && <Image
          src={'/images/default.png'}
          height={200}
          width={240}
          alt={name} objectFit="cover" />}
      </div>

      <h3>{name}</h3>
      <p>Podcast author{author}</p>
    </li>
  );
}

export default EventItem;
