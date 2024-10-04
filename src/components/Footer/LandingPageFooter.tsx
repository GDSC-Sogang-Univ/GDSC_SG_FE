import Image from 'next/image';
import Link from 'next/link';
import FooterIcon from '@/assets/icon/landing_gdg_footer.svg';
import InstagramIcon from '@/assets/icon/Logo_Instagram.svg';
import ButtonWithHrefLink from '../ButtonWithHrefLink';

const LandingPageFooter = () => {
  return (
    <div className='flex h-[569px] w-full shrink-0 flex-col items-center justify-center bg-[#f9f9f9] mobile:h-fit'>
      <div className='mb-20 flex h-full w-content flex-col items-start justify-end mobile:mb-3 mobile:w-full mobile:px-4 mobile:pt-5'>
        <span className='flex flex-col gap-12 mobile:gap-3'>
          <span className='text-gdsc-Black text-H4_KR mobile:text-14 mobile:text-H_KR'>
            GDSC Sogang은 개발자부터 기획자, 디자이너까지
            <br />
            IT 제품과 서비스를 만들고자 하는 모든 서강대학교 학생들을 환영합니다.
          </span>
          <ButtonWithHrefLink hrefLink='https://forms.gle/FBV1BLGTHjgKdH1y9'>Join Now</ButtonWithHrefLink>
        </span>
      </div>
      <div className='h-0.5 w-full border-t border-t-[#767676]' />
      <div className='flex w-content justify-between py-12 mobile:w-full mobile:flex-col mobile:gap-3 mobile:p-4'>
        <Image src={FooterIcon} alt='GDSC Sogang Footer Icon' className='mobile:w-[220px]' />
        <span className='flex flex-row items-center gap-10 mobile:justify-between mobile:gap-0'>
          <span className='flex flex-col gap-2 text-gdsc-Black text-P3_KR mobile:text-P4_KR'>
            <span className='flex w-[284px] items-center gap-2'>
              <span className='shrink-0 basis-[78px]'>Instagram</span>
              <span className='h-3 w-[1px] shrink-0 bg-gdsc-Black' />
              <span className='shrink-0 basis-[190px]'>@gdg.on.campus_sg</span>
            </span>
            <span className='flex w-[284px] items-center gap-2'>
              <span className='shrink-0 basis-[78px]'>Gmail</span>
              <span className='h-3 w-[1px] shrink-0 bg-gdsc-Black' />
              <span className='shrink-0 basis-[190px]'>gdsc.sogang@gmail.com</span>
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

export default LandingPageFooter;
