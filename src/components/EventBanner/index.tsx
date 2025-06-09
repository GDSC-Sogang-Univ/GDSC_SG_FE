import Banner from '../ui/banner/Banner';

const bannerContent: BannerContent[] = [
  {
    title: '라인플러스 백엔드 엔지니어 현직자 커리어 세미나',
    date: '24.11.27',
    imageSrc: '/banner/career2.png',
    link: 'https://www.instagram.com/p/DCDpx_DJbAX/?igsh=NHl2ZDBscnFkd2ty',
  },
  {
    title: '제 1회 허들톤 GDGoC X CNU',
    date: '24.10.28 ~ 11.29',
    imageSrc: '/banner/hurdlethon.png',
    link: 'https://www.instagram.com/p/DDQi9LtBWXB/?igsh=ajJranpnYmh4c3o=',
  },
  {
    title: '당근 프론트엔드 엔지니어 현직자 커리어 세미나',
    date: '24.10.28',
    imageSrc: '/banner/career1.png',
    link: 'https://www.instagram.com/p/DA5YuRhpyJy/?igsh=MW5rcm42aDZlZDJoaA==',
  },
];

const EventBanner = () => {
  return (
    <div className='p-9 flex flex-col gap-6 min-h-dvh tablet_h:p-6 tablet_h:gap-5'>
      <p className='font-light text-gdsc-Grey-700 tablet_h:text-14'>가까운 행사</p>
      <section className='flex flex-col gap-9'>
        {bannerContent.map(content => {
          return (
            <Banner
              key={content.title}
              link={content.link}
              date={content.date}
              title={content.title}
              imageSrc={content.imageSrc}
            />
          );
        })}
      </section>
    </div>
  );
};

export default EventBanner;
