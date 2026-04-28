import { BlogPostPage } from '@/app/pages/BlogPostPage';

export const metadata = {
  title: 'Blog Post | DenAlign',
  description: 'Read our latest insights and articles',
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <BlogPostPage slug={params.slug} />;
}
