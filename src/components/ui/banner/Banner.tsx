import Image from 'next/image';
import Link from 'next/link';

const Banner = ({ title, imageSrc, date, link }: BannerContent) => {
  return (
    <Link href={link} className='rounded-2xl shadow-md overflow-hidden'>
      <div>
        <Image src={imageSrc} alt={title} width={328} height={328} className='relative w-full h-full' />
      </div>
      <div className='px-6 py-4'>
        <div className='text-gdsc-Grey-700 break-word line-clamp-3 tablet_h:line-clamp-2 leading-[180%] tablet_h:text-14'>
          <p>{title}</p>
          <p>({date})</p>
        </div>
      </div>
    </Link>
  );
};

export default Banner;
