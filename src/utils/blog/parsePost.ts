import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import { PostType } from '@/types/blog';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// MDX 파일 파싱 : abstract / detail 구분
export const parsePost = async (postPath: string): Promise<PostType> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail } as PostType;
};

// MDX Abstract
// url, cg path, cg name, slug
export const parsePostAbstract = (postPath: string) => {
  // category1/title1/content
  const filePath = postPath.slice(postPath.indexOf(BASE_PATH)).replace(`${BASE_PATH}/`, '').replace('.mdx', '');

  // category1, title1
  const [category, slug] = filePath.split('/');

  // /blog/category1/title1
  const url = `/blog/${category}/${slug}`;

  const thumbnail = `${BASE_PATH}/${category}/${slug}/thumbnail.png`;
  const thumbnailExists = fs.existsSync(path.join(process.cwd(), '/public/posts', category, slug, 'thumbnail.png'));

  return { url, category, slug, thumbnail: thumbnailExists ? thumbnail : '' };
};

// MDX Detail
export const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data;
  return { ...grayMatter, content };
};
