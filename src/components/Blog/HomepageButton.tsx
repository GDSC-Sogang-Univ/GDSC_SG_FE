import Link from 'next/link';

interface RedButtonWithHrefLinkProps extends React.PropsWithChildren {
  hrefLink: string;
  className?: string;
}

const HomepageButton = ({ children = 'GDGoC Sogang 홈페이지', hrefLink, className }: RedButtonWithHrefLinkProps) => {
  return (
    <Link
      href={hrefLink}
      target='_blank'
      className={`bg-gdsc-Grey-100 text-center whitespace-nowrap rounded-lg px-[16px] py-[8px] mobile:px-5 mobile:py-3 text-gdsc-Grey-700 text-[14px] mobile:text-16 w-fit transition-colors hover:bg-gdsc-Grey-200 ${className}`}
    >
      {children}
    </Link>
  );
};
export default HomepageButton;
