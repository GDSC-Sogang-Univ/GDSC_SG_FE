import { getPostList } from '@/utils/blog/getPostList';
import BlogPostList from './(components)/BlogPostList';

async function BlogMainPage() {
  const posts = await getPostList();

  return (
    <div>
      <BlogPostList data={posts} />
    </div>
  );
}

export default BlogMainPage;
