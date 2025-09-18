import Image from 'next/image';
import Link from 'next/link';
import FooterIcon from '@/assets/icon/landing_gdg_footer.svg';
import InstagramIcon from '@/assets/icon/Logo_Instagram.svg';

const SimpleFooter = () => {
  return (
    <div className='max-w-[1306px] mx-auto px-8 flex justify-between pt-12 pb-14 mobile:pt-4 mobile:pb-7 mobile:flex-col mobile:gap-3'>
      <Image src={FooterIcon} alt='GDSC Sogang Footer Icon' className='w-[446px] tablet_h:w-[289px] mobile:w-[220px]' />
      {/* SNS Info  */}
      <div className='flex flex-col gap-2 text-P3_KR text-gdsc-Black tablet:text-14 mobile:!text-[10px]'>
        <span className='flex items-center gap-2 mobile:gap-1'>
          <span className='w-[78px] tablet:w-[64px] mobile:w-[49px]'>Gmail</span>
          <span className='h-3 w-[1px] bg-gdsc-Black' />
          <span className=''>gdsc.sogang@gmail.com</span>
        </span>
        <span className='flex items-center gap-2 mobile:gap-1'>
          <span className='w-[78px] tablet:w-[64px] mobile:w-[49px]'>Instagram</span>
          <span className='h-3 w-[1px] bg-gdsc-Black' />
          <span className=''>@gdg.on.campus_sg</span>
        </span>
      </div>
    </div>
  );
};

export default SimpleFooter;
