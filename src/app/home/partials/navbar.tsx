'use client';

import { Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

import { navData } from '@/constants/nav-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(22,1,49,1)', 'rgba(22,1,49,0.8)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      className='bg-primary-400 fixed top-0 z-100 w-full'
      style={{ backdropFilter: backdropBlur, background }}
    >
      <div className='custom-container flex-between h-20 md:h-21.25'>
        <Image
          src='/images/company-w-logo.svg'
          alt='logo'
          width={141}
          height={32}
          className='aspect-[141/32] h-auto'
        />
        {/* navbar links */}
        <nav className='hidden lg:block'>
          <ul className='flex-between gap-8'>
            {navData.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className='text-md-regular text-base-white before:bg-base-white relative mx-2 cursor-pointer py-2 before:absolute before:bottom-1 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:transition-all before:duration-400 hover:before:w-full'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild className='hidden lg:flex'>
          <Link href='#contact'>
            <Mail className='size-5' />
            Hire Me
          </Link>
        </Button>

        {/* mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src='/images/menu.svg'
              alt='menu'
              width={24}
              height={24}
              className='cursor-pointer lg:hidden'
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Image
                  src='/images/company-b-logo.svg'
                  alt='logo'
                  width={141}
                  height={32}
                  className='aspect-[141/32] h-auto'
                />
              </SheetTitle>
            </SheetHeader>
            <nav className='my-4'>
              <ul className='flex flex-col gap-4'>
                {navData.map(({ label, href }) => (
                  <li key={label} className='p-2'>
                    <SheetClose asChild>
                      <Link
                        href={href}
                        className='text-md-regular text-primary-300 before:bg-primary-300 relative pb-1 text-neutral-950 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:transition-all before:duration-400 hover:before:w-full'
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
            <Button asChild className='w-full' variant='primary'>
              <Link href='#contact'>
                <Mail className='size-5' />
                Hire Me
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
