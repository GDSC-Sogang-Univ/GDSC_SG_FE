import Image from 'next/image';
import seminarIcon from '@/assets/icon/landing_seminar.svg';
import hackatonIcon from '@/assets/icon/landing_hackaton.svg';
import gfdIcon from '@/assets/icon/landing_gfd.svg';
import gfdStarIcon from '@/assets/icon/landing_gfd_star.svg';
import studyIcon from '@/assets/icon/landing_study.svg';
import ButtonWithHrefLink from '../ButtonWithHrefLink';
import { JOIN_LINK } from '@/const/landing/link';
interface LogoTitleProps {
  icon: any;
  iconSizeStyle: string;
  title: string;
  titleCustomStyle?: string;
}

const LogoTitle = ({ icon, iconSizeStyle, title, titleCustomStyle }: LogoTitleProps) => {
  const iconStyle = `relative ` + iconSizeStyle;
  const titleStyle = `absolute z-10 ` + titleCustomStyle;
  return (
    <div className='relative'>
      <div className={iconStyle}>
        <Image alt={`${title} icon`} className='w-full h-full' src={icon} />
      </div>
      <div className={titleStyle}>
        <span className='text-gdsc-White'>{title.slice(0, 1)}</span>
        {title.slice(1)}
      </div>
    </div>
  );
};

const GFDTitle = () => {
  return (
    <>
      <div className='relative'>
        <div className='relative h-[95px] w-[95px] mobile:h-10 mobile:w-10'>
          <Image alt={`Google For Developers icon1`} className='w-full h-full' src={gfdIcon} />
        </div>
        <div className='absolute -bottom-6 left-[34px] z-10 mobile:-bottom-[10px] mobile:left-[13px]'>
          <span className='text-gdsc-White'>G</span>
          oogle
          <br />
          <div className='absolute -right-12 bottom-5 h-[41px] w-[41px] rotate-6 mobile:h-[22px] mobile:w-[22px] mobile:-right-7 mobile:bottom-3'>
            <Image alt={`Google For Developers icon2`} className='w-full h-full' src={gfdStarIcon} />
          </div>
        </div>
      </div>
      <div className='whitespace-nowrap pl-[34px] mobile:pl-4'>For Developers</div>
    </>
  );
};

interface TitleDetailBodyProps {
  data: {
    title: string;
    detail: string;
  }[];
}

const TitleDetailBody = ({ data }: TitleDetailBodyProps) => {
  return (
    <div className='flex flex-col gap-8'>
      {data.map(({ title, detail }) => (
        <div key={title} className='flex flex-col gap-1'>
          <h6 className='text-gdsc-Grey-800 text-H3_KR mobile:text-H5_KR mobile:whitespace-pre-wrap'>{title}</h6>
          <p className='whitespace-pre-wrap break-keep text-gdsc-Grey-600 text-P3_KR mobile:text-P4_KR mobile:max-w-[291px]'>
            {detail}
          </p>
        </div>
      ))}
    </div>
  );
};

const HackatonBody = () => {
  return (
    <p className='font-ko text-24 text-gdsc-Grey-600 mobile:text-14'>
      난이도별 해커톤 및<br />타 GDG Campus와의 연합 해커톤을 진행합니다.
    </p>
  );
};

const GFDBody = () => {
  return (
    <p className='break-words break-keep text-24 text-gdsc-Grey-600 mobile:text-14'>
      GDG Sogang은 국내외 Google 생태계 내
      <br />
      개발 관련 단체와 연합행사들을 기획 중에 있습니다.
      <br />
      <br />
      GDG, GDE, 국/내외 GDG on campus와
      <br />
      콜라보를 진행합니다.
    </p>
  );
};

// 세미나 내용
const SEMINAR_TYPE = [
  {
    title: '파트별 세미나 (TBD)',
    detail: '월마다 각자의 인사이트를 공유하는 자리입니다.',
  },
  {
    title: 'Career Seminar',
    detail: '파트별 현직자를 모셔서 커리어에 대해 공유하는 자리입니다.',
  },
];

const STUDY_BODY = [
  {
    title: '공부하고 싶은데 \n함께할 팀원이 없나요?',
    detail: `커뮤니티원과 함께 자유 주제로 학습할 수 있는 자율 스터디에 참가해보세요!\n(UI/UX, Marketing, Web, AI,ML, etc!)`,
  },
];

export const SCROLL_CONTENT_LIST = [
  {
    type: 'Mainpage',
    title: <span className='text-[120px] font-bold mobile:text-[60px]'>GDG</span>,
    subtitle: (
      <span className='text-H2_EN mobile:text-H4_EN'>
        on Campus <span className='text-gdsc-Red-500'>Sogang</span>
      </span>
    ),
    body: (
      <>
        <span className='whitespace-pre-wrap text-P3_KR text-gdsc-Grey-600 mobile:hidden'>
          GDG on Campus Sogang은 2024년 10월 정식으로 출범할 서강대학교 IT 커뮤니티입니다. {'\n'}서강대학교 재학생 중
          IT에 관심이 있는 학생들의 오아시스가 되기 위한 커뮤니티를 만들어나가고 있습니다.
        </span>
        <span className='hidden mobile:block whitespace-pre-wrap text-P4_KR text-gdsc-Grey-600'>
          GDG on Campus Sogang은 2024년 10월
          <br /> 정식으로 출범할 서강대학교 IT 커뮤니티입니다.
          <br /> 서강대학교 재학생 중 IT에 관심이 있는 학생들의
          <br /> 오아시스가 되기 위한 커뮤니티를 만들어나가고 있습니다.
        </span>
      </>
    ),
    isDoubleBtn: true,
    btn1: <ButtonWithHrefLink hrefLink={JOIN_LINK}>Join Now</ButtonWithHrefLink>,
    btn2: <ButtonWithHrefLink hrefLink='https://almond-humor-471.notion.site/'>Learn More</ButtonWithHrefLink>,
  },
  {
    type: 'Study',
    title: (
      <LogoTitle
        title='Saint Study'
        icon={studyIcon}
        iconSizeStyle='w-[46px] h-[91px] mobile:w-[22px] mobile:h-11'
        titleCustomStyle='-bottom-6 left-2 mobile:-bottom-2 mobile:left-1'
      />
    ),
    body: <TitleDetailBody data={STUDY_BODY} />,
    btnText: 'Saint Study',
    btnClickLink: 'https://gdgoncampus-sg.oopy.io/saintstu',
    hoverColor: 'hover:bg-[#3F74E0]',
  },
  {
    type: 'Seminar',
    title: (
      <LogoTitle
        title='Seminar'
        icon={seminarIcon}
        iconSizeStyle='w-[68px] h-[82px] mobile:w-[30px] mobile:h-9'
        titleCustomStyle='-bottom-8 left-8 mobile:-bottom-[14px] mobile:left-[13px]'
      />
    ),
    body: <TitleDetailBody data={SEMINAR_TYPE} />,
    btnText: 'Seminar',
    btnClickLink: 'https://gdgoncampus-sg.oopy.io/seminar',
    hoverColor: 'hover:bg-[#EA4435]',
  },
  {
    type: 'Hackaton',
    title: (
      <LogoTitle
        title='Hackaton'
        icon={hackatonIcon}
        iconSizeStyle='w-[105px] h-[105px] mobile:w-[48px] mobile:h-[48px]'
        titleCustomStyle='-bottom-5 left-11 mobile:-bottom-[10px] mobile:left-[18px]'
      />
    ),
    body: <HackatonBody />,
    btnText: 'Hackaton',
    btnClickLink: 'https://gdgoncampus-sg.oopy.io/9244d2cd-ef8f-408c-b54a-a7faef2e6140',
    hoverColor: 'hover:bg-[#F9AB00]',
  },
  {
    type: 'GFD',
    title: <GFDTitle />,
    body: <GFDBody />,
    btnText: 'Google For Developers',
    btnClickLink: 'https://developers.google.com/?hl=ko',
    hoverColor: 'hover:bg-[#34A853]',
  },
];
