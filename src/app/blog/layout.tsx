import BlogHeader from "@/components/Blog/BlogHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'GDG on Sogang 공식 블로그',
  openGraph: {
    siteName: 'GDG on Sogang 공식 블로그',
    // images: ['/assets/og-image.png'],
  },
  robots: 'follow, index',
};

function BlogLayout() {
  return (
    <div>
      <BlogHeader />
    </div>
  )
}

export default BlogLayout
