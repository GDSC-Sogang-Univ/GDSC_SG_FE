import ButtonWithHrefLink from '../ButtonWithHrefLink';
import { JOIN_LINK } from '@/const/landing/btnLink';
import SimpleFooter from './SimpleFooter';

const LandingPageFooter = () => {
  return (
    <footer className='bg-[#f9f9f9]'>
      <div className='max-w-[1306px] mx-auto flex flex-col gap-11 pt-32 px-8 pb-20 mobile:my-5 mobile:px-4 mobile:gap-3'>
        <span className='text-H4_KR text-gdsc-Black mobile:text-H_KR tablet:text-H5_KR mobile:text-14'>
          GDG on Campus Sogang은 개발자부터 기획자, 디자이너까지
          <br />
          IT 제품과 서비스를 만들고자 하는 모든 서강대학교 학생들을 환영합니다.
        </span>
        <ButtonWithHrefLink hrefLink={JOIN_LINK}>Join Now</ButtonWithHrefLink>
      </div>

      <div className='w-full border-t-[#767676] h-0.5 border-t' />

      <SimpleFooter />
    </footer>
  );
};

export default LandingPageFooter;
