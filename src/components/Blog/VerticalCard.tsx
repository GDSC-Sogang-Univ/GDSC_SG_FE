import dayjs from "dayjs";
import Image from "next/image";
import heartIcon from '@/assets/icon/blog_card_heart.svg';
import commentIcon from '@/assets/icon/blog_card_comment.svg';

interface Props {
  category: string;
  title: string;
  date: string;
  author: string;
  hearts: number;
  comments: number;
  thumbnail: string;
}

const VerticalCard = ({category, title, date, author, hearts, comments, thumbnail}: Props) => {
  return (
    <div className="w-[403px] h-[350px] rounded-[18px] bg-gdsc-White overflow-hidden border border-gdsc-Grey-100">
      
      {/* 정보 영역 */}
      <div className="py-[18px] pl-6 pr-2 flex flex-col justify-between h-[198px]">
        {/* 포스트 타이틀 */}
        <div className="flex flex-col gap-2 pr-4">
          <p className="text-12">{category.toLocaleUpperCase()}</p>
          <h6 className="text-20 font-bold line-clamp-3">{title}</h6>
        </div>

        {/* 포스트 디테일 */}
        <div className="text-14 flex justify-between items-center">
          <div className="flex gap-1 items-center text-gdsc-Grey-900">
            <p>{dayjs(date).format("YYYY.MM.DD")}</p>
            <div className="bg-gdsc-Grey-200 w-[1px] h-3"/>
            <p>{author}</p>
          </div>

          <div className="text-gdsc-Grey-800 flex items-center gap-2">
            <div className="flex gap-[2px] items-center">
              <Image src={heartIcon} alt="좋아요 아이콘"/>
              <p>{hearts}</p>
            </div>
            <div className="bg-gdsc-Grey-200 w-[1px] h-3"/>
            <div className="flex gap-[2px] items-center">
              <Image src={commentIcon} alt="댓글 아이콘"/>
              <p>{comments}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 이미지 영역 */}
      <Image src={thumbnail} alt={title} width={403} height={152}/>
    </div>
  )
}

export default VerticalCard
