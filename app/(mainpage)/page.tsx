import LandingPageFooter from '@/components/Footer/LandingPageFooter';
import BackgroundContent from '@/components/LandingPage/BackgroundContent';
import ContentLayout from '@/components/LandingPage/ContentLayout';
import PageWrapper from '@/components/LandingPage/PageWrapper';
import { SCROLL_CONTENT_LIST } from '@/components/LandingPage/ScrollContent';
import '@/styles/mainpage.css';

export const metadata = {
  title: 'GDG on Campus Sogang',
  description: 'Google Developer Groups on Sogang University',
};

export default function Home() {
  return (
    <main className="flex flex-col h-dvh overflow-x-hidden overflow-y-auto">
      {SCROLL_CONTENT_LIST.map(({
                                  type,
                                  title,
                                  subtitle,
                                  isDoubleBtn,
                                  btn1,
                                  btn2,
                                  btn3,
                                  btnClickLink,
                                  body,
                                  btnText,
                                  hoverColor,
                                }) => (
        <PageWrapper key={type} className="relative flex justify-center items-ceneter">
          {isDoubleBtn ? (
            <ContentLayout title={title} subtitle={subtitle} isDoubleBtn btn1={btn1} btn2={btn2} btn3={btn3}>
              {body}
            </ContentLayout>
          ) : (
            <ContentLayout
              title={title}
              subtitle={subtitle}
              isDoubleBtn={false}
              btnBoldText={btnText!}
              btnClickLink={btnClickLink!}
              hoverColor={hoverColor!}
            >
              {body}
            </ContentLayout>
          )}
        </PageWrapper>
      ))}
      <BackgroundContent />
      <LandingPageFooter />
    </main>
  );
}
