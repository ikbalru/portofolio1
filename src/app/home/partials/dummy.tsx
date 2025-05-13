import { Icon } from '@iconify/react';
import Image from 'next/image';

import { Marquee } from '@/components/ui/marquee';
import RotateMotion from '@/components/ui/rotate-motion';

import { HeroClientData, MarqueeData } from '@/constants/hero-data';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section
      className='overflow-hidden'
      style={{ paddingBottom: 'clamp(1.06rem, 2.22vw, 2rem)' }}
      id='#home'
    >
      <div
        className='bg-primary-400 relative overflow-hidden'
        style={{ height: 'clamp(43.81rem, 61.53vw, 55.38rem)' }}
      >
        {/* hero-title */}
        <h1
          className='text-neutral-25 absolute inset-x-0 z-20 text-center font-[Poppins] font-extrabold'
          style={{
            fontSize: 'clamp(2rem, 10.42vw, 9.38rem)',
            lineHeight: 'clamp(3.5rem, 13.54vw, 12.19rem)',
            top: 'clamp(6.25rem, 10vw, 9rem)',
          }}
        >
          EDWIN ANDERSON
        </h1>

        {/* eclipse */}
        <div className='flex-center absolute inset-x-0 top-[38.65%] z-10 flex md:top-[27.3%]'>
          <Eclipse />
        </div>

        {/* hero-image */}
        <div
          className='absolute inset-x-0 top-[39.65%] left-1/2 z-40 aspect-square -translate-x-1/2 md:top-[21.8%]'
          style={{
            height: 'clamp(26.5rem, 52.99vw, 47.69rem)',
          }}
        >
          <Image
            src='/images/profile.png'
            alt='hero-image'
            fill
            sizes='100%'
            className='aspect-ratio object-contain'
            priority
          />
        </div>

        {/* Cards */}
        {/* CardRating */}
        <div className='absolute inset-0 z-20'>
          <RotateMotion
            className='absolute top-[45.5%] left-[24.5%] h-auto w-full max-sm:top-[27.5%] max-sm:left-[22%]'
            rotateDesktop={3.15}
            rotateMobile={6.73}
          >
            <CardRating />
          </RotateMotion>
        </div>

        {/* CardJob */}
        <div className='absolute inset-0 z-20'>
          <RotateMotion
            className='absolute top-[71.3%] left-[17.5%] h-auto w-full max-sm:top-[68%] max-sm:left-0'
            rotateDesktop={-3.24}
            rotateMobile={-10.09}
          >
            <CardJob />
          </RotateMotion>
        </div>

        {/* CardClient */}
        <div className='absolute inset-0 z-20'>
          <RotateMotion
            className='absolute top-[63.5%] right-[31.3%] h-auto w-auto max-sm:top-[62.7%] max-sm:right-[27.5%]'
            rotateMobile={5.31}
          >
            <CardClient />
          </RotateMotion>
        </div>
      </div>

      {/* marquee */}

      <RotateMotion className='relative z-50 -mt-8.25' rotateMobile={-1.89}>
        <MarqueeHero />
      </RotateMotion>
    </section>
  );
};

export default Hero;

type CardsProps = {
  children?: React.ReactNode;
  className?: string;
};

type CardProps = {
  className?: string;
};

const Card: React.FC<CardsProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'text-neutral-25 absolute border border-[rgba(253,253,253,0.1)] bg-[rgba(40,40,40,0.2)] backdrop-blur-[2.5rem]',
        className
      )}
      style={{
        padding: 'clamp(0.75rem, 1.3vw, 1rem)',
        borderRadius: 'clamp(0.75rem, 1.3vw, 1rem)',
      }}
    >
      {children}
    </div>
  );
};

const CardRating: React.FC<CardProps> = ({ className }) => {
  return (
    <Card className={cn('w-36 md:w-50', className)}>
      <p
        className='font-bold'
        style={{
          fontSize: 'clamp(1.5rem, 3.25vw, 2.5rem)',
          lineHeight: 'clamp(2.25rem, 4.54vw, 3.5rem)',
          letterSpacing: '-2%',
        }}
      >
        5.0
      </p>

      {/* stars */}
      <div
        className='text-secondary-200 flex'
        style={{
          marginBlock: 'clamp(0.13rem, 0.32vw, 0.25rem)',
        }}
      >
        {new Array(5).fill(null).map((_, index) => (
          <Icon
            key={index}
            icon='material-symbols:star-rounded'
            width='clamp(1.5rem, 2.6vw, 2rem)'
            height='clamp(1.5rem, 2.6vw, 2rem)'
          />
        ))}
      </div>

      <p
        className='font-medium'
        style={{
          fontSize: ' clamp(0.75rem, 1.14vw, 0.88rem)',
          lineHeight: 'clamp(1.5rem, 2.27vw, 1.75rem)',
        }}
      >
        Many Client Trust with me
      </p>
    </Card>
  );
};

const CardJob: React.FC<CardProps> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <p
        className='font-bold'
        style={{
          fontSize: 'clamp(0.88rem, 1.95vw, 1.5rem)',
          lineHeight: 'clamp(1.75rem, 2.92vw, 2.25rem)',
        }}
      >
        Frontend Developer
      </p>
      {/* react */}
      <div className='flex-start flex'>
        <Icon icon='bitcoin-icons:verify-filled' width={24} height={24} />
        <p className='text-sm-medium'>React Expert</p>
      </div>
    </Card>
  );
};

const CardClient: React.FC<CardProps> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <p
        className='font-bold'
        style={{
          fontSize: 'clamp(1.5rem, 3.25vw, 2.5rem)',
          lineHeight: 'clamp(2.25rem, 4.54vw, 3.5rem)',
          letterSpacing: '-2%',
        }}
      >
        50+
      </p>

      <p
        className='font-medium'
        style={{
          fontSize: ' clamp(0.75rem, 1.14vw, 0.88rem)',
          lineHeight: 'clamp(1.5rem, 2.27vw, 1.75rem)',
          marginBlock: 'clamp(0.38rem, 0.65vw, 0.5rem)',
        }}
      >
        Global Clients
      </p>

      {/* Image */}
      <div className='flex-center flex'>
        {HeroClientData.map((item, index) => (
          <div
            key={index}
            className={cn(
              'relative aspect-square overflow-hidden rounded-full',
              index !== 0 && '-ml-3'
            )}
            style={{
              height:
                index === 2
                  ? 'clamp(2.5rem, 3.9vw, 3rem)'
                  : 'clamp(2.5rem, 4.22vw, 3.25rem)',
            }}
          >
            <Image
              src={item.image}
              alt={`client-${index}`}
              fill
              sizes='100%'
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

// eclipse
const Eclipse = () => {
  return (
    <div
      className='flex-center flex aspect-square rounded-full bg-[rgba(102,0,235,0.2)]'
      style={{
        // height: 'clamp(37.94rem, 82.61vw, 63.63rem)',
        height: 'clamp(37.94rem, 70.69vw, 63.63rem)',
      }}
    >
      <div
        className='flex-center flex aspect-square rounded-full bg-[rgba(102,0,235,0.4)]'
        style={{
          // height: 'clamp(29.81rem, 64.86vw, 49.94rem)',
          height: 'clamp(29.81rem, 55.49vw, 49.94rem)',
        }}
      >
        {/* eclipse- 2 */}
        <div
          className='flex-center flex aspect-square rounded-full bg-[rgba(102,0,235,0.6)]'
          style={{
            // height: 'clamp(21.63rem, 47.15vw, 36.31rem)',
            height: 'clamp(21.63rem, 40.35vw, 36.31rem)',
          }}
        >
          {/* eclipse- 1*/}
          <div
            className='aspect-square rounded-full bg-[rgba(102,0,235,0.8)]'
            style={{
              // container
              // height: 'clamp(13.5rem, 29.38vw, 22.63rem)',
              height: 'clamp(13.44rem, 25.14vw, 22.63rem)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

// marquee
const MarqueeHero = () => {
  return (
    <div
      className='-ml-[1%] w-[101%] bg-neutral-950'
      style={{
        paddingBlock: 'clamp(1.5rem, 2.78vw, 2.5rem)',
        gap: 'clamp(1rem, 1.67vw, 1.5rem)',
      }}
    >
      <Marquee gap='clamp(1rem, 1.67vw, 1.5rem)'>
        {MarqueeData.map((item, index) => (
          <div
            key={index}
            className='flex-center flex shrink-0'
            style={{
              gap: 'clamp(1rem, 1.67vw, 1.5rem)',
            }}
          >
            <div
              className='relative'
              style={{
                height: 'clamp(2.19rem, 3.65vw, 3.28rem)',
                width: 'clamp(2rem, 3.33vw, 3rem)',
              }}
            >
              <Image
                src={item.icon}
                alt='vector-icon'
                fill
                sizes='100%'
                className='object-contain'
              />
            </div>
            <p
              className='text-neutral-25 font-bold'
              style={{
                fontSize: 'clamp(1.5rem, 3.33vw, 3rem)',
                lineHeight: 'clamp(2.25rem, 4.17vw, 3.75rem)',
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
