import tw from 'tailwind-styled-components';

interface PageWrapperProps extends React.PropsWithChildren {
  className?: string;
}

/**
 * 한 페이지에 꽉 차게 보이는 wrapper
 * @param className @type {string} - override혹은 추가하고싶은 className (tailwindcss)
 * @param children @type {React.ReactNode} - PageWrapper 안에 들어갈 children
 */
const PageWrapper = ({ className, children }: PageWrapperProps) => {
  const PageWrapper = tw.div`
    w-full
    h-screen
    snap-start
    shrink-0
    flex
    items-center
    justify-center
  `;
  return <PageWrapper className={className}>{children}</PageWrapper>;
};
export default PageWrapper;
