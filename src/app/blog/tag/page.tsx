import { getPostList } from '@/utils/blog/getPostList';
import { getPostTagList } from '@/utils/blog/getPostTagList';
import { Suspense } from 'react';
import { Metadata } from 'next';
import TagLayout from './(components)/TagLayout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `태그 검색 결과 | GDG on Sogang 공식 블로그`,
    description: `태그 검색 결과 페이지입니다.`,
  };
}

const TagPage = async () => {
  const posts = await getPostList();
  const tags = await getPostTagList();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TagLayout posts={posts} tags={tags} />
    </Suspense>
  );
};

export default TagPage;
