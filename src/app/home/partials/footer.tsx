import Image from 'next/image';
import Link from 'next/link';

import { socialMediaData } from '@/constants/social-media-data';

const Footer = () => {
  return (
    <footer className='bg-primary-400 w-full py-10 md:py-6'>
      <div className='custom-container flex flex-col justify-between gap-5 md:flex-row'>
        {/* logo & copyright */}
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:gap-5'>
          <Image
            src='/images/company-w-logo.svg'
            alt='company-logo'
            width={141}
            height={32}
          />
          <p className='text-neutral-25 md:text-md-regular text-sm-regular blend-normal'>
            © 2025 Edwin Anderson. All rights reserved.
          </p>
        </div>
        {/* links */}
        <div className='flex items-center gap-4 md:gap-5'>
          {socialMediaData.map(({ name, link, image }) => (
            <Link key={name} href={link}>
              <Image src={image} alt={name} width={48} height={48} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
