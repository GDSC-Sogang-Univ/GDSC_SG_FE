import defaultThumbnail from '@/public/og-image.png';
import Link from 'next/link';

interface Props {
  route: string;
  thumbnail?: string;
  title: string;
  author: string;
  date: string;
  heart: number;
  comment: number;
  view: number;
}

/**
 * 블로그 - Card형
 * @param heart 하트 개수
 * @param comment 댓글 개수
 * @param view 조회수
 */
function BoxCard({ route, thumbnail, title, author, date, heart, comment, view }: Props) {
  return (
    <Link href={route}>
      <div className='flex-col border'>
        <img src={thumbnail || defaultThumbnail.src} alt={`${title} 썸네일 이미지`} width={600} height={400} />
        <div className='flex-col gap-1'>
          <h6 className='font-bold'>{title}</h6>
          <div className='flex justify-between'>
            <p>{author}</p>
            <p>{date}</p>
          </div>
          <div className='flex gap-2'>
            <p>하트 {heart}</p>
            <p>댓글 {comment}</p>
            <p>조회수 {view}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BoxCard;
