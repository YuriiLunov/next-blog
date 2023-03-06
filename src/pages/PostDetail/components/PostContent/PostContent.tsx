import PostHeader from '@/src/pages/PostDetail/components/PostHeader/PostHeader';
import IPostContent from '@/src/pages/PostDetail/components/PostContent/interfaces/IPostContent';
import classes from '@/src/pages/PostDetail/components/PostContent/scss/PostContent.module.scss';

function PostContent({ postData }: IPostContent) {
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={postData.title} image={imagePath} />
      {postData.content}
    </article>
  );
}

export default PostContent;
