import PostContent from '@/src/pages/PostDetail/components/PostContent/PostContent';
import { MOCKED_POST } from '@/src/mocks/MockedPost';

function PostDetailView() {
  return (
    <div>
      <PostContent postData={MOCKED_POST} />
    </div>
  );
}

export default PostDetailView;
