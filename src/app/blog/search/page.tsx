import { getPostList } from '@/utils/blog/getPostList';
import SearchLayout from './(components)/SearchLayout';
import { getPostTagList } from '@/utils/blog/getPostTagList';

const SearchPage = async () => {
  const allPost = await getPostList();
  const tags = await getPostTagList();

  return <SearchLayout postData={allPost} tags={tags} />;
};

export default SearchPage;
