export interface PostType {
  url: string;
  category: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  author: string;
  content: string;
}

export interface PostCardProps {
  category: string;
  title: string;
  date: string;
  author: string;
  hearts: number;
  comments: number;
  thumbnail: string;
  description?: string;
}