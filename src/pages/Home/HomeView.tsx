import Hero from '@/src/pages/Home/components/Hero/Hero';
import FeaturedPosts from '@/src/pages/Home/components/FeaturedPosts/FeaturedPosts';
import IHome from '@/src/pages/Home/interfaces/IHome';

function HomeView({ posts }: IHome) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export default HomeView;
