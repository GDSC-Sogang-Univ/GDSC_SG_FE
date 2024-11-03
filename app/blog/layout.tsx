import { Footer, Layout, Navbar } from 'nextra-theme-blog';
import { Head } from 'nextra/components';
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import 'nextra-theme-blog/style.css';
import '@/styles/blog.css';

export const metadata: Metadata = {
  title: 'GDG on Sogang 공식 블로그',
  openGraph: {
    siteName: 'GDG on Sogang 공식 블로그',
    // images: ['/assets/og-image.png'],
  },
  robots: 'follow, index',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" suppressHydrationWarning>
    <Head backgroundColor={{ light: '#ffffff' }}>
    </Head>
    <body>
    <Layout nextThemes={{ forcedTheme: 'light' }}>
      <Navbar
        navs={[
          { url: '/blog', name: '블로그' },
          { url: '/', name: '홈페이지' },
        ]}
      />
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