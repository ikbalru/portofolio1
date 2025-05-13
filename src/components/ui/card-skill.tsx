'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { Progress } from '@/components/ui/progress';

type CardSkillProps = {
  icon: StaticImageData;
  name: string;
  description: string;
  percentage: string;
};

const CardSkill: React.FC<CardSkillProps> = ({
  icon,
  name,
  description,
  percentage,
}) => {
  const [progress, setProgress] = React.useState(15);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(Number(percentage)), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className='bg-base-white shadow-card flex-1 basis-100 rounded-xl p-3 pb-4 md:rounded-2xl md:p-4'>
      {/* header */}
      <div className='flex-start flex h-10 gap-3'>
        <Image src={icon} alt={name} />
        <p className='text-md-semibold md:text-lg-semibold text-neutral-950'>
          {name}
        </p>
      </div>

      <p className='text-sm-regular md:text-md-regular mt-2 text-neutral-700'>
        {description}
      </p>

      {/* progress bar & number */}
      <div className='flex-start mt-3 flex gap-4'>
        {/* bar-status */}
        <Progress value={progress} />

        {/* percentage */}
        <p className='text-sm-semibold md:text-lg-semibold text-neutral-950'>
          {percentage}%
        </p>
      </div>
    </div>
  );
};

export default CardSkill;
