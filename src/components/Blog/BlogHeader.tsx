'use client';

import xIcon from '@/assets/icon/blog_search_x.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HeaderLogo from '../../assets/icon/blog_gdgsogang_logo.svg';
import WhiteHeaderLogo from '../../assets/icon/blog_gdgsogang_logo_white.svg';
import SearchIcon from '../../assets/icon/blog_search.svg';
import HomepageButton from './HomepageButton';
import LoginButton from './LoginButton';
import { useSearchParams } from 'next/navigation';
import MenuIcon from '@/assets/icon/blog_header_menu.svg';
import CloseIcon from '@/assets/icon/blog_search_x.svg';

interface Props {
  tagList: string[];
}

const BlogHeader = ({ tagList }: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchParams = useSearchParams();
  const searchKeyword = searchParams.get('q');

  useEffect(() => {
    if (searchKeyword) {
      setKeyword(searchKeyword);
    } else setKeyword('');
  }, [searchKeyword]);

  return (
    <section className={`${isFocus && 'bg-gdsc-Black/60 w-full h-full fixed top-0 left-0 z-50'}`}>
      <header
        className={`${isFocus ? '!bg-gdsc-Red-500 !justify-start !items-start' : 'border-b'} flex items-center gap-14 justify-between px-16 py-4 bg-white border-gdsc-Grey-200 tablet_h:px-7 tablet_h:py-5 tablet_h:flex-col tablet_h:justify-normal tablet_h:gap-6`}
      >
        <div className='tablet_h:w-full tablet_h:flex items-center justify-between'>
          {/* 로고 및 제목 */}
          <Link href='/blog/' className='flex items-center gap-3 mobile:gap-2'>
            <Image
              src={isFocus ? WhiteHeaderLogo : HeaderLogo}
              alt='GDGoC Sogang logo'
              className='w-[230px] mobile:w-[164px]'
            />
            <span
              className={`${isFocus ? 'text-gdsc-White' : 'text-gdsc-Grey-800'} whitespace-nowrap text-24 tablet_h:text-16 tablet_h:font-normal`}
            >
              공식 블로그
            </span>
          </Link>

          {/* 모바일용 네비게이션 닫기 버튼 */}
          <button onClick={() => setIsMobileMenuOpen(prev => !prev)} className={`hidden tablet_h:!block`}>
            <Image
              src={isMobileMenuOpen ? CloseIcon : MenuIcon}
              alt={isMobileMenuOpen ? '메뉴 열기' : '메뉴 닫기'}
              className='w-6 h-6'
            />
          </button>
        </div>

        {/* 검색창 및 네비게이션 */}
        <div
          className={`flex items-center gap-14 justify-end ${isFocus && 'w-full !items-start ml-14'} ${isMobileMenuOpen ? 'tablet_h:!block w-full' : 'tablet_h:hidden'}`}
        >
          {/* 검색창 & 태그 리스트 */}
          <div className={`flex flex-col gap-6 ${isFocus ? 'w-full' : 'w-[242px]'} tablet_h:hidden`}>
            {/* 검색창 */}
            <form
              onSubmit={e => {
                e.preventDefault();
                window.location.href = `/blog/search?q=${keyword}`;
              }}
              onBlur={() => setIsFocus(false)}
              onFocus={() => setIsFocus(true)}
              className='relative w-full'
            >
              <div className='absolute top-1/2 left-3 transform -translate-y-1/2'>
                <Image src={SearchIcon} alt='Search Icon' className='w-5 h-5' />
              </div>
              <input
                type='text'
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder={isFocus ? '검색어를 입력해주세요' : '검색하기'}
                className='focus:outline-none pl-[40px] py-[8px] border border-gdsc-Grey-200 rounded-full w-full h-12'
                required
              />
              {isFocus && (
                <div
                  onClick={() => setIsFocus(false)}
                  className='cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2'
                >
                  <Image src={xIcon} alt='Search Icon' className='w-5 h-5' />
                </div>
              )}
            </form>
            {isFocus && (
              <div className='flex flex-wrap gap-5'>
                {tagList.map(tag => (
                  <Link
                    key={tag}
                    onClick={() => {
                      setIsFocus(false);
                      (document.activeElement as HTMLElement)?.blur();
                    }}
                    onMouseDown={e => e.preventDefault()}
                    href={`/blog/tag/${tag}`}
                    className='h-11 border border-gdsc-White rounded-3xl flex items-center px-6 text-gdsc-White hover:bg-gdsc-White/30'
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 네비게이션 */}
          <nav className={`flex items-center gap-4 ${isMobileMenuOpen ? 'flex-col' : 'tablet_h:hidden'}`}>
            <HomepageButton
              hrefLink='/'
              className={
                isFocus
                  ? '!border !border-gdsc-White !text-gdsc-White !bg-opacity-0 hover:!bg-gdsc-White/30 hover:!text-gdsc-White'
                  : ''
              }
            />
            <LoginButton
              hrefLink='/blog'
              className={isFocus ? '!text-gdsc-Red-500 !bg-gdsc-White hover:!bg-gdsc-White/80' : ''}
            />
          </nav>
        </div>
      </header>
    </section>
  );
};

export default BlogHeader;
