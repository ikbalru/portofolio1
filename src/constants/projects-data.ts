import { StaticImageData } from 'next/image';

import projectSrc1 from '../../public/images/image-1.jpg';
import projectSrc2 from '../../public/images/image-2.jpg';
import projectSrc3 from '../../public/images/image-3.jpg';
import projectSrc4 from '../../public/images/image-4.jpg';
import projectSrc5 from '../../public/images/image-5.jpg';
import projectSrc6 from '../../public/images/image-6.jpg';

type ProjectsDataProps = {
  title: string;
  label: string;
  year: string;
  image: StaticImageData;
};

export const ProjectsData: ProjectsDataProps[] = [
  {
    label: 'Dashboard 2024',
    title: 'Dashboard SaaS Task Management',
    year: '2024',
    image: projectSrc1,
  },
  {
    label: 'Dashboard 2024',
    title: 'Dashboard SaaS Task Management',
    year: '2024',
    image: projectSrc2,
  },
  {
    label: 'Dashboard 2024',
    title: 'Dashboard SaaS Task Management',
    year: '2024',
    image: projectSrc3,
  },
  {
    label: 'Dashboard 2024',
    title: 'Dashboard SaaS Task Management',
    year: '2024',
    image: projectSrc4,
  },
  {
    label: 'Dashboard 2024',
    title: 'Dashboard SaaS Task Management',
    year: '2024',
    image: projectSrc5,
  },
  {
    label: 'Dashboard 2024',
    title: 'Dashboard SaaS Task Management',
    year: '2024',
    image: projectSrc6,
  },
];
