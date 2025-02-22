import { getPostList } from '@/utils/blog/getPostList';
import { getPostTagList } from '@/utils/blog/getPostTagList';
import BlogPostList from '../../(components)/BlogPostList';

export async function generateMetadata(props: any) {
  const params = await props.params;
  return {
    title: `#${decodeURIComponent(params.tagName)} - GDG on Sogang 공식 블로그`,
  };
}

export async function generateStaticParams() {
  const allTags = await getPostTagList();

  return allTags.map(tag => ({
    tagName: encodeURIComponent(tag),
  }));
}

const TagPage = async ({ params }: { params: any }) => {
  const tagName = decodeURIComponent(params.tagName);
  const posts = await getPostList();
  const filteredPost = posts.filter(post => post.tags.includes(tagName));

  return (
    <>
      <h1 className='text-center text-48 font-bold'>#{tagName}</h1>
      <BlogPostList data={filteredPost} />
    </>
  );
};

export default TagPage;
