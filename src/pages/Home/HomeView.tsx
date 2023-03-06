import Hero from '@/src/pages/Home/components/Hero/Hero';
import FeaturedPosts from '@/src/pages/Home/components/FeaturedPosts/FeaturedPosts';
import { MOCKED_POSTS } from '@/src/mocks/MockedPosts';

function HomeView() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={MOCKED_POSTS} />
    </>
  );
}

export default HomeView;
