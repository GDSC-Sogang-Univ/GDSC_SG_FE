import Banner from '../ui/banner/Banner';
import backendSeminar from '@/assets/images/backendSeminar.png';

const bannerContent:BannerContent[] = [
  {title: '라인플러스 백엔드 엔지니어 현직자 커리어 세미나(24.11.27)', imageSrc: backendSeminar},
  {title: '라인플러스 백엔드 엔지니어 현직자 커리어 세미나(24.11.28)', imageSrc: backendSeminar},
  {title: '라인플러스 백엔드 엔지니어 현직자 커리어 세미나(24.11.29)', imageSrc: backendSeminar},
]

const EventBanner = () => {
  return (
    <div className='w-full h-full px-16 py-9 flex flex-col gap-6'>
      <div className='font-light text-gdsc-Grey-700'>가까운 행사</div>
      {bannerContent.map((content) => {
        return(
          <Banner key={content.title} title={content.title} imageSrc={content.imageSrc}/>
        );
      })}
    </div>
  )
}

export default EventBanner;