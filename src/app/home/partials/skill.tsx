import React from 'react';

import { Section } from '@/components/layouts/section';
import CardSkill from '@/components/ui/card-skill';
import Pagination from '@/components/ui/pagination';

import { skillData } from '@/constants/skill-data';

const Skill = () => {
  return (
    <Section title='My Profesional Skill' id='skill'>
      <Pagination
        totalItems={skillData.length}
        desktopItemsPerPage={6}
        mobileItemsPerPage={3}
      >
        {skillData.map(({ src, name, description, percentage }, index) => (
          <CardSkill
            key={`${index}-${name}`}
            icon={src}
            name={name}
            description={description}
            percentage={percentage}
          />
        ))}
      </Pagination>
    </Section>
  );
};

export default Skill;
