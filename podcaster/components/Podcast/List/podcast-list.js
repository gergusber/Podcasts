import classes from './podcast-list.module.css';
import PodcastItem from '../ListItem/podcast-item';

const PodcastList = (props) => {
  const { podcastList } = props;
  // console.log('podcasts from PodcastList', podcastList);
  return (
    // 
    <ul className={classes.grid}> 
      {Array.isArray(podcastList) ?
        podcastList.map((podcast) => (
          <PodcastItem key={podcast.id.attributes['im:id']} podcast={podcast} />
        )) :
        null}
    </ul>
  );
}

export default PodcastList;
