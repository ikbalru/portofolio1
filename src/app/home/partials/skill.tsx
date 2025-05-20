'use client';

import React from 'react';
import { useMedia } from 'react-use';

import { Section } from '@/components/layouts/section';
import CardSkill from '@/components/ui/card-skill';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDotButton,
} from '@/components/ui/carousel';

import { skillData } from '@/constants/skill-data';

// Utility untuk membagi array menjadi chunk (6 kartu per slide)
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunked: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

const Skill = () => {
  const isMobile = useMedia('(max-width: 768px)', false);

  // kartu per slide
  const chunkedSkills = chunkArray(skillData, isMobile ? 3 : 6);

  return (
    <Section
      title='My Professional Skill'
      id='skill'
      contentClassName='mt-1 md:mt-7'
    >
      <Carousel>
        <CarouselContent>
          {chunkedSkills.map((group, groupIndex) => (
            <CarouselItem key={`group-${groupIndex}`} className='basis-full'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {group.map(({ src, name, description, percentage }, index) => (
                  <CardSkill
                    key={`${groupIndex}-${index}-${name}`}
                    icon={src}
                    name={name}
                    description={description}
                    percentage={percentage}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDotButton />
      </Carousel>
    </Section>
  );
};

export default Skill;
