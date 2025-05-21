'use client';

import { useState } from 'react';
import heartIcon from '@/assets/icon/blog_card_heart.svg';
import commentIcon from '@/assets/icon/blog_card_comment.svg';
import Image from 'next/image';

export default function DetailPageComment() {
  const [comment, setComment] = useState('');
  const DUMMYHEARTCNT = 0;
  const DUMMYCOMMENTCNT = 0;
  return (
    <>
      <div className='flex gap-[40px] items-center text-gdsc-Grey-600 cp_mobile:gap-7'>
        <div className='flex gap-3 items-center'>
          <button disabled className='p-3 border border-gdsc-Grey-600 rounded-full w-12 h-12 cursor-not-allowed'>
            <Image src={heartIcon} alt='좋아요 아이콘' />
          </button>
          <div className='text-[18px]'>{DUMMYHEARTCNT}</div>
        </div>
        <div className='text-gdsc-Gray-200'>|</div>
        <div className='flex gap-3 items-center'>
          <Image src={commentIcon} alt='댓글 아이콘' />
          <div className='text-[18px]'>{DUMMYCOMMENTCNT}</div>
        </div>
      </div>
      <section className='w-full flex flex-col gap-3'>
        <textarea
          className='w-full h-[118px] border border-gdsc-Grey-700 placeholder:text-gdsc-Gray-300 px-3 py-4 outline-none resize-none rounded-md'
          placeholder={`추후 추가 예정 기능입니다.\n보다 나은 서비스를 위해 준비 중이니, 조금만 기다려 주세요!`}
          value={comment}
          onChange={e => setComment(e.target.value)}
        ></textarea>
        <div className='flex justify-between w-full'>
          <div>
            <div className='text-gdsc-Grey-600'>{comment.length}/500</div>
          </div>
          <button
            disabled
            className='cursor-not-allowed bg-gdsc-Grey-200 text-gdsc-White px-[20px] py-[10px] rounded-[32px] text-[18px] leading-relaxed'
          >
            댓글 작성
          </button>
        </div>
      </section>
    </>
  );
}
