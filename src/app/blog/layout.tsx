import BlogFooter from '@/components/Blog/Footer';
import BlogHeader from '@/components/Blog/Header/BlogHeader';
import { getPostTagList } from '@/utils/blog/getPostTagList';
import { Metadata } from 'next';
import 'highlight.js/styles/vs2015.css';

export const metadata: Metadata = {
  title: 'GDG on Sogang 공식 블로그',
  openGraph: {
    title: 'GDG on Sogang 공식 블로그',
    siteName: 'GDG on Sogang 공식 블로그',
    images: ['/og-image.png'],
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
    <>
      <BlogHeader tagList={tags} />
      <main className='min-h-dvh'>{children}</main>
      <BlogFooter />
    </>
  );
}

export default BlogLayout;
