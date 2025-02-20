import { getPostList } from '@/utils/blog/getPostList';
import BlogPostList from './(components)/BlogPostList';
import SideWrapper from './(components)/SideWrapper';

async function BlogMainPage() {
  const posts = await getPostList();

  return (
    <div className='flex'>
      <SideWrapper />
      <BlogPostList data={posts} />
    </div>
  );
}

export default BlogMainPage;
