'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion, HTMLMotionProps } from 'motion/react';
import React from 'react';
import { useMedia } from 'react-use';

interface RotateMotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  rotateMobile?: number;
  rotateDesktop?: number;
  asChild?: boolean;
}

const MotionSlot = motion.create(Slot);
const MotionDiv = motion.div;

const RotateMotion: React.FC<RotateMotionProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  rotateMobile,
  rotateDesktop,
  asChild = false,
  ...motionProps
}) => {
  const Comp = asChild ? MotionSlot : MotionDiv;

  const isLargeIsh = useMedia('(min-width: 1024px', false);

  const finalRotate = isLargeIsh
    ? (rotateDesktop ?? rotateMobile)
    : rotateMobile;

  return (
    <Comp
      animate={{
        rotateZ: finalRotate,
      }}
      transition={{
        duration,
        delay,
      }}
      {...motionProps}
    >
      {children}
    </Comp>
  );
};

export default RotateMotion;
