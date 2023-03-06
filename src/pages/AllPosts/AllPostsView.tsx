import classes from './scss/AllPostView.module.scss';
import PostGrid from '@/src/components/PostGrid/PostGrid';
import IAllPosts from '@/src/pages/AllPosts/interfaces/IAllPosts';

function AllPostsView({ posts }: IAllPosts) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
}

export default AllPostsView;
