import React from 'react';

import { Section } from '@/components/layouts/section';
import ProjectCard from '@/components/ui/card-projects';

import { ProjectsData } from '@/constants/projects-data';

const Projects = () => {
  return (
    <Section title='My Latest Work' id='projects'>
      <div className='flex flex-wrap gap-6 md:gap-x-5 md:gap-y-10'>
        {ProjectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            label={project.label}
            year={project.year}
            image={project.image}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
