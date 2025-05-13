import { StaticImageData } from 'next/image';

import iconCheck from '../../public/icons/check-icon.svg';
import iconCross from '../../public/icons/cross-icon.svg';

type ChooseMeData = {
  title: string;
  checklist: StaticImageData;
  cross: StaticImageData;
};

export const chooseMeData: ChooseMeData[] = [
  {
    title: 'React Expert',
    checklist: iconCheck,
    cross: iconCross,
  },
  {
    title: 'Perfect Pixel',
    checklist: iconCheck,
    cross: iconCross,
  },
  {
    title: 'TypeScript Proficiency',
    checklist: iconCheck,
    cross: iconCross,
  },
  {
    title: 'Clean, Maintainable Code',
    checklist: iconCheck,
    cross: iconCross,
  },
  {
    title: 'Performance Optimization',
    checklist: iconCheck,
    cross: iconCross,
  },
  {
    title: 'Responsive Website',
    checklist: iconCheck,
    cross: iconCross,
  },
  {
    title: 'UI Design Proficiency (Figma)',
    checklist: iconCheck,
    cross: iconCross,
  },
];
