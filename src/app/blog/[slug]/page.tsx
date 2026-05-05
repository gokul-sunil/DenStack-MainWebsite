import { BlogPostPage } from '@/app/pages/BlogPostPage';

export const metadata = {
  title: 'Blog Post | DenStack',
  description: 'Read our latest insights and articles',
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostPage slug={slug} />;
}