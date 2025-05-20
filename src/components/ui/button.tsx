'use client';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'motion/react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer rounded-full outline-none gap-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary-300 text-sm-medium text-neutral-25',
        secondary: 'bg-neutral-25 text-neutral-950 text-sm-medium',
      },
      size: {
        sm: 'h-12 pr-[2.8rem] pl-[2.92rem]',
        lg: 'h-14 w-full',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'sm',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <Comp
        data-slot='button'
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </motion.div>
  );
}

export { Button, buttonVariants };
