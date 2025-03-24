import Image from 'next/image';
import Link from 'next/link';
import FooterIcon from '@/assets/icon/landing_gdg_footer.svg';
import InstagramIcon from '@/assets/icon/Logo_Instagram.svg';
import ButtonWithHrefLink from '../ButtonWithHrefLink';
import { JOIN_LINK } from '@/const/landing/btnLink';

const LandingPageFooter = () => {
  return (
    <div className='bg-[#f9f9f9]'>
      
      <div className='max-w-[1306px] mx-auto flex flex-col gap-11 mt-32 px-8 mb-20 mobile:my-5 mobile:px-4 mobile:gap-3'>
          <span className='text-H4_KR text-gdsc-Black mobile:text-H_KR tablet:text-H5_KR mobile:text-14'>
            GDG on Campus Sogang은 개발자부터 기획자, 디자이너까지
            <br />
            IT 제품과 서비스를 만들고자 하는 모든 서강대학교 학생들을 환영합니다.
          </span>
          <ButtonWithHrefLink hrefLink={JOIN_LINK}>Join Now</ButtonWithHrefLink>
      </div>

      <div className='w-full border-t-[#767676] h-0.5 border-t' />
      
      <div className='max-w-[1306px] mx-auto px-8 flex justify-between mt-12 mb-14 mobile:mt-4 mobile:mb-7 mobile:flex-col mobile:gap-3'>
        <Image src={FooterIcon} alt='GDSC Sogang Footer Icon' className='max-w-[446px] w-1/3 mobile:w-[220px]' />
        <span className='flex items-center gap-10 mobile:justify-between tablet:gap-2'>
          <span className='flex flex-col gap-2 text-P3_KR text-gdsc-Black tablet:text-14 mobile:text-[10px]'>
            <span className='flex items-center gap-2 mobile:gap-1'>
              <span className='w-[78px] tablet:w-[64px] mobile:w-[49px]'>Instagram</span>
              <span className='h-3 w-[1px] bg-gdsc-Black' />
              <span className=''>@gdg.on.campus_sg</span>
            </span>
            <span className='flex items-center gap-2 mobile:gap-1'>
              <span className='w-[78px] tablet:w-[64px] mobile:w-[49px]'>Gmail</span>
              <span className='h-3 w-[1px] bg-gdsc-Black' />
              <span className=''>gdsc.sogang@gmail.com</span>
            </span>
          </span>
          <div className='flex items-center gap-10 tablet:gap-2'>
            <span className='h-9 w-[1px] bg-[#D9D9D9]' />
            <Link href='https://www.instagram.com/gdg.on.campus_sg/' target='_blank'>
              <Image src={InstagramIcon} alt='GDSC Sogang Instagram Icon' className='tablet:w-6 tablet:h-6' />
            </Link>
          </div>
        </span>
      </div>
    </div>
  );
};

export default LandingPageFooter;
