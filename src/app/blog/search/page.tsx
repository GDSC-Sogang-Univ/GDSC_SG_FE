import { getPostList } from '@/utils/blog/getPostList';
import SearchLayout from './(components)/SearchLayout';
import { getPostTagList } from '@/utils/blog/getPostTagList';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `검색 결과 | GDGoC Sogang 공식 블로그`,
    description: `검색 결과 페이지입니다.`,
  };
}

const SearchPage = async () => {
  const allPost = await getPostList();
  const tags = await getPostTagList();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchLayout postData={allPost} tags={tags} />
    </Suspense>
  );
};

export default SearchPage;
