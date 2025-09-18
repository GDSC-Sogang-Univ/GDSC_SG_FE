'use client';

import { PostType } from '@/types/blog';
import { useSearchParams } from 'next/navigation';
import BlogPostList from '../../(components)/BlogPostList';
import MobileSearchBar from '@/components/Blog/Header/MobileSearchBar';
import { useEffect, useState } from 'react';

interface Props {
  postData: PostType[];
  tags: string[];
}

const SearchLayout = ({ postData, tags }: Props) => {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState<PostType[]>([]);
  const params = useSearchParams();

  useEffect(() => {
    setKeyword(params.get('q')?.toLowerCase() || '');
  }, []);

  useEffect(() => {
    const filteredPost = postData.filter(post => post.title.toLowerCase().includes(keyword));
    setData(filteredPost);
  }, [keyword]);

  return (
    <>
      <h1 className='text-center text-48 font-bold bg-[#F1F3F4] py-[76px] cp_mobile:text-32'>
        <span className='text-gdsc-Red-500'>{keyword}</span> 에 대한 결과
      </h1>
      <div className='w-full mx-auto tablet_v:w-full !max-w-[1440px] py-14 px-[76px] tablet_h:px-7 tablet_h:py-6 cp_mobile:px-5 cp_mobile:py-5'>
        <MobileSearchBar tagList={tags} />
        {data &&
          (data.length > 0 ? (
            <BlogPostList data={data} />
          ) : (
            <div className='text-gdsc-Grey-700 my-12 text-center'>등록된 포스트가 없습니다.</div>
          ))}
      </div>
    </>
  );
};

export default SearchLayout;
