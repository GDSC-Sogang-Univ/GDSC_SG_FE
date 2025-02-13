import { Footer, Layout, Navbar } from 'nextra-theme-blog';
import { Head } from 'nextra/components';
import BlogHeader from '@/app/blog/(components)/BlogHeader';
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import 'nextra-theme-blog/style.css';
import '@/styles/blog.css';
import { getTags } from './get-posts';

export const metadata: Metadata = {
  title: 'GDG on Sogang 공식 블로그',
  openGraph: {
    siteName: 'GDG on Sogang 공식 블로그',
    // images: ['/assets/og-image.png'],
  },
  robots: 'follow, index',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const allTagsCount = (await getTags()).reduce(
    (acc: Record<string, number>, curr: string) => {
      acc[curr] ??= 0;
      acc[curr] += 1;
      return acc;
    },
    {} as Record<string, number>,
  ) as Record<string, number>;

  return (
    <html lang="ko" suppressHydrationWarning>
    <Head backgroundColor={{ light: '#ffffff' }}>
    </Head>
    <body>
    <Layout nextThemes={{ forcedTheme: 'light' }} banner={<BlogHeader tagList={allTagsCount}/>}>
      {/* <Navbar
        navs={[
          { url: '/blog/', name: '블로그' },
          { url: '/', name: '홈페이지' },
        ]}
      /> */}
      {children}
      <Footer>
        <time>{new Date().getFullYear()}</time>
        © GDG on Sogang.
      </Footer>
    </Layout>
    </body>
    </html>
  );
}
