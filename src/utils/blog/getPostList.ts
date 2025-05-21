import { sync } from 'glob';
import path from 'path';
import { parsePost } from './parsePost';
import { PostType } from '@/types/blog';

const BASE_PATH = '/public/(posts)';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<PostType[]> => {
  const paths: string[] = getPostPaths(category);
  const posts = await Promise.all(paths.map(postPath => parsePost(postPath)));
  return posts;
};

export const getPostDetail = async (category: string, slug: string): Promise<PostType | undefined> => {
  const postPath = path.join(POSTS_PATH, category, `${slug}/page.mdx`);
  const post = await parsePost(postPath);
  return post;
};
