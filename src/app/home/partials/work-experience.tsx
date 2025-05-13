import Image from 'next/image';

import { Section } from '@/components/layouts/section';

import { workData } from '@/constants/work-data';
import { cn } from '@/lib/utils';

const WorkExperience = () => {
  return (
    <Section title='My Work Experience'>
      {workData.map(({ image, company, year, title, description }, index) => (
        <div
          key={company}
          className={cn(
            'grid grid-cols-[1.5rem_auto] md:grid-cols-[auto_2.5rem_auto]',
            // style margin child
            index === workData.length - 1 ? 'mb-0' : 'mb-6 md:mb-16'
          )}
        >
          {/* line */}
          <div className='relative col-start-1 row-span-2 row-start-1 mr-[1.3rem] md:col-start-2 md:row-start-1 md:mr-[1.4375rem]'>
            {/* line decoration */}
            <div
              className={cn(
                'line-decoration absolute left-1/2 w-0.25 -translate-x-1/2 border border-dashed border-neutral-400',
                // style height line decoration
                index === workData.length - 1
                  ? 'h-0'
                  : 'h-[calc(100%+1.5rem)] md:h-[calc(100%+4rem)]'
              )}
            />
            {/* circle */}
            <div className='flex-center bg-base-white absolute inset-x-0 left-1/2 flex h-6 w-6 -translate-x-1/2 rounded-full border border-dashed border-neutral-400 md:h-10 md:w-10'>
              <div className='bg-primary-200 absolute h-3.5 w-3.5 rounded-full md:h-6 md:w-6' />
            </div>
          </div>

          {/* company profile */}
          <div className='col-start-2 row-start-1 flex flex-col justify-items-center gap-1 md:col-start-1 md:row-start-1 md:mr-20 md:gap-3'>
            <Image
              src={image}
              alt={company}
              width={102}
              height={32}
              className='md:h-12 md:w-38'
            />
            <p className='md:text-xl-semibold text-md-semibold text-neutral-950'>
              {company}
            </p>
            <p className='md:text-md-regular text-sm-regular text-neutral-700'>
              {year}
            </p>
          </div>

          {/* job details */}
          <div className='col-start-2 row-start-2 mt-2 flex flex-col justify-items-center gap-1 md:col-start-3 md:row-start-1 md:mt-0 md:gap-4'>
            <p className='md:text-xl-semibold text-md-semibold text-neutral-950'>
              {title}
            </p>
            <p className='md:text-md-regular text-sm-regular text-neutral-700'>
              {description}
            </p>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default WorkExperience;
