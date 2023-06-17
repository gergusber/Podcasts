import classes from './podcastSearchBar.module.css';
import { useRef } from 'react';

function PodcastSearchBar(props) {
  const searchValueRef = useRef();

  return (
    <div className={classes.controls}>
      <div className={classes.control}>
        <label htmlFor='searchPodcast'>Podcast</label>
        <input type="text"
          ref={searchValueRef}
          value={props.searchValue}
          onChange={(event) => {
            event.preventDefault();
            props.handleSearchChange(searchValueRef.current.value)
          }} />
      </div>
    </div>
  );
}

export default PodcastSearchBar;
