'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon, MinusIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'border-b border-neutral-300 py-5 first:pt-0 last:border-b-0 last:pb-0 md:py-8',
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'hover:text-primary-300 data-[state=open]:text-primary-300 group/trigger flex flex-1 cursor-pointer items-start justify-between gap-4 text-neutral-950 transition-all',
          className
        )}
        {...props}
      >
        <div className='md:text-xl-semibold text-md-semibold flex-1 text-left'>
          {children}
        </div>
        <div className='shrink-0'>
          <div className='group-data-[state=open]/trigger:bg-primary-300 flex-center flex h-6 w-6 shrink-0 rounded-full group-data-[state=closed]/trigger:bg-neutral-200 md:h-10 md:w-10'>
            <PlusIcon className='h-3.5 w-3.5 text-neutral-950 group-data-[state=open]/trigger:hidden' />
            <MinusIcon className='text-base-white h-3.5 w-3.5 group-data-[state=closed]/trigger:hidden' />
          </div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden'
      {...props}
    >
      <div
        className={cn(
          'md:text-md-regular text-sm-regular mt-3 text-neutral-700 md:mt-5',
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
