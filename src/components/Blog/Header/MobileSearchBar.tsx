'use client';

import xIcon from '@/assets/icon/blog_search_x.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SearchIcon from '@/assets/icon/blog_search.svg';

interface Props {
  tagList: string[];
}

/**
 * SearchBar & tag list
 */
const MobileSearchBar = ({ tagList }: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [keyword, setKeyword] = useState('');

  return (
    <div className={`flex-col gap-4 hidden tablet_h:flex mb-5`}>
      {/* 검색창 */}
      <form
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          console.log(keyword);
          window.location.href = `/blog/search?q=${keyword}`;
        }}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        className='relative'
      >
        <div className='absolute top-1/2 left-3 transform -translate-y-1/2'>
          <Image src={SearchIcon} alt='Search Icon' className='w-5 h-5' />
        </div>
        <input
          type='text'
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder={'검색어를 입력해주세요'}
          className='focus:outline-none px-[40px] py-[8px] border border-gdsc-Grey-200 rounded-full w-full h-12'
          required
        />
        {keyword && (
          <div
            onClick={e => {
              setKeyword('');
            }}
            className='cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2'
          >
            <Image src={xIcon} alt='Search Icon' className='w-5 h-5' />
          </div>
        )}
      </form>

      {/* tag list */}
      <div className='overflow-x-scroll'>
        <div className='flex flex-nowrap gap-2'>
          {tagList.map(tag => (
            <Link
              key={tag}
              onClick={() => {
                setIsFocus(false);
                (document.activeElement as HTMLElement)?.blur();
              }}
              onMouseDown={e => e.preventDefault()}
              href={`/blog/tag?tag=${tag}`}
              className='h-[34px] border whitespace-nowrap border-gdsc-Grey-100 rounded-3xl flex items-center px-4 text-12 text-gdsc-Grey-700 hover:bg-gdsc-White/30'
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSearchBar;
