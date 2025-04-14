'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import heartIcon from '@/assets/icon/blog_card_heart.svg';
import commentIcon from '@/assets/icon/blog_card_comment.svg';
import { PostCardProps } from '@/types/blog';
import Link from 'next/link';

/**
 * 블로그 카드형 목록 post card
 */
const VerticalCard = ({ href, category, title, date, author, hearts, comments, thumbnail }: PostCardProps) => {
  return (
    <Link href={href}>
      <div className='rounded-[18px] bg-gdsc-White overflow-hidden border border-gdsc-Grey-100 '>
        {/* 정보 영역 */}
        <div className='py-[18px] px-6 flex flex-col gap-5'>
          {/* 포스트 타이틀 */}
          <div className='flex flex-col gap-2'>
            <p className='text-12'>{category.toLocaleUpperCase()}</p>
            <h6 className='text-20 font-bold overflow-hidden line-clamp-3 min-h-[80px] text-ellipsis'>{title}</h6>
          </div>

          {/* 포스트 디테일 */}
          <div className='text-14 flex justify-between items-center'>
            <div className='flex gap-1 items-center text-gdsc-Grey-900'>
              <p>{dayjs(date).format('YYYY.MM.DD')}</p>
              <div className='bg-gdsc-Grey-200 w-[1px] h-3' />
              <p className='line-clamp-1'>{author}</p>
            </div>

            <div className='text-gdsc-Grey-800 flex items-center gap-2'>
              <div className='flex gap-[2px] items-center'>
                <Image src={heartIcon} alt='좋아요 아이콘' />
                <p>{hearts}</p>
              </div>
              <div className='bg-gdsc-Grey-200 w-[1px] h-3' />
              <div className='flex gap-[2px] items-center'>
                <Image src={commentIcon} alt='댓글 아이콘' />
                <p>{comments}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 이미지 영역 */}
        <Image
          src={thumbnail}
          alt={title}
          width={403}
          height={152}
          className='max-h-[152px] w-full h-full object-cover'
        />
      </div>
    </Link>
  );
};

export default VerticalCard;
