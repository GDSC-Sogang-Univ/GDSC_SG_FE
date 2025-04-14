import { getPostList } from '@/utils/blog/getPostList';
import { getPostTagList } from '@/utils/blog/getPostTagList';
import BlogPostList from '../../(components)/BlogPostList';
import MobileSearchBar from '@/components/Blog/Header/MobileSearchBar';

export async function generateMetadata(props: any) {
  const params = await props.params;
  return {
    title: `#${decodeURIComponent(params.tagName)} | GDG on Sogang 공식 블로그`,
    description: `#${decodeURIComponent(params.tagName)}에 대한 태그 검색 결과입니다.`,
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
  const tags = await getPostTagList();

  return (
    <>
      <h1 className='text-center text-48 font-bold bg-[#F1F3F4] py-[76px] cp_mobile:text-24'>
        <span className='text-gdsc-Red-500'>#{tagName}</span> 에 대한 결과
      </h1>

      <div className='w-full tablet_v:w-full !max-w-[1440px] py-14 px-[76px] tablet_h:px-7 tablet_h:py-6 cp_mobile:px-5 cp_mobile:py-5'>
        <MobileSearchBar tagList={tags} />
        {filteredPost.length > 0 ? <BlogPostList data={filteredPost} /> : '검색 결과가 없습니다.'}
      </div>
    </>
  );
};

export default TagPage;
