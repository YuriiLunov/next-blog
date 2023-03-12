import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import PostHeader from '@/src/pages/PostDetail/components/PostHeader/PostHeader';
import IPostContent from '@/src/pages/PostDetail/components/PostContent/interfaces/IPostContent';
import TMdCustomComponents from '@/src/types/TMdCustomComponents';
import classes from '@/src/pages/PostDetail/components/PostContent/scss/PostContent.module.scss';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent({ postData }: IPostContent) {
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`;

  const customComponents: TMdCustomComponents = {
    p: ({ node, children }) => {
      if (
        node.children?.[0]?.type === 'element' &&
        node.children?.[0]?.tagName === 'img'
      ) {
        const img = node.children?.[0];
        const src = `/images/posts/${postData.slug}/${img.properties?.src}`;
        const alt = (img.properties?.alt as string) || 'post-image';

        return (
          <div className={classes.image}>
            <Image src={src} alt={alt} fill />
          </div>
        );
      } else {
        return <p>{children}</p>;
      }
    },
    code: ({ children, className }) => {
      const language = /language-(\w+)/.exec(className || '')?.[1];
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      );
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
