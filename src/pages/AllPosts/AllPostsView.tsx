import classes from './scss/AllPostView.module.scss';
import PostGrid from '@/src/components/PostGrid/PostGrid';
import IAllPostsView from '@/src/pages/AllPosts/interfaces/IAllPostsView';

function AllPostsView({ posts }: IAllPostsView) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
}

export default AllPostsView;
