import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import IPost from '@/src/interfaces/IPost';

const postDirectory = path.join(process.cwd(), 'content/posts');

export const getPostsFiles = () => fs.readdirSync(postDirectory);

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData: IPost = {
    title: data.title,
    date: data.date,
    image: data.image,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured,
    slug: postSlug,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((file) => getPostData(file));

  allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return allPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
