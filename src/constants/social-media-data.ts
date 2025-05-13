import { StaticImageData } from 'next/image';

import instagramIcon from '../../public/icons/instagram-icon.svg';
import linkedinIcon from '../../public/icons/linkedin-icon.svg';
import facebookIcon from '../../public/icons/web-icon.svg';

type SocialMediaProps = {
  name: string;
  link: string;
  image: StaticImageData;
};

export const socialMediaData: SocialMediaProps[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com',
    image: instagramIcon,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com',
    image: facebookIcon,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com',
    image: linkedinIcon,
  },
];
