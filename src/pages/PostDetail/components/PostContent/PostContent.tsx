import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PostHeader from '@/src/pages/PostDetail/components/PostHeader/PostHeader';
import IPostContent from '@/src/pages/PostDetail/components/PostContent/interfaces/IPostContent';
import TMdCustomComponents from '@/src/types/TMdCustomComponents';
import classes from '@/src/pages/PostDetail/components/PostContent/scss/PostContent.module.scss';

function PostContent({ postData }: IPostContent) {
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`;

  const customComponents: TMdCustomComponents = {
    p: ({ node, children }) => {
      if (
        node.children?.[0]?.type === 'element' &&
        node.children?.[0]?.tagName === 'img'
      ) {
        const img = node.children?.[0];
        const src = img.properties?.src as string;
        const alt = img.properties?.alt as string;

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${postData.slug}/${src}`}
              alt={alt || 'post-image'}
              width={600}
              height={300}
            />
          </div>
        );
      } else {
        return <p>{children}</p>;
      }
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={postData.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {postData?.content || ''}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
