import AllPostsView from '@/src/pages/AllPosts/AllPostsView';
import { MOCKED_POSTS } from '@/src/mocks/MockedPosts';

function AllPosts() {
  return <AllPostsView posts={MOCKED_POSTS} />;
}

export default AllPosts;
