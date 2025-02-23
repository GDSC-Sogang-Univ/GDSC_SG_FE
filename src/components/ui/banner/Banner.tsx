import Image from 'next/image';

const Banner = ({title, imageSrc}: BannerContent) => {
  return (
    <div className='flex flex-col items-center rounded-2xl shadow-md overflow-hidden'>
      <div className=''>
      <Image src={imageSrc} alt={title} width={300} height={300} />
      </div>
      <div className='px-6 py-4'>
        <h2 className='text-gdsc-Grey-800'>{title}</h2>
      </div>
    </div>
  )
}

export default Banner;