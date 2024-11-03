import Image from 'next/image';
import LandingNonAnimateImage from '../../assets/icon/landing_bg_nonanimate.svg';
import MobileLandingImage from '../../assets/icon/landing_mobile_bg.svg';
import AnimatedStar from '../../assets/icon/landing_star.svg';

const BackgroundContent = () => {
  return (
    <div className="fixed flex justify-center w-screen h-screen pointer-events-none -z-10">
      <span className="relative flex justify-center h-full w-content mobile:w-full">
        <span className="absolute -bottom-14 right-[26rem] w-[38vh] aspect-square animate-gdsc-spin mobile:hidden">
          <Image src={AnimatedStar} fill alt="animated star" />
        </span>
        <span className="absolute top-0 right-[5.5rem] w-[23vh] h-[38vh] mobile:hidden">
          <div className="w-full h-full bg-gdsc-Red-700 animate-gdsc-resize"></div>
        </span>
        <span className="absolute top-10 right-[35rem] w-[15.1vh] h-[26.8vh] mobile:hidden">
          <div className="w-full h-full bg-gdsc-Blue-700 animate-gdsc-rounded"></div>
        </span>

        <span className="relative flex justify-end h-full w-content mobile:w-full">
          {/* Mobile Image */}
          <span className="relative h-[100vh] aspect-[1134/1080] mobile:hidden">
            <Image className="object-contain" fill src={LandingNonAnimateImage} alt="landing page image for mobile" />
          </span>
          {/* Desktop Image */}
          <span className="relative w-[100vw] aspect-[751/327] hidden mobile:block">
            <Image className="object-cover" fill src={MobileLandingImage} alt="landing page image for desktop" />
          </span>
        </span>
        {/* 배경 위 반투명 gradient */}
        <span
          className="absolute top-0 left-0 w-3/5 h-full pointer-events-none bg-gradient-to-l from-transparent to-gdsc-White"></span>
      </span>
    </div>
  );
};

export default BackgroundContent;
