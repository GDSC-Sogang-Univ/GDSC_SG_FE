import { getPostDetail, getPostList } from '@/utils/blog/getPostList';
import PostBody from './(components)/PostBody';

export async function generateStaticParams() {
  const allPost = await getPostList();

  return allPost.map(post => ({
    category: post.category,
    slug: post.slug,
  }));
}

const PostDetailPage = async ({ params }: { params: { category: string; slug: string } }) => {
  const { category, slug } = params;
  const post = await getPostDetail(category, slug);

  if (!post) {
    return <div>Not Found</div>;
  }
  return (
    <div>
      <h1>Category: {params.category}</h1>
      <h2>Slug: {params.slug}</h2>
      <PostBody content={post.content} />
    </div>
  );
};

export default PostDetailPage;
