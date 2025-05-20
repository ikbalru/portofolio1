import { ArrowRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProjectCardProps = {
  title: string;
  label: string;
  year: string;
  image: StaticImageData;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  label,
  year,
  image,
}) => {
  return (
    <div className='group/project flex flex-1 basis-80 cursor-pointer flex-col gap-4 max-md:w-full md:w-96 md:gap-5'>
      <LabelProject label={label} year={year} />
      <Image
        src={image}
        alt={label}
        className='pointer-events-none aspect-square rounded-[0.625rem] object-cover transition duration-300 group-hover/project:scale-103 group-hover/project:shadow-lg md:rounded-[0.75rem]'
      />
      <h3 className='text-md-semibold md:text-xl-semibold group-hover/project:text-primary-300 text-neutral-950 transition duration-300'>
        {title}
      </h3>
      <Link href='#' className='flex-start flex gap-2'>
        <p className='text-primary-300 text-sm-medium md:text-md-medium'>
          Visit Website
        </p>
        <ArrowRight className='text-primary-300 h-6 w-6 transition duration-300 group-hover/project:translate-x-1' />
      </Link>
    </div>
  );
};

export default ProjectCard;

type LabelProjectProps = {
  label: string;
  year: string;
};

const LabelProject: React.FC<LabelProjectProps> = ({ label, year }) => {
  return (
    <div className='flex-between flex items-center'>
      <p className='bg-base-white text-xs-regular md:text-md-regular rounded-full border border-dashed border-neutral-400 px-4 py-0.5 text-neutral-950 md:py-1'>
        {label}
      </p>
      <p className='bg-base-white text-xs-regular md:text-md-regular rounded-full border border-dashed border-neutral-400 px-4 py-0.5 text-neutral-950 md:py-1'>
        {year}
      </p>
    </div>
  );
};
