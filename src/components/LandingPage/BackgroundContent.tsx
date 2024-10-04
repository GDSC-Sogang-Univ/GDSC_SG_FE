import Image from 'next/image';
import LandingNonAnimateImage from '@/assets/icon/landing_bg_nonanimate.svg';
import MobileLandingImage from '@/assets/icon/landing_mobile_bg.svg';
import AnimatedStar from '@/assets/icon/landing_star.svg';

const BackgroundContent = () => {
  return (
    <div className='pointer-events-none fixed -z-10 flex h-screen w-screen justify-center'>
      <span className='relative flex h-full w-content justify-center mobile:w-full'>
        <span className='absolute -bottom-14 right-[26rem] aspect-square w-[38vh] animate-gdsc-spin mobile:hidden'>
          <Image src={AnimatedStar} fill alt='animated star' />
        </span>
        <span className='absolute right-[5.5rem] top-0 h-[38vh] w-[23vh] mobile:hidden'>
          <div className='h-full w-full animate-gdsc-resize bg-gdsc-Red-700'></div>
        </span>
        <span className='absolute right-[35rem] top-10 h-[26.8vh] w-[15.1vh] mobile:hidden'>
          <div className='h-full w-full animate-gdsc-rounded bg-gdsc-Blue-700'></div>
        </span>

        <span className='relative flex h-full w-content justify-end mobile:w-full'>
          {/* Mobile Image */}
          <span className='relative aspect-[1134/1080] h-[100vh] mobile:hidden'>
            <Image className='object-contain' fill src={LandingNonAnimateImage} alt='landing page image for mobile' />
          </span>
          {/* Desktop Image */}
          <span className='relative hidden aspect-[751/327] w-[100vw] mobile:block'>
            <Image className='object-cover' fill src={MobileLandingImage} alt='landing page image for desktop' />
          </span>
        </span>
        {/* 배경 위 반투명 gradient */}
        <span className='pointer-events-none absolute left-0 top-0 h-full w-3/5 bg-gradient-to-l from-transparent to-gdsc-White'></span>
      </span>
    </div>
  );
};

export default BackgroundContent;
