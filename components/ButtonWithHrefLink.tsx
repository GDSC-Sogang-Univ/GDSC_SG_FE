import Link from "next/link";

interface ButtonWithHrefLinkProps extends React.PropsWithChildren {
  hrefLink: string;
  className?: string;
}

const ButtonWithHrefLink = ({ children, hrefLink, className }: ButtonWithHrefLinkProps) => {
  return (
    <Link href={hrefLink} target="_blank" className={`bg-gdsc-Black text-center rounded-full px-[26px] py-[18px] mobile:px-5 mobile:py-3 text-gdsc-White text-[20px] mobile:text-16 w-fit border border-gdsc-White hover:border-gdsc-Black hover:text-gdsc-Black transition-colors ${className ?? 'hover:bg-gdsc-White'}`}>
      {children}
    </Link>
  );
}
export default ButtonWithHrefLink;