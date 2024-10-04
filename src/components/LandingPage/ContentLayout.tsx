'use client';

import Link from 'next/link';
import { ReactNode, useEffect, useRef, useState } from 'react';
import ButtonWithHrefLink from '../ButtonWithHrefLink';

interface SingleButtonProps {
  isDoubleBtn?: false;
  btnBoldText: string;
  btnClickLink: string;
  hoverColor: string;
}

interface DoubleButtonProps {
  isDoubleBtn: true;
  btn1: ReactNode;
  btn2: ReactNode;
}

interface CommonProps extends React.PropsWithChildren {
  title: ReactNode;
  subtitle?: ReactNode;
}

type Props = CommonProps & (SingleButtonProps | DoubleButtonProps);

/**
 * 스크롤 애니메이션이 들어가는 content의 layout
 * @param children title과 button 제외 body 영역
 */
const ContentLayout = (props: Props) => {
  const { title, subtitle, children } = props;
  const targetRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentTarget = targetRef.current;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    }, observerOptions);

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);
  if (props.isDoubleBtn) {
    return (
      <div className='w-content mobile:w-full'>
        <div ref={targetRef}></div>
        <section
          ref={sectionRef}
          className={`flex w-full flex-col gap-16 mobile:gap-10 pl-9 mobile:pl-4 mobile:pr-8 ${!isVisible && 'animate-content-out opacity-0'}`}
        >
          <span className='flex flex-col gap-3'>
            <span className='flex flex-col'>
              <h3 className={`text-H1_EN ${isVisible && 'animate-content-in'}`}>{title}</h3>
              <h2 className={`${isVisible && 'animate-content-in'} text-h2_EN text-gdsc-Black -mt-6`}>{subtitle}</h2>
            </span>
            <div className={`${isVisible && 'animate-content-in-slow'} mobile:text-P4_KR`}>{children}</div>
          </span>
          <div className={`flex gap-5 ${isVisible && 'animate-content-in-more-slow'}`}>
            {props.btn1}
            {props.btn2}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className='w-content mobile:w-full'>
      <div ref={targetRef}></div>
      <section
        ref={sectionRef}
        className={`flex w-full flex-col gap-10 mobile:gap-7 mx-5 mobile:mx-4 ${!isVisible && 'animate-content-out opacity-0'}`}
      >
        <h3 className={`text-H1_EN ${isVisible && 'animate-content-in'} mobile:text-H3_EN`}>{title}</h3>
        {subtitle && (
          <h2 className={`${isVisible && 'animate-content-in'} text-h2_EN text-gdsc-Black -mt-16`}>{subtitle}</h2>
        )}
        <div className={`px-11 mobile:px-4 ${isVisible && 'animate-content-in-slow'}`}>{children}</div>
        <div className={`${isVisible && 'animate-content-in-more-slow'} pl-5 mobile:pl-2`}>
          <ButtonWithHrefLink
          className={`${props.hoverColor} mobile:!px-7`}
          hrefLink={props.btnClickLink}
          >
            Learn more<span className='mobile:hidden'> about <span className='font-bold'>{props.btnBoldText}</span></span>
          </ButtonWithHrefLink>
        </div>
      </section>
    </div>
  );
};

export default ContentLayout;
