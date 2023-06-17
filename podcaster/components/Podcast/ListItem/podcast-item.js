import classes from './podcast-item.module.css';
import Image from 'next/image';
import Link from 'next/link';
function EventItem(props) {
  const { podcast } = props;
  const name = podcast['im:name'].label;
  const author = podcast['im:artist'].label;
  const imageSrc = podcast['im:image'][1]?.label;
  const id = podcast.id.attributes['im:id'];
  return (
    <>
      <Link href={`/podcasts/${id}`}>
        <li className={classes.card}>
          <div style={{ borderRadius: "50%", overflow: 'hidden' }}>
            {imageSrc && <Image
              loader={() => podcast['im:image'][2].label}
              src={imageSrc}
              height={200}
              width={240}
              priority={false} 
              alt={name} />}

            {!imageSrc && <Image
              src={'/images/default.png'}
              height={200}
              width={240}
              priority={false} 
              alt={name}  />}
          </div>

          <h3>{name}</h3>
          <p>by: {author}</p>
        </li>

      </Link>
    </>

  );
}

export default EventItem;
