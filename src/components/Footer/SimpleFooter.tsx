import Image from 'next/image';
import Link from 'next/link';
import FooterIcon from '@/assets/icon/landing_gdg_footer.svg';
import InstagramIcon from '@/assets/icon/Logo_Instagram.svg';
import ButtonWithHrefLink from '../ButtonWithHrefLink';

const SimpleFooter = () => {
  return (
    <div className='w-full justify-center h-44 bg-[#f9f9f9] flex flex-col items-center shrink-0 mobile:h-fit'>
      <div className='flex justify-between py-12 w-content mobile:w-full mobile:p-4 mobile:flex-col mobile:gap-3'>
        <Image src={FooterIcon} alt='GDSC Sogang Footer Icon' className='mobile:w-[220px]' />
        <span className='flex flex-row items-center gap-10 mobile:justify-between mobile:gap-0'>
          <span className='flex flex-col gap-2 text-P3_KR text-gdsc-Black mobile:text-P4_KR'>
            <span className='flex items-center gap-2 w-[284px]'>
              <span className='basis-[78px] shrink-0'>Instagram</span>
              <span className='h-3 w-[1px] shrink-0 bg-gdsc-Black' />
              <span className='basis-[190px] shrink-0'>@gdg.on.campus_sg</span>
            </span>
            <span className='flex items-center gap-2 w-[284px]'>
              <span className='basis-[78px] shrink-0'>Gmail</span>
              <span className='h-3 w-[1px] shrink-0 bg-gdsc-Black' />
              <span className='basis-[190px] shrink-0'>gdsc.sogang@gmail.com</span>
            </span>
          </span>
          <span className='h-9 w-[1px] bg-[#D9D9D9]' />
          <Link href='https://www.instagram.com/gdg.on.campus_sg/' target='_blank'>
            <Image src={InstagramIcon} alt='GDSC Sogang Instagram Icon' />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SimpleFooter;
