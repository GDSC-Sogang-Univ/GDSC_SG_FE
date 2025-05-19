import { getPostList } from '@/utils/blog/getPostList';
import SearchLayout from './(components)/SearchLayout';
import { getPostTagList } from '@/utils/blog/getPostTagList';
import { Metadata } from 'next';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  // read route params
  // const q = searchParams.q ?? '';
  // const postInfo = await getPostDetail(category, slug);

  return {
    title: `검색 결과 | GDGoC Sogang 공식 블로그`,
    description: `검색 결과 페이지입니다.`,
  };
}

const SearchPage = async () => {
  const allPost = await getPostList();
  const tags = await getPostTagList();

  return <SearchLayout postData={allPost} tags={tags} />;
};

export default SearchPage;
