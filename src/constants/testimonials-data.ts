import { StaticImageData } from 'next/image';

import upworkIcon from '../../public/icons/upwork-logo.svg';
import zapierIcon from '../../public/icons/zapier-logo.svg';
import zoomIcon from '../../public/icons/zoom-logo.svg';

type TestimonialsData = {
  name: string;
  role: string;
  rating: number;
  icon: StaticImageData;
  testimonial: string;
};

export const testimonialsData: TestimonialsData[] = [
  {
    name: 'Robert Lewandowski',
    role: 'Head of Engineering, Upwork',
    rating: 5,
    icon: upworkIcon,
    testimonial:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
  },
  {
    name: 'Dani Olmo',
    role: 'Product Manager, Zapier',
    rating: 5,
    icon: zapierIcon,
    testimonial:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
  },
  {
    name: 'Jude Belingham',
    role: 'Vice President, Zoom',
    rating: 5,
    icon: zoomIcon,
    testimonial:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
  },
  {
    name: 'Dani Olmo',
    role: 'Product Manager, Zapier',
    rating: 5,
    icon: zapierIcon,
    testimonial:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
  },
  {
    name: 'Jude Belingham',
    role: 'Vice President, Zoom',
    rating: 5,
    icon: zoomIcon,
    testimonial:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
  },
  {
    name: 'Jude Belingham',
    role: 'Vice President, Zoom',
    rating: 5,
    icon: zoomIcon,
    testimonial:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
  },
  {
    name: 'Dani Olmo',
    role: 'Product Manager, Zapier',
    rating: 5,
    icon: zapierIcon,
    testimonial:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
  },
  {
    name: 'Jude Belingham',
    role: 'Vice President, Zoom',
    rating: 5,
    icon: zoomIcon,
    testimonial:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
  },
  {
    name: 'Jude Belingham',
    role: 'Vice President, Zoom',
    rating: 5,
    icon: zoomIcon,
    testimonial:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
  },
];
