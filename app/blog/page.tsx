import Link from 'next/link';
import { PostCard } from 'nextra-theme-blog';
import { getPosts, getTags } from './get-posts';

export const metadata = {
  title: 'GDG on Sogang 공식 블로그',
};

// 블로그 메인페이지 디자인이 마음에 들지 않을 경우, Nextra Layout Theme 에서 제외하는 방식으로 자유롭게 커스텀할 수 있습니다.

export default async function PostsPage() {
  const allTagsCount = (await getTags()).reduce((acc: Record<string, number>, curr: string) => {
    acc[curr] ??= 0;
    acc[curr] += 1;
    return acc;
  }, {} as Record<string, number>) as Record<string, number>;

  return (
    <div data-pagefind-ignore="all">
      <h1>GDG on Sogang 공식 블로그</h1>
      <div
        className="_not-prose"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}
      >
        {Object.entries(allTagsCount).map(([tag, count]) => (
          <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
            {tag} ({count})
          </Link>
        ))}
      </div>
      {(await getPosts()).map((post: any) => (
        <PostCard key={post.route} post={post} readMore="" />
      ))}
    </div>
  );
}