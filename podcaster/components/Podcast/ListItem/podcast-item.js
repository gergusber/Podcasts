import classes from './podcast-item.module.css';
import Image from 'next/image';
import Link from 'next/link';
function EventItem(props) {
  const { podcast } = props;
  const name = podcast['im:name'].label;
  const author = podcast['im:artist'].label;
  const imageSrc = podcast['im:image'][1]?.label;

  return (
    <>
      <Link href={`/podcasts/${podcast.id.label}`}>
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
          <p>by: {author}</p>
        </li>

      </Link>
    </>

  );
}

export default EventItem;
