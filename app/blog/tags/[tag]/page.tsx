import { getPostsForTag, getTags } from "../../get-posts";
import { PostCard } from 'nextra-theme-blog';

export async function generateStaticParams() {
  const tags = await getTags();

  return tags.map((tag: string) => ({
    tag: encodeURIComponent(tag),
  }));
}

async function TagListPage({params}: {params: any}) {
  const tag = params.tag;
  const tagName = decodeURIComponent(tag);

  return (
    <div>
      {(await getPostsForTag(tagName)).map((post: any) => 
          <PostCard key={post.route} post={post} readMore='' />
      )}
    </div>
  );
}

export default TagListPage;
