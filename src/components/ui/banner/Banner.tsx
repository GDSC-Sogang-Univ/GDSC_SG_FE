import Image from 'next/image';

const Banner = ({ title, imageSrc }: BannerContent) => {
  return (
    <div className='rounded-2xl shadow-md overflow-hidden'>
      <div>
        <Image src={imageSrc} alt={title} width={328} height={328} className='relative w-full h-full' />
      </div>
      <div className='px-6 py-4'>
        <h6 className='text-gdsc-Grey-700 break-words'>{title}</h6>
      </div>
    </div>
  );
};

export default Banner;
