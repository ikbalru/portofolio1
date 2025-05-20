import React from 'react';

import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  title?: string;
  id?: string;
  className?: string;
  contentClassName?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  id,
  className,
  contentClassName,
}) => {
  return (
    <div className={cn('custom-container py-10 md:py-20', className)} id={id}>
      {/* heading */}
      <div className='text-center'>
        <h2 className='md:display-2xl-bold display-md-bold text-neutral-950'>
          {title}
        </h2>
      </div>

      {/* content */}
      <div className={cn('mt-6 md:mt-12', contentClassName)}>{children}</div>
    </div>
  );
};
