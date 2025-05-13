import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { chooseMeData } from '@/constants/choose-me-data';

const ChooseMe = () => {
  return (
    <div className='bg-neutral-100'>
      <Section title='Why Choose Me'>
        <Table />
      </Section>
    </div>
  );
};

export default ChooseMe;

const Table = () => {
  return (
    <div className='bg-base-white divide-y divide-neutral-300 rounded-xl px-3 py-4 md:rounded-4xl md:p-6'>
      {/* Header */}
      <div className='bg-primary-300 text-sm-semibold md:text-lg-semibold text-base-white grid h-14 grid-cols-[minmax(auto,_12.3rem)_repeat(2,_minmax(2.3rem,_auto))] items-center justify-items-center rounded-full border-none md:grid-cols-3'>
        <div>
          <h4>Skill</h4>
        </div>
        <div>
          <h4>Me</h4>
        </div>
        <div>
          <h4>Other</h4>
        </div>
      </div>

      {/* Row */}
      {chooseMeData.map(({ title, checklist, cross }) => (
        <div
          key={title}
          className='grid min-h-18 grid-cols-[minmax(auto,_12.3rem)_repeat(2,_minmax(2.3rem,_auto))] items-center justify-items-center md:grid-cols-3'
        >
          <p className='text-sm-medium md:text-lg-medium p-1 pr-3 text-center text-neutral-950'>
            {title}
          </p>
          <Image
            src={checklist}
            alt='checklist'
            width={24}
            height={24}
            className='md:h-7 md:w-7'
          />
          <Image
            src={cross}
            alt='checklist'
            width={24}
            height={24}
            className='md:h-7 md:w-7'
          />
        </div>
      ))}
    </div>
  );
};
