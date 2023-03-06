import AllPostsView from '@/src/pages/AllPosts/AllPostsView';
import { getAllPosts } from '@/src/helpers/posts';
import IAllPosts from '@/src/pages/AllPosts/interfaces/IAllPosts';

function AllPosts({ posts }: IAllPosts) {
  return <AllPostsView posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPosts;
