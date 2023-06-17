import classes from './podcastSearchBar.module.css';
import { useRef } from 'react';
import { Input } from '@nextui-org/react';

function PodcastSearchBar(props) {
  const searchValueRef = useRef();

  return (
    <div className={classes.controls}>
      <div className={classes.control}>

        <Input placeholder="Search podcast"
          bordered
          ref={searchValueRef}
          value={props.searchValue}
          size="md"
          onChange={(event) => {
            event.preventDefault();
            props.handleSearchChange(searchValueRef.current.value)
          }} />
      </div>
    </div>
  );
}

export default PodcastSearchBar;
