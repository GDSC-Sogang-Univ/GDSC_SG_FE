import Link from "next/link";

interface RedButtonWithHrefLinkProps extends React.PropsWithChildren {
  hrefLink: string;
  className?: string;
}

const LoginButton = ({ children = "로그인", hrefLink, className }: ButtonWithHrefLinkProps) => {
  return (
    <Link href={hrefLink} className={`bg-gdsc-Red-500 text-center rounded-lg px-[16px] py-[8px] mobile:px-5 mobile:py-3 text-gdsc-White text-[14px] mobile:text-16 w-fit border border-gdsc-White hover:border-gdsc-White hover:text-gdsc-White transition-colors ${className ?? 'hover:bg-gdsc-Red-700'}`}>
      {children}
    </Link>
  );
}
export default LoginButton;