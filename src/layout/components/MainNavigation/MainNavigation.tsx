import Link from 'next/link';
import Logo from '@/src/layout/components/Logo/Logo';
import classes from '@/src/layout/components/MainNavigation/scss/MainNavigation.module.scss';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
