import Link from 'next/link';

interface ButtonWithHrefLinkProps extends React.PropsWithChildren {
  hrefLink: string;
  className?: string;
}

const ButtonWithHrefLink = ({ children, hrefLink, className }: ButtonWithHrefLinkProps) => {
  return (
    <Link
      href={hrefLink}
      target='_blank'
      className={`w-fit rounded-full border border-gdsc-White bg-gdsc-Black px-[26px] py-[18px] text-center text-[20px] text-gdsc-White transition-colors hover:border-gdsc-Black hover:text-gdsc-Black mobile:px-5 mobile:py-3 mobile:text-16 ${className ?? 'hover:bg-gdsc-White'}`}
    >
      {children}
    </Link>
  );
};
export default ButtonWithHrefLink;
