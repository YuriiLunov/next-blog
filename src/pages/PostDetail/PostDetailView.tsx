import PostContent from '@/src/pages/PostDetail/components/PostContent/PostContent';
import { MOCKED_POST } from '@/src/mocks/MockedPost';

function PostDetailView() {
  return <PostContent postData={MOCKED_POST} />;
}

export default PostDetailView;
