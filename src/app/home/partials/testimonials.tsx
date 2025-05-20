'use client';

import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useMedia } from 'react-use';

import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselDotButton,
  CarouselItem,
} from '@/components/ui/carousel';

import { testimonialsData } from '@/constants/testimonials-data';

const Testimonials = () => {
  const isDekstop = useMedia('(min-width: 1024px)');
  const isTablet = useMedia('(min-width: 768px) and (max-width: 1023px)');

  const itemsPerPage = isDekstop ? 3 : isTablet ? 2 : 1;

  return (
    <Section
      title='Success Stories from Clients'
      contentClassName='mt-1 md:mt-7'
    >
      <Carousel opts={{ align: 'end', slidesToScroll: itemsPerPage }}>
        <CarouselContent>
          {testimonialsData.map((item, index) => (
            <CarouselItem
              key={`${index}-${item.name}`}
              className='basis-1/1 md:basis-1/2 lg:basis-1/3'
            >
              <TestimonialsCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDotButton />
      </Carousel>
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
    <div className='shadow-card rounded-xl border bg-white p-4 pb-12 text-center md:rounded-2xl md:p-6'>
      <Image
        src={icon}
        alt='icon'
        width={102}
        height={32}
        className='mx-auto md:h-12 md:w-28.5'
      />
      <p className='md:text-md-medium text-sm-medium mt-3 line-clamp-4 text-neutral-950 md:mt-4'>
        {testimonial}
      </p>

      <div className='mt-5 flex justify-center gap-1 md:mt-8'>
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
