import HomeView from '@/src/pages/Home/HomeView';
import { getFeaturedPosts } from '@/src/helpers/posts';
import IHome from '@/src/pages/Home/interfaces/IHome';

function Home({ posts }: IHome) {
  return <HomeView posts={posts} />;
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default Home;
