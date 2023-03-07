import PostContent from '@/src/pages/PostDetail/components/PostContent/PostContent';
import IPostDetail from '@/src/pages/PostDetail/interfaces/IPostDetail';

function PostDetailView({ post }: IPostDetail) {
  return <PostContent postData={post} />;
}

export default PostDetailView;
