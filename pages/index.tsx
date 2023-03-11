import HomeView from '@/src/pages/Home/HomeView';
import { getFeaturedPosts } from '@/src/helpers/posts';
import IHome from '@/src/pages/Home/interfaces/IHome';
import Head from 'next/head';

function Home({ posts }: IHome) {
  return (
    <>
      <Head>
        <title>Yuriy Blog</title>
        <meta
          name="description"
          content="Just a simple blog written during the NextJS course"
        />
      </Head>
      <HomeView posts={posts} />;
    </>
  );
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
