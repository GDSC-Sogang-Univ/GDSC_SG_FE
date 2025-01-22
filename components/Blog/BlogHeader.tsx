import Link from 'next/link';
import Image from 'next/image';
import HeaderLogo from '../../assets/icon/blog_gdgsogang_logo.svg';
import LoginButton from './LoginButton';
import HomepageButton from './HompageButton';
import SearchIcon from '../../assets/icon/blog_search.svg';

const BlogHeader = () => {
  return (
    <header className="flex items-center justify-between px-14 py-3.5 bg-white border-b border-gdsc-Grey-200">
      {/* 로고 및 제목 */}
      <div className="flex items-center gap-4">
        <Link href="/blog/" className="flex items-center gap-2">
          <Image src={HeaderLogo} alt="GDGoC Sogang logo" className="h-5.5"/>
          <span className="text-gdsc-Grey-800 text-[21px] font-medium">공식 블로그</span>
        </Link>
      </div>

      {/* 검색창 및 네비게이션 */}
      <div className="flex items-center gap-4">
        {/* 검색창 */}
        <div className="relative mr-8">
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
            <Image src={SearchIcon} alt="Search Icon" className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="검색하기"
            className="pl-[40px] py-[8px] border border-gdsc-Grey-200 rounded-full w-full"
          />
        </div>

        {/* 네비게이션 */}
        <nav className="flex items-center gap-4">
          <HomepageButton hrefLink="/"/>
          <LoginButton hrefLink="/blog/login"/>
        </nav>
      </div>
    </header>
  );
};

export default BlogHeader;
