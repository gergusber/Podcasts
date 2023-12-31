import Link from 'next/link';
import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.isSticky}>
        <div className={classes.navigation}>
          <Link href='/'>
            <h3> Podcaster </h3>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
