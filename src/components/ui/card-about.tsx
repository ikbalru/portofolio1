import React from 'react';

import { cn } from '@/lib/utils';

interface CardAboutProps {
  children?: React.ReactNode;
  className?: string;
}

const CardAbout: React.FC<CardAboutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'min-h-93.5 rounded-2xl max-md:w-full md:min-h-98.75 md:min-w-95.25',
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardAbout;
