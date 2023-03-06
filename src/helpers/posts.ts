import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import IPost from '@/src/interfaces/IPost';

const postDirectory = path.join(process.cwd(), 'content/posts');

const getPostData = (fileName: string) => {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, '');

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
  const postFiles = fs.readdirSync(postDirectory);

  const allPosts = postFiles.map((file) => getPostData(file));

  allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return allPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
