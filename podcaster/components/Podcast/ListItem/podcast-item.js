import classes from './podcast-item.module.css';
import Image from 'next/image';

function EventItem(props) {
  const { podcast } = props;
  console.log(podcast['im:image'][1].label);
  return (
    <li className={classes.card}>
      {/* <div style={{ borderRadius: '5px', overflow: 'hidden' }}> */}
        <Image src={podcast['im:image'][1].label} height={60} width={200} alt={podcast['im:name'].label} objectFit="cover" />
      {/* </div> */}

      <h3>{podcast['im:name'].label}</h3>
      <p>Podcast author{podcast['im:artist'].label}</p>
    </li>
  );
}

export default EventItem;
