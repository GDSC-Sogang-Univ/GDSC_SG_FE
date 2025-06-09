import Image from 'next/image';
import Link from 'next/link';
import FooterIcon from '@/assets/icon/landing_gdg_footer.svg';
import InstagramIcon from '@/assets/icon/Logo_Instagram.svg';

const Footer = () => {
  return (
    <footer className='w-full bg-[#f9f9f9] py-11 cp_mobile:py-4'>
      <div className='max-w-[1306px] mx-auto px-[72px] tablet_h:px-9 cp_mobile:px-6 flex justify-between cp_mobile:flex-col cp_mobile:gap-1 '>
        <Image src={FooterIcon} alt='GDSC Sogang Footer Icon' className='w-[446px] tablet_h:w-[289px] tablet_h:h-12' />
        {/* SNS Info  */}
        <div className='flex gap-10 tablet:gap-6 text-gdsc-Grey-600 tablet_h:!text-12 cp_mobile:flex-col cp_mobile:gap-0'>
          <span className='flex items-center gap-3 tablet:gap-2 mobile:gap-1'>
            <span className='cp_mobile:w-[72px] leading-[180%]'>Gmail</span>
            <span className='h-3 w-[1px] bg-gdsc-Grey-600' />
            <span>gdsc.sogang@gmail.com</span>
          </span>
          <span className='flex items-center gap-3 tablet:gap-2 mobile:gap-1'>
            <span className='cp_mobile:w-[72px] leading-[180%]'>Instagram</span>
            <span className='h-3 w-[1px] bg-gdsc-Grey-600' />
            <Link href='https://www.instagram.com/gdg.on.campus_sg/'>@gdg_on_campus_sg</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
