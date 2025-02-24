import BlogHeader from '@/components/Blog/BlogHeader';
import { getPostTagList } from '@/utils/blog/getPostTagList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDG on Sogang 공식 블로그',
  openGraph: {
    siteName: 'GDG on Sogang 공식 블로그',
    // images: ['/assets/og-image.png'],
  },
  robots: 'follow, index',
};

async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tags = await getPostTagList();

  return (
    <div>
      <BlogHeader tagList={tags} />
      {children}
    </div>
  );
}

export default BlogLayout;
