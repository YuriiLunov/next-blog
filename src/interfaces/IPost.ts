export default interface IPost {
  title: string;
  content: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
  isFeatured?: boolean;
}
