import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'text-sm-regular md:text-md-regular bg-base-white h-30 w-full resize-none rounded-xl px-4 py-2.25 outline-none placeholder:text-neutral-500 md:h-45 md:py-3.25',
        'border border-neutral-200 focus:ring-[1px] focus:ring-neutral-500',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
