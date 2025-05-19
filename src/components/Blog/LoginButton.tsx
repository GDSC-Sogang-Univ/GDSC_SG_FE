import Link from 'next/link';

interface RedButtonWithHrefLinkProps extends React.PropsWithChildren {
  hrefLink: string;
  className?: string;
}

const LoginButton = ({ children = '로그인', hrefLink, className }: RedButtonWithHrefLinkProps) => {
  return (
    <button
      disabled
      // href={hrefLink}
      className={`cursor-not-allowed bg-gdsc-Grey-200 text-center rounded-lg whitespace-nowrap px-6 py-3 text-gdsc-White text-18 w-fit  ${className} tablet_h:text-14 tablet_h:w-full tablet_h:py-3`}
    >
      {children}
    </button>
  );
};
export default LoginButton;
