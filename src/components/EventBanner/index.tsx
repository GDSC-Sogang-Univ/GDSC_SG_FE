import Banner from '../ui/banner/Banner';

const bannerContent: BannerContent[] = [
  {
    title: 'Build With AI For Everyone',
    date: '25.05.17',
    imageSrc: '/banner/bai.png',
    link: 'https://www.instagram.com/p/DKLr3UnhCH9/?img_index=1',
  },
  {
    title: 'Membership Training',
    date: '25.03.28',
    imageSrc: '/banner/mt.png',
    link: 'https://www.instagram.com/p/DH8visJSZnU/?img_index=1',
  },
  {
    title: '개강총회',
    date: '25.03.14',
    imageSrc: '/banner/ot.png',
    link: 'https://www.instagram.com/p/DHhhHs6hqom/?img_index=1',
  },
];

const EventBanner = () => {
  return (
    <div className='p-9 flex flex-col gap-6 min-h-dvh tablet_h:p-6 tablet_h:gap-5'>
      <p className='font-light text-gdsc-Grey-700 tablet_h:text-14'>최근 행사</p>
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
