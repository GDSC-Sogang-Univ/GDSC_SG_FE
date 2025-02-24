import { getPostList } from "./getPostList";

/**
 * @returns 포스트 목록에 등장하는 모든 태그 목록
 */
export const getPostTagList = async () => {
  const posts = await getPostList();
  const tags: string[] = [];

  posts.forEach((post) => {
    tags.push(...post.tags);
  })

  return Array.from(new Set(tags));
}