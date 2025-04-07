import Link from 'next/link';

interface RedButtonWithHrefLinkProps extends React.PropsWithChildren {
  hrefLink: string;
  className?: string;
}

const LoginButton = ({ children = '로그인', hrefLink, className }: RedButtonWithHrefLinkProps) => {
  return (
    <Link
      href={hrefLink}
      className={`bg-gdsc-Red-500 text-center rounded-lg whitespace-nowrap px-6 py-3 text-gdsc-White text-18 w-fit hover:text-gdsc-White transition-colors hover:bg-gdsc-Red-700 ${className} tablet_h:text-14 tablet_h:w-full tablet_h:py-3`}
    >
      {children}
    </Link>
  );
};
export default LoginButton;
