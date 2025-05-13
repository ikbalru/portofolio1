import { StaticImageData } from 'next/image';

// Card 2
import iconCSS from '../../public/icons/css-b-icon.svg';
import iconDocker from '../../public/icons/docker-b-icon.svg';
import iconExpress from '../../public/icons/express-b-icon.svg';
import iconHTML from '../../public/icons/html-b-icon.svg';
import iconJS from '../../public/icons/javascript-b-icon.svg';
import iconKubernetes from '../../public/icons/kubernetes-b-icon.svg';
import iconMongo from '../../public/icons/mongo-b-icon.svg';
import iconPostgress from '../../public/icons/postgress-b-icon.svg';
import iconReact from '../../public/icons/react-b-icon.svg';
import iconTypescript from '../../public/icons/typescript-b-icon.svg';
// Card 3
import projectSrc1 from '../../public/images/image-1.jpg';
import projectSrc2 from '../../public/images/image-2.jpg';
import projectSrc4 from '../../public/images/image-4.jpg';

// Card 1
type ChooseMeProps = {
  skill: string;
};

export const ChooseMeDataFirst: ChooseMeProps[] = [
  {
    skill: 'React Expert',
  },
  {
    skill: 'Fullstack Developer',
  },
  {
    skill: 'Resposive Design',
  },
];

export const ChooseMeDataSecond: ChooseMeProps[] = [
  {
    skill: 'React Expert',
  },
  {
    skill: '5 Years Experience',
  },
];

export const ChooseMeDataThird: ChooseMeProps[] = [
  {
    skill: 'React Expert',
  },
  {
    skill: 'Clean Code',
  },
  {
    skill: 'Performance Optimation',
  },
];

// Card 2
type SkillTechProps = {
  icon: StaticImageData;
  name: string;
};

export const SkillTechData: SkillTechProps[] = [
  {
    icon: iconCSS,
    name: 'CSS',
  },
  {
    icon: iconJS,
    name: 'JavaScript',
  },
  {
    icon: iconHTML,
    name: 'HTML',
  },
  {
    icon: iconExpress,
    name: 'Express',
  },
  {
    icon: iconKubernetes,
    name: 'Kubernetes',
  },
  {
    icon: iconTypescript,
    name: 'TypeScript',
  },
  {
    icon: iconDocker,
    name: 'Docker',
  },
  {
    icon: iconReact,
    name: 'React',
  },
  {
    icon: iconPostgress,
    name: 'PostgreSQL',
  },
  {
    icon: iconMongo,
    name: 'MongoDB',
  },
];

// Card 3
type ExperienceProps = {
  imageExp: StaticImageData;
};

export const ExperienceData: ExperienceProps[] = [
  {
    imageExp: projectSrc1,
  },
  {
    imageExp: projectSrc2,
  },
  {
    imageExp: projectSrc4,
  },
];

// Card 5
type StatisticsProps = {
  count: string;
  title: string;
};

export const StatisticsData: StatisticsProps[] = [
  {
    count: '50+',
    title: 'Global Client’s Handle',
  },
  {
    count: '99%',
    title: 'Client Satisfaction Rate',
  },
  {
    count: '100+',
    title: 'Project Delivered',
  },
];
