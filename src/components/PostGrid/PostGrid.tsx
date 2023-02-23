import PostItem from '@/src/components/PostItem/PostItem';
import classes from '@/src/components/PostGrid/scss/PostGrid.module.scss';
import IPostGrid from '@/src/components/PostGrid/interfaces/IPostGrid';
import IPost from '@/src/interfaces/IPost';

function PostGrid({ posts }: IPostGrid) {
  return (
    <ul className={classes.grid}>
      {posts.map((post: IPost) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
