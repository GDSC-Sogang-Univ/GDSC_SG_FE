import Link from "next/link";

interface RedButtonWithHrefLinkProps extends React.PropsWithChildren {
  hrefLink: string;
  className?: string;
}

const HomepageButton = ({ children = "GDGoC Sogang 홈페이지", hrefLink, className }: ButtonWithHrefLinkProps) => {
  return (
    <Link href={hrefLink} className={`bg-gdsc-Grey-200 text-center rounded-lg px-[16px] py-[8px] mobile:px-5 mobile:py-3 text-gdsc-Black text-[14px] mobile:text-16 w-fit border border-gdsc-White hover:border-gdsc-White hover:text-gdsc-Black transition-colors ${className ?? 'hover:bg-gdsc-Grey-400'}`}>
      {children}
    </Link>
  );
}
export default HomepageButton;