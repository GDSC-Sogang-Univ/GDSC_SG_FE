import { getPostsForTag, getTags } from "../../get-posts";
import { PostCard } from 'nextra-theme-blog';

/**
 * 빌드 시 미리 태그를 가져와 페이지 생성하는 함수
 */
export async function generateStaticParams() {
  const tagList = await getTags();

  return tagList.map((tag: string) => ({
    tag: encodeURIComponent(tag),
  }));
}

async function TagListPage({params}: {params: {tag: string}}) {
  const tagName = decodeURIComponent(params.tag);

  return (
    <div>
      {(await getPostsForTag(tagName)).map((post: any) => 
          <PostCard key={post.route} post={post} readMore='' />
      )}
    </div>
  );
}

export default TagListPage;
