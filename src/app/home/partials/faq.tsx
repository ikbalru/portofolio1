import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

import { faqData } from '@/constants/faq-data';

const FAQ = () => {
  return (
    <Section id='faq'>
      <div className='rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-5 md:rounded-4xl md:p-10'>
        <div className='grid grid-cols-1 justify-between gap-y-5 md:grid-cols-[minmax(auto,22.3rem)_minmax(auto,37.125rem)] md:grid-rows-3 md:gap-x-7'>
          {/* heading */}
          <div className='flex flex-col gap-4 md:row-start-1 md:gap-5'>
            <Image
              src='/icons/message-icon.svg'
              alt='message-icon'
              width={48}
              height={48}
            />
            <h2 className='md:display-2xl-bold display-md-bold text-neutral-950'>
              Have Questions?
            </h2>
          </div>

          {/* faq */}
          <Accordion
            type='single'
            collapsible
            className='self-center md:col-start-2 md:row-span-3 md:row-start-1 md:mt-10'
            defaultValue='item-0'
          >
            {faqData.map(({ title, description }, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* get in touch */}
          <div className='bg-base-white max-h-68 self-end rounded-xl border border-neutral-300 p-4 md:row-span-2 md:row-start-2 md:rounded-2xl md:p-6'>
            <div className='flex flex-col items-start justify-center gap-4'>
              <div className='bg-secondary-200 relative h-15 w-15 overflow-hidden rounded-full md:h-20 md:w-20'>
                <Image
                  src='/images/profile.png'
                  alt='profile'
                  width={80}
                  height={80}
                  className='pointer-events-none absolute mx-auto mt-1'
                />
              </div>
              <p className='md:text-lg-regular text-sm-regular text-neutral-950'>
                Have more questions? <br />
                Send me a message.
              </p>

              <Button asChild className='w-full' variant='primary'>
                <Link href='#contact'>Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
