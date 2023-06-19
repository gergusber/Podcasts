import classes from './detailOverview.module.css';
import Image from 'next/image';
import Link from 'next/link';

function DetailPodcastOverview(props) {
  const { artworkUrl600, collectionName, artistName } = props.podcast;
  return (
    <>
      <div className={classes.card}>
        <p>
          <Image src={artworkUrl600}
            loader={() => artworkUrl600}
            height={200}
            width={240}
            priority={false}
            alt={collectionName} ></Image>
          <span><b>{collectionName}</b></span>
          <br />
          <span> by {artistName}</span>
          <br />
          <br />
        </p>
      </div>
    </>
  );
}

export default DetailPodcastOverview;
