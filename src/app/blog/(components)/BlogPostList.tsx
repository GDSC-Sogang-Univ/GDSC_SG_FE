'use client';

import CardIconBtn from '@/components/Blog/PostList/CardIconBtn';
import ListIconBtn from '@/components/Blog/PostList/ListIconBtn';
import VerticalCard from '@/components/Blog/PostCard/VerticalCard';
import { useState } from 'react';
import HorizonCard from '@/components/Blog/PostCard/HorizonCard';
import { PostType } from '@/types/blog';

interface Props {
  data: PostType[];
}

/**
 * post 레이아웃
 */
const BlogPostList = ({ data }: Props) => {
  const [viewType, setViewType] = useState<'card' | 'list'>('card');
  const [sortType, setSortType] = useState<'latest' | 'popular'>('latest');

  return (
    <main className='flex flex-col gap-6 w-full'>
      {/* btn control bar */}
      <section className='flex gap-6 items-center tablet_h:justify-end'>
        {/* view */}
        <div className='flex gap-6 tablet_h:hidden'>
          <CardIconBtn onClick={() => setViewType('card')} isSelected={viewType === 'card'} />
          <ListIconBtn onClick={() => setViewType('list')} isSelected={viewType === 'list'} />
        </div>

        <div className='bg-gdsc-Grey-200 w-[1px] h-5 tablet_h:hidden' />

        {/* sort */}
        <div className='flex gap-3 text-gdsc-Grey-400 tablet_h:text-14'>
          <button onClick={() => setSortType('latest')} className={sortType === 'latest' ? 'text-gdsc-Grey-700' : ''}>
            최신순
          </button>
          <button
            disabled
            onClick={() => setSortType('popular')}
            className={`cursor-not-allowed ${sortType === 'popular' ? 'text-gdsc-Grey-700' : ''}`}
          >
            인기순
          </button>
        </div>
      </section>

      {/* card list */}
      <ul
        className={`w-full ${viewType === 'card' && 'grid grid-cols-3 gap-10'} ${viewType === 'list' && 'flex flex-col gap-12 mobile:gap-5'}`}
      >
        {data.map(post => (
          <li key={post.slug}>
            {viewType === 'card' && (
              <VerticalCard
                category={post.category}
                title={post.title}
                date={post.date}
                author={post.author}
                hearts={6}
                comments={14}
                thumbnail={
                  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-nkpZ6mzVDnmyfZkwRMRnrl2sUNxpX23a73sX6ZjEF82YVog7XZfu-k4TqGl3fQLMZRCe_AoWs5HPo__ktt4Ei_I8K-_wwftNhwNxbw'
                }
              />
            )}

            {viewType === 'list' && (
              <HorizonCard
                category={post.category}
                title={post.title}
                date={post.date}
                author={post.author}
                hearts={6}
                comments={14}
                thumbnail={
                  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-nkpZ6mzVDnmyfZkwRMRnrl2sUNxpX23a73sX6ZjEF82YVog7XZfu-k4TqGl3fQLMZRCe_AoWs5HPo__ktt4Ei_I8K-_wwftNhwNxbw'
                }
                description={post.description}
              />
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogPostList;
