import Link from 'next/link';
import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.center}>
      <div className={classes.description}>
        <Link href="/">
          Podcaster
        </Link>
      </div>
    </header>
  );
}

export default MainHeader;
