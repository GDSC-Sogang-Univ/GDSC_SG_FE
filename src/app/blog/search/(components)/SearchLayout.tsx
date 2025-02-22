'use client';

import { PostType } from '@/types/blog';
import { useSearchParams } from 'next/navigation';
import BlogPostList from '../../(components)/BlogPostList';

interface Props {
  postData: PostType[];
}

const SearchLayout = ({ postData }: Props) => {
  const params = useSearchParams();
  const filteredPost = postData.filter(post => post.title.toLowerCase().includes(params.get('q')?.toLowerCase() ?? ''));

  return (
    <>
      <h1 className='text-center text-48 font-bold'>🔎 {params.get('q')}</h1>
      {filteredPost.length > 0 ? <BlogPostList data={filteredPost} /> : '검색 결과가 없습니다.'}
    </>
  );
};

export default SearchLayout;
