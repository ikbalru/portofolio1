import { StaticImageData } from 'next/image';

import iconCSS from '../../public/icons/css-icon.svg';
import iconDocker from '../../public/icons/docker-icon.svg';
import iconHTML from '../../public/icons/html-icon.svg';
import iconJavascript from '../../public/icons/javascript-icon.svg';
import iconMongo from '../../public/icons/mongo-icon.svg';
import iconReact from '../../public/icons/react-icon.svg';

type Icon = {
  src: StaticImageData;
  name: string;
  description: string;
  percentage: string;
};

export const skillData: Icon[] = [
  {
    src: iconHTML,
    name: 'HTML',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconCSS,
    name: 'CSS',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconJavascript,
    name: 'Javascript',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconReact,
    name: 'React JS',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconMongo,
    name: 'Mongo DB',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconDocker,
    name: 'Docker',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconHTML,
    name: 'HTML',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconCSS,
    name: 'CSS',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconJavascript,
    name: 'Javascript',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconReact,
    name: 'React JS',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconMongo,
    name: 'Mongo DB',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconDocker,
    name: 'Docker',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconHTML,
    name: 'HTML',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconCSS,
    name: 'CSS',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
  {
    src: iconJavascript,
    name: 'Javascript',
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
    percentage: '90',
  },
];
