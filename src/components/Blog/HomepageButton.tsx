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
      className={`bg-gdsc-Grey-100 text-center whitespace-nowrap rounded-lg px-6 py-3 text-gdsc-Grey-700 text-18 w-fit transition-colors hover:bg-gdsc-Grey-200 ${className} tablet_h:text-14 tablet_h:w-full tablet_h:py-3`}
    >
      {children}
    </Link>
  );
};
export default HomepageButton;
