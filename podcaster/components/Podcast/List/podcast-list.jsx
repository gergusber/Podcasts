import classes from './podcast-list.module.css';
import PodcastItem from '../ListItem/podcast-item';

const PodcastList = (props) => {
  const { podcastList } = props;
  return (
    // 
    <ul className={classes.grid}>
      {Array.isArray(podcastList) ?
        podcastList.map((podcast) => (
          <PodcastItem key={podcast.id.attributes['im:id']} podcast={podcast} />
        )) :
        <p>No Podcast Found</p>}
    </ul>
  );
}

export default PodcastList;
