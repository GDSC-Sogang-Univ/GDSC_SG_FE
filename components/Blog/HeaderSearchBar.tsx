'use client';

import Image from 'next/image';
import SearchIcon from '../../assets/icon/blog_search.svg';
import { Search } from 'nextra/components'

function HeaderSearchBar() {
  return (
    // <form className="relative mr-8">
    //         <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
    //           <Image src={SearchIcon} alt="Search Icon" className="w-5 h-5" />
    //         </div>
    //         <input
    //           type="text"
    //           placeholder="검색하기"
    //           className="pl-[40px] py-[8px] border border-gdsc-Grey-200 rounded-full w-full"
    //         />
    //       </form>
    <Search />
  );
}

export default HeaderSearchBar;
