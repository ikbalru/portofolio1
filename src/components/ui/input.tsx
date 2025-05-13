import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'text-sm-regular md:text-md-regular bg-base-white h-12 w-full rounded-xl border border-neutral-200 px-4 py-2.25 outline-none placeholder:text-neutral-500 md:h-14 md:py-3.25',
        'focus:ring-[1px] focus:ring-neutral-500',
        className
      )}
      {...props}
    />
  );
}

export { Input };
