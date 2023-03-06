import PostItem from '@/src/components/PostItem/PostItem';
import classes from '@/src/components/PostGrid/scss/PostGrid.module.scss';
import IPostGrid from '@/src/components/PostGrid/interfaces/IPostGrid';

function PostGrid({ posts }: IPostGrid) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
