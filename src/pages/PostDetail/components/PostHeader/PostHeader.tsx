import Image from 'next/image';
import IPostHeader from '@/src/pages/PostDetail/components/PostHeader/interfaces/IPostHeader';
import classes from '@/src/pages/PostDetail/components/PostHeader/scss/PostHeader.module.scss';

function PostHeader({ title, image }: IPostHeader) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;
