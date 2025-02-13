'use client';

import Link from 'next/link';
import Image from 'next/image';
import HeaderLogo from '../../../assets/icon/blog_gdgsogang_logo.svg';
import WhiteHeaderLogo from '../../../assets/icon/blog_gdgsogang_logo_white.svg';
import LoginButton from '../../../components/Blog/LoginButton';
import HomepageButton from '../../../components/Blog/HompageButton';
import SearchIcon from '../../../assets/icon/blog_search.svg';
import { Search } from 'nextra/components';
import { useState } from 'react';

interface Props {
  tagList: any;
}

const BlogHeader = ({tagList}: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <header className="focus-within:bg-gdsc-Red-500 focus-within:justify-start flex items-center gap-14 justify-between px-14 py-3.5 bg-white border-b border-gdsc-Grey-200">
      {/* 로고 및 제목 */}
      <div className="flex items-center gap-4 w-[358px] shrink-0">
        <Link href="/blog/" className="flex items-center gap-2">
          <Image src={isFocus ? WhiteHeaderLogo : HeaderLogo} alt="GDGoC Sogang logo" className="h-5.5"/>
          <span className={`${isFocus ? 'text-gdsc-White' : 'text-gdsc-Grey-800'} text-[21px] font-medium`}>공식 블로그</span>
        </Link>
      </div>

      {/* 검색창 및 네비게이션 */}
      <div className={`flex items-center gap-14 justify-end ${isFocus && 'w-full'}`}>
        {/* 검색창 */}
        <div className={`flex flex-col gap-6 ${isFocus ? 'w-full' : 'w-[242px]'}`}>
          <form onBlur={() => setIsFocus(false)} onFocus={() => setIsFocus(true)} className="relative w-full">
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                <Image src={SearchIcon} alt="Search Icon" className="w-5 h-5" />
              </div>
              <Search placeholder='검색하기' className='focus:outline-none focus:bg-gdsc-White pl-[40px] py-[8px] border border-gdsc-Grey-200 rounded-full w-full' />
              {/* <input
                type="text"
                placeholder={isFocus ? "검색어를 입력해주세요" : "검색하기"}
                className="focus:outline-none pl-[40px] py-[8px] border border-gdsc-Grey-200 rounded-full w-full"
              /> */}
          </form>
          {isFocus && 
            <div className='flex flex-wrap gap-5'>
              {Object.entries(tagList).map(([tag, count]) => (
                <Link 
                  onClick={() => {
                    setIsFocus(false);
                    (document.activeElement as HTMLElement)?.blur();
                  }} 
                  onMouseDown={(e) => e.preventDefault()}
                  key={tag}
                  href={`/blog/tags/${tag}`} 
                  className='border border-gdsc-White rounded-3xl py-3 px-6 text-gdsc-White hover:bg-gdsc-White/30'>
                  {tag}
                </Link>
              ))}
            </div>
          }
      </div>
        
        {/* 네비게이션 */}
        <nav className="flex items-center gap-4">
          <HomepageButton hrefLink="/" className={isFocus ? '!text-gdsc-White !bg-opacity-0 hover:!bg-gdsc-White/30 hover:!text-gdsc-White' : ''}/>
          <LoginButton hrefLink="/blog" className={isFocus ? '!text-gdsc-Red-500 !bg-gdsc-White hover:!bg-gdsc-White/80' : ''}/>
        </nav>
      </div>
    </header>
  );
};

export default BlogHeader;
