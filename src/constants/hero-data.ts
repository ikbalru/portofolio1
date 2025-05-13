import { StaticImageData } from 'next/image';

import vectorIcon from '../../public/icons/vector-icon.svg';
import client1 from '../../public/images/client-1.png';
import client2 from '../../public/images/client-2.png';
import client3 from '../../public/images/client-3.png';
import client4 from '../../public/images/client-4.png';

// Card Client Data
type HeroClientDataProps = {
  image: StaticImageData;
};

export const HeroClientData: HeroClientDataProps[] = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
];

// Marquee data
type MarqueeDataProps = {
  desc: string;
  icon: StaticImageData;
};

export const MarqueeData: MarqueeDataProps[] = [
  { desc: 'Frontend Developer', icon: vectorIcon },
  { desc: 'Expert React', icon: vectorIcon },
  { desc: 'Programmers', icon: vectorIcon },
  { desc: 'Mobile Developers', icon: vectorIcon },
];
