import { getPostList } from '@/utils/blog/getPostList';
import SearchLayout from './(components)/SearchLayout';

const SearchPage = async () => {
  const allPost = await getPostList();

  return <SearchLayout postData={allPost} />;
};

export default SearchPage;
