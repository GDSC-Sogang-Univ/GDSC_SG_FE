'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CommentType } from '@/app/blog/detail/[category]/[slug]/page';

interface DetailPageCommentListProps {
  comments: CommentType[];
}

const COMMENTS_PER_PAGE = 5;

const DetailPageCommentList: React.FC<DetailPageCommentListProps> = ({ comments }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);

  // 현재 페이지에 표시할 댓글 계산
  const currentPageComments = comments.slice((currentPage - 1) * COMMENTS_PER_PAGE, currentPage * COMMENTS_PER_PAGE);

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      {currentPageComments.map(comment => (
        <div
          key={comment.id}
          className='flex flex-col gap-3 px-[24px] py-[18px] rounded-[18px] bg-white border border-gdsc-Grey-100'
        >
          <div className='flex gap-4'>
            <Image
              src={comment.profileImage}
              alt={`${comment.author}의 프로필 이미지`}
              width={40}
              height={40}
              className='rounded-full object-cover'
            />
            <div className='font-semibold text-gdsc-Grey-900 text-[18px]'>{comment.author}</div>
          </div>
          <p className='m-0 text-[16px] text-gdsc-Grey-700 leading-relaxed'>{comment.content}</p>
          <div className='text-[12px] text-gdsc-Grey-400'>{comment.date}</div>
        </div>
      ))}

      {totalPages > 1 && (
        <div className='flex justify-center items-center mt-6 gap-2'>
          <button onClick={() => handlePageChange(1)} className='w-8 h-8 flex items-center justify-center'>
            <DoubleArrowIcon direction='left' />
          </button>
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`w-8 h-8 flex items-center justify-center ${currentPage === 1 ? 'opacity-50 cursor-default' : 'hover:bg-gray-100'}`}
          >
            <ArrowIcon direction='left' />
          </button>

          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum = i + 1;
            if (totalPages > 5) {
              if (currentPage > 3) {
                pageNum = currentPage - 3 + i;
              }
              if (currentPage > totalPages - 2) {
                pageNum = totalPages - 4 + i;
              }
            }

            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-8 h-8 flex items-center justify-center rounded-full
                  ${currentPage === pageNum ? 'text-gdsc-Grey-600' : 'text-gdsc-Grey-200'}`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`w-8 h-8 flex items-center justify-center ${currentPage === totalPages ? 'opacity-50 cursor-default' : 'hover:bg-gray-100'}`}
          >
            <ArrowIcon direction='right' />
          </button>
          <button onClick={() => handlePageChange(totalPages)} className='w-8 h-8 flex items-center justify-center'>
            <DoubleArrowIcon direction='right' />
          </button>
        </div>
      )}
    </div>
  );
};

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
  >
    <path d='M9 18L15 12L9 6' stroke='#666' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const DoubleArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
  >
    <path d='M13 17L18 12L13 7' stroke='#666' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 17L11 12L6 7' stroke='#666' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

export default DetailPageCommentList;
