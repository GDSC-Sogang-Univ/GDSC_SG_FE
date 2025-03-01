import dayjs from 'dayjs';
import Image from 'next/image';
import heartIcon from '@/assets/icon/blog_card_heart.svg';
import commentIcon from '@/assets/icon/blog_card_comment.svg';
import { PostCardProps } from '@/types/blog';

const HorizonCard = ({ category, title, date, author, hearts, comments, thumbnail, description }: PostCardProps) => {
  return (
    <div className='bg-gdsc-White overflow-hidden flex gap-3 mobile:flex-col mobile:gap-0'>
      {/* 이미지 영역 */}
      <Image
        src={thumbnail}
        alt={title}
        width={426}
        height={222}
        className='max-h-[222px] max-w-[426px] w-1/3 object-cover rounded-3xl mobile:w-full mobile:max-h-[146px]'
      />

      {/* 정보 영역 */}
      <div className='py-5 px-6 flex flex-col gap-3 max-h-[222px] w-2/3 mobile:w-full mobile:py-3 mobile:px-3 mobile:gap-1'>
        {/* 포스트 타이틀 & 소주제 */}
        <div className='flex flex-col gap-2 h-[147px] mobile:h-[76px]'>
          <h6 className='text-20 font-bold line-clamp-2 mobile:text-16 mobile:line-clamp-3'>{title}</h6>
          <p className='text-14 text-gdsc-Grey-900 mobile:hidden'>{description}</p>
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
    </div>
  );
};
export default HorizonCard;
