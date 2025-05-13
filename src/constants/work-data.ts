import { StaticImageData } from 'next/image';

import iconPostman from '../../public/icons/postman-logo.svg';
import iconSpotify from '../../public/icons/spotify-logo.svg';
import iconTrustPilot from '../../public/icons/trust-pilot-logo.svg';

type WorkData = {
  image: StaticImageData;
  company: string;
  year: string;
  title: string;
  description: string;
};

export const workData: WorkData[] = [
  {
    image: iconTrustPilot,
    company: 'Trustpilot',
    year: '2021-2024',
    title: 'Frontend Developer',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    image: iconPostman,
    company: 'Postman',
    year: '2021-2024',
    title: 'Frontend Developer',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    image: iconSpotify,
    company: 'Spotify',
    year: '2021-2024',
    title: 'Frontend Developer',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
];
