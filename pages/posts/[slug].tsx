import { GetStaticPropsContext } from 'next';
import PostDetailView from '@/src/pages/PostDetail/PostDetailView';
import { getPostData, getPostsFiles } from '@/src/helpers/posts';
import IPostDetail from '@/src/pages/PostDetail/interfaces/IPostDetail';
import Head from 'next/head';

function PostDetail({ post }: IPostDetail) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostDetailView post={post} />
    </>
  );
}

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const { slug } = params || {};

  const postData = getPostData((slug as string) || '');

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default PostDetail;
