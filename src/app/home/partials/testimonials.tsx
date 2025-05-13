import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import Pagination from '@/components/ui/pagination';

import { testimonialsData } from '@/constants/testimonials-data';

const Testimonials = () => {
  return (
    <Section title='Success Stories from Clients'>
      <Pagination
        totalItems={testimonialsData.length}
        desktopItemsPerPage={3}
        mobileItemsPerPage={1}
        className='flex gap-5'
      >
        {testimonialsData.map((item, index) => (
          <TestimonialsCard key={`${index}-${item.name}`} {...item} />
        ))}
      </Pagination>
    </Section>
  );
};

export default Testimonials;

type TestimonialsCardProps = {
  name: string;
  role: string;
  rating: number;
  icon: StaticImageData;
  testimonial: string;
};

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  name,
  role,
  rating,
  icon,
  testimonial,
}) => {
  return (
    <div className='flex-center shadow-card flex w-95.25 flex-1 basis-80 flex-col rounded-xl p-4 pb-12 max-md:w-full md:rounded-2xl md:p-6'>
      <Image
        src={icon}
        alt='icon'
        width={102}
        height={32}
        className='md:h-12 md:w-28.5'
      />
      <p className='md:text-md-medium text-sm-medium mt-3 line-clamp-4 text-neutral-950 md:mt-4'>
        {testimonial}
      </p>

      <div className='mt-5 flex gap-1 md:mt-8'>
        {new Array(rating).fill(null).map((_, index) => (
          <Icon
            key={index}
            icon='material-symbols:star-rounded'
            width={28}
            height={28}
            className='text-secondary-200 md:h-8 md:w-8'
          />
        ))}
      </div>

      <p className='text-sm-semibold md:text-md-semibold mt-3 text-neutral-950 md:mt-4'>
        {name}
      </p>
      <p className='text-sm-regular md:text-md-regular text-neutral-600'>
        {role}
      </p>
    </div>
  );
};
