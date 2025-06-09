'use client';

import { PostType } from '@/types/blog';
import { useSearchParams } from 'next/navigation';
import BlogPostList from '../../(components)/BlogPostList';
import MobileSearchBar from '@/components/Blog/Header/MobileSearchBar';

interface Props {
  postData: PostType[];
  tags: string[];
}

const SearchLayout = ({ postData, tags }: Props) => {
  const params = useSearchParams();
  const filteredPost = postData.filter(post => post.title.toLowerCase().includes(params.get('q')?.toLowerCase() ?? ''));

  return (
    <>
      <h1 className='text-center text-48 font-bold bg-[#F1F3F4] py-[76px] cp_mobile:text-32'>
        <span className='text-gdsc-Red-500'>{params.get('q')}</span> 에 대한 결과
      </h1>
      <div className='w-full mx-auto tablet_v:w-full !max-w-[1440px] py-14 px-[76px] tablet_h:px-7 tablet_h:py-6 cp_mobile:px-5 cp_mobile:py-5'>
        <MobileSearchBar tagList={tags} />
        {filteredPost.length > 0 ? <BlogPostList data={filteredPost} /> : '검색 결과가 없습니다.'}
      </div>
    </>
  );
};

export default SearchLayout;
