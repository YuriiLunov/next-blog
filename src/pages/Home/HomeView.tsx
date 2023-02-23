import Hero from '@/src/pages/Home/components/Hero';
import FeaturedPosts from '@/src/pages/Home/components/FeaturedPosts';
import IPost from '@/src/interfaces/IPost';

const MOCKED_POSTS: IPost[] = [
  {
    id: '1',
    title: 'Hello world!',
    date: new Date().toString(),
    slug: 'hello-world',
    image: 'hello-world.png',
    excerpt: 'First post in next-js blog project. So hello world!',
  },
  {
    id: '2',
    title: 'Hello NextJS!',
    date: new Date().toString(),
    slug: 'hello-nextjs',
    image: 'hello-nextjs.png',
    excerpt: 'The second amazing post in next-js blog project. So hello again!',
  },
  {
    id: '3',
    title: 'Hello TypeScript!',
    date: new Date().toString(),
    slug: 'hello-typescript',
    image: 'hello-typescript.png',
    excerpt: "The third super amazing post. I'm tired because it's 12am",
  },
];

function HomeView() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={MOCKED_POSTS} />
    </>
  );
}

export default HomeView;
