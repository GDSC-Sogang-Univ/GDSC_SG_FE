import { getPostList } from '@/utils/blog/getPostList';
import BlogPostList from './(components)/BlogPostList';
import SideWrapper from './(components)/SideWrapper';
import MobileSearchBar from '@/components/Blog/Header/MobileSearchBar';
import { getPostTagList } from '@/utils/blog/getPostTagList';

async function BlogMainPage() {
  const posts = await getPostList();
  const tags = await getPostTagList();

  return (
    <div className='flex'>
      <SideWrapper />
      <div className='w-full tablet_v:w-full !max-w-[1440px] py-9 px-[76px] tablet_h:px-7 tablet_h:py-6 cp_mobile:px-5 cp_mobile:py-5'>
        <MobileSearchBar tagList={tags} />
        <BlogPostList data={posts} />
      </div>
    </div>
  );
}

export default BlogMainPage;
