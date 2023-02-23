import Link from 'next/link';
import Image from 'next/image';
import IPostItem from '@/src/components/PostItem/interface/IPostItem';
import classes from '@/src/components/PostItem/scss/PostItem.module.scss';

function PostItem({ post }: IPostItem) {
  const { title, image, excerpt, date, slug } = post || {};

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <Image
          src={imagePath}
          alt="postImage"
          width={300}
          height={200}
          className={classes.image}
        />
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
