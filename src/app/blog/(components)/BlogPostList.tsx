'use client';

import CardIconBtn from '@/components/Blog/PostList/CardIconBtn';
import ListIconBtn from '@/components/Blog/PostList/ListIconBtn';
import VerticalCard from '@/components/Blog/VerticalCard';
import { useState } from 'react';

interface Props {
  data: any[];
}

/**
 * post 레이아웃
 */
const BlogPostList = ({ data }: Props) => {
  const [viewType, setViewType] = useState<'card' | 'list'>('card');
  const [sortType, setSortType] = useState<'latest' | 'popular'>('latest');

  return (
    <main className='flex flex-col gap-6 pt-9 px-[76px] w-full'>
      {/* btn control bar */}
      <section className='flex gap-6 items-center'>
        {/* view */}
        <div className='flex gap-6'>
          <CardIconBtn onClick={() => setViewType('card')} isSelected={viewType === 'card'} />
          <ListIconBtn onClick={() => setViewType('list')} isSelected={viewType === 'list'} />
        </div>

        <div className='bg-gdsc-Grey-200 w-[1px] h-5' />

        {/* sort */}
        <div className='flex gap-3 text-gdsc-Grey-400'>
          <button onClick={() => setSortType('latest')} className={sortType === 'latest' ? 'text-gdsc-Grey-700' : ''}>
            최신순
          </button>
          <button onClick={() => setSortType('popular')} className={sortType === 'popular' ? 'text-gdsc-Grey-700' : ''}>
            인기순
          </button>
        </div>
      </section>

      {/* card list */}
      {viewType === 'card' && (
        <ul className='grid grid-cols-3 gap-10 w-full'>
          {data.map(post => (
            <li key={post.slug}>
              <VerticalCard
                category={post.category}
                title={post.title}
                date={post.date}
                author={post.author}
                hearts={6}
                comments={14}
                thumbnail={'/og-image.png'}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default BlogPostList;
