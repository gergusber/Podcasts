import classes from './detailOverview.module.css';
import Image from 'next/image';
import Link from 'next/link';

function DetailPodcastOverview(props) {
  const { artworkUrl600, name, author, summary } = props.podcast;

  return (
    <>
      <div className={classes.card}>
        <p>
          <Image src={artworkUrl600}
            loader={() => artworkUrl600}
            height={200}
            width={240}
            priority={false}
            alt={name} ></Image>

          <span><b>{name}</b></span>
          <br />
          <span> by {author}</span>
          <br />
          <br />
          Description
          <br />
          <span> by {summary}</span>
        </p>
      </div>
    </>
  );
}

export default DetailPodcastOverview;
