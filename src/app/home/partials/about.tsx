import { Icon } from '@iconify/react';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import CardAbout from '@/components/ui/card-about';
import { Marquee } from '@/components/ui/marquee';

import {
  ChooseMeDataFirst,
  ChooseMeDataSecond,
  ChooseMeDataThird,
  ExperienceData,
  SkillTechData,
  StatisticsData,
} from '@/constants/about-data';

const About = () => {
  return (
    <Section id='about'>
      <p className='text-md-semibold md:text-lg-semibold text-neutral-950'>
        Hi, I’m Edwin Anderson 👋
      </p>
      <h3 className='text-xl-semibold md:display-md-semibold mt-4 text-neutral-950'>
        Building digital products with a focus on crafting visually engaging and
        seamless user interfaces using React.js.{' '}
        <span className='text-neutral-400'>
          Prioritizing responsive design, performance optimization, and
          user-centric features to deliver exceptional web experiences.
        </span>
      </h3>
      <div className='mt-12 flex flex-wrap gap-5'>
        <CardAboutOne />
        <CardAboutTwo />
        <CardAboutThree />
        <CardAboutFour />
        <CardAboutFive />
      </div>
    </Section>
  );
};

export default About;

const CardAboutOne = () => {
  return (
    <CardAbout className='bg-secondary-300 relative grow-1 overflow-hidden'>
      {/* top-column */}
      <div className='absolute inset-x-0 px-4 pt-8 md:px-6 md:pt-6'>
        <div className='md:display-md-bold display-sm-bold text-base-white'>
          Why Choose Me
        </div>
        <div className='md:text-md-regular text-sm-regular text-base-white md:mt4 mt-2'>
          Delivering excellence with innovative solutions and seamless
          execution.
        </div>
      </div>

      {/* bottom-column */}
      <div className='absolute top-[50%] left-1/2 mx-auto w-full -translate-x-1/2'>
        <Marquee>
          {ChooseMeDataFirst.map((item, index) => (
            <div key={index} className='flex-center flex shrink-0'>
              <div className='bg-base-white h-9 rounded-full'>
                <p className='text-sm-regular px-4 py-1 text-neutral-950'>
                  {item.skill}
                </p>
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee reverse={true}>
          {ChooseMeDataSecond.map((item, index) => (
            <div key={index} className='flex-center mt-5 flex shrink-0'>
              <div className='bg-base-white h-9 rounded-full'>
                <p className='text-sm-regular px-4 py-1 text-neutral-950'>
                  {item.skill}
                </p>
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee>
          {ChooseMeDataThird.map((item, index) => (
            <div key={index} className='flex-center mt-5 flex shrink-0'>
              <div className='bg-base-white h-9 rounded-full'>
                <p className='text-sm-regular px-4 py-1 text-neutral-950'>
                  {item.skill}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      {/* gradient overlay */}
      <div className='absolute top-[33.1%] bottom-[4.5%] left-0 z-20 w-[44.88%] bg-gradient-to-r from-[rgba(225,123,14,0.3)] to-transparent' />
      <div className='absolute top-[33.1%] right-0 bottom-[4.5%] z-20 w-[44.88%] bg-gradient-to-l from-[rgba(225,123,14,0.3)] to-transparent' />
    </CardAbout>
  );
};

const CardAboutTwo = () => {
  return (
    <CardAbout className='relative grow-1 overflow-hidden bg-neutral-900'>
      <div className='absolute inset-x-0'>
        {/* top-coloumn */}
        <div className='px-4 pt-8 md:px-6 md:pt-7.25'>
          <p className='display-sm-bold md:display-md-bold text-base-white'>
            Expert Skill
          </p>

          {/* stars */}
          <div className='mt-2 flex md:mt-3'>
            {new Array(5).fill(null).map((_, index) => (
              <Icon
                key={index}
                icon='material-symbols:star-rounded'
                width={24}
                height={24}
                className='text-secondary-200 md:h-8 md:w-8'
              />
            ))}
          </div>

          <p className='md:text-md-regular text-sm-regular text-base-white mt-2 md:mt-3'>
            Mastering modern technologies to deliver impactful and efficient
            solutions
          </p>
        </div>

        {/* bottom-column */}
        <div className='mt-8 grid grid-cols-5 grid-rows-2 justify-between justify-items-center gap-x-4 gap-y-6 px-3.5 md:mt-7.75 md:px-6'>
          {SkillTechData.map((item, index) => (
            <Image
              key={index}
              src={item.icon}
              alt={item.name}
              width={52.58}
              height={52.58}
              className='pointer-events-none'
            />
          ))}
        </div>
      </div>
    </CardAbout>
  );
};

const CardAboutThree = () => {
  return (
    <CardAbout className='relative grow-1 overflow-hidden'>
      {/* gradient-overlay */}
      <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.26)_85%,_rgba(0,0,0,0)_100%)]' />
      <Image
        src={'/images/about-3.jpg'}
        alt='experience'
        fill
        sizes='100%'
        className='pointer-events-none object-cover'
      />

      {/* Experience text */}
      <div className='absolute top-[25%] left-1/2 z-20 -translate-x-1/2 text-center'>
        <p
          className='text-base-white font-bold'
          style={{
            fontSize: 'clamp(2rem, calc((40 / 1232) * 100vw), 2.5rem)',
            lineHeight: 'clamp(2.875rem, calc((56 / 1232) * 100vw), 3.5rem)',
            letterSpacing: '-2%',
          }}
        >
          5+ Years Experience
        </p>
      </div>

      {/* Project images at the bottom */}
      <div className='absolute inset-x-0 bottom-[7%] z-30 mx-6.5 flex justify-between gap-3 md:mx-9'>
        {ExperienceData.map((item, index) => (
          <div
            key={index}
            className='relative flex-1 overflow-hidden rounded-md md:rounded-xl'
            style={{ aspectRatio: '1.34/1' }}
          >
            <Image
              src={item.imageExp}
              alt={`project-${index}`}
              fill
              sizes='100%'
              className='pointer-events-none object-cover'
            />
          </div>
        ))}
      </div>
    </CardAbout>
  );
};

const CardAboutFour = () => {
  return (
    <CardAbout className='bg-primary-300 relative grow-1 overflow-hidden'>
      {/* pattern */}
      <div className='absolute inset-0 z-10'>
        <Image
          src={'/images/pattern.png'}
          alt='pattern'
          fill
          sizes='100%'
          className='aspect-ratio pointer-events-none object-cover'
        />
      </div>

      {/* name */}
      <div
        className='flex-center letter-spacing-[-2%] absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 flex-wrap font-[Poppins] leading-[5.6rem] font-bold text-[#F39C3F]'
        style={{
          fontSize: 'clamp(3rem, 15vw, 4.48rem)',
        }}
      >
        <p>EDWIN</p>
        <p className='-mt-3'>ANDERSON</p>
      </div>

      {/* profile */}
      <div className='absolute inset-0 top-[8.86%] z-30'>
        <Image
          src={'/images/profile.png'}
          alt='profile'
          fill
          sizes='100%'
          className='pointer-events-none object-cover'
        />
      </div>

      <div className='absolute inset-x-0 top-[80%] z-40 flex justify-center'>
        <Button asChild className='w-fit pr-19 pl-19.25'>
          <Link href='#contact'>
            <Mail className='size-5' />
            Hire Me
          </Link>
        </Button>
      </div>
    </CardAbout>
  );
};

const CardAboutFive = () => {
  return (
    <CardAbout className='relative grow-[2.5] overflow-hidden bg-gradient-to-br from-[#002C6E] to-[#0C4EAF] px-4 pt-8 pb-9 max-md:min-h-113 md:px-6 md:pt-6 md:pb-8'>
      {/* left-column */}
      <div className='relative z-40 flex h-full w-full flex-col justify-between gap-8'>
        {/* title */}
        <div className='flex flex-col justify-center gap-x-2'>
          <p className='md:display-md-bold display-sm-bold text-base-white'>
            Building Digital
          </p>
          <div className='flex items-center gap-x-2'>
            <p className='md:display-md-bold display-sm-bold text-base-white'>
              Products
            </p>
            <Image
              src={'/icons/little-stars-icon.svg'}
              alt='stars'
              width={24}
              height={24}
              className='pointer-events-none aspect-square'
            />
          </div>
        </div>

        {/* stistics */}
        <div className='flex max-md:flex-col max-md:gap-y-6 md:gap-x-9.75'>
          {StatisticsData.map((item, index) => (
            <div key={index} className='text-neutral-25'>
              <p className='display-lg-bold md:display-2xl-bold'>
                {item.count}
              </p>
              <p className='text-sm-medium md:text-lg-medium'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className='absolute top-0 right-0 h-full w-135.5 max-sm:right-0 max-sm:left-0'>
        <Image
          src={'/images/dot-map.svg'}
          alt='world-map'
          fill
          sizes='100%'
          className='pointer-events-none max-sm:mt-13.5'
        />

        {/* Image Flags of Nation */}
        {/* Germany */}
        <Image
          src={'/images/germany-flag.png'}
          alt='germany'
          width={72}
          height={32}
          className='aspect-ratio pointer-events-none absolute top-[29.2%] left-[35%] z-40 sm:top-[34%] sm:left-[14.94%]'
        />

        {/* America */}
        <Image
          src={'/images/america-flag.png'}
          alt='america'
          width={72}
          height={32}
          className='aspect-ratio object-fit pointer-events-none absolute top-[46%] left-[52.5%] z-40 sm:top-[27%] sm:left-[74%]'
        />

        {/* Indonesia */}
        <Image
          src={'/images/indonesia-flag.png'}
          alt='indonesia'
          width={72}
          height={32}
          className='aspect-ratio pointer-events-none absolute top-[75.66%] left-[49.7%] z-40 sm:top-[61.5%] sm:left-[82.5%]'
        />
      </div>
    </CardAbout>
  );
};
