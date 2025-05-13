'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useMedia } from 'react-use';

import { cn } from '@/lib/utils';

interface PaginationProps {
  children: React.ReactNode;
  totalItems: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  desktopItemsPerPage?: number;
  mobileItemsPerPage?: number;
  contentClassName?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  children,
  totalItems,
  autoPlay = false,
  autoPlayInterval = 0,
  className,
  desktopItemsPerPage = 3,
  mobileItemsPerPage = 1,
  contentClassName,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentItemsPerPage, setCurrentItemsPerPage] =
    useState(desktopItemsPerPage);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalItems / currentItemsPerPage)
  );

  // Mobile Breakdown
  const isMobile = useMedia('(max-width: 768px)');

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = isMobile
        ? mobileItemsPerPage
        : desktopItemsPerPage;

      setCurrentItemsPerPage(newItemsPerPage);
      setTotalPages(Math.ceil(totalItems / newItemsPerPage));

      const maxIndex = Math.ceil(totalItems / newItemsPerPage) - 1;
      if (activeIndex > maxIndex) {
        setActiveIndex(maxIndex < 0 ? 0 : maxIndex);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [
    isMobile,
    totalItems,
    desktopItemsPerPage,
    mobileItemsPerPage,
    activeIndex,
  ]);

  // Handle autoplay
  useEffect(() => {
    if (!autoPlay || autoPlayInterval <= 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, totalPages]);

  const startIndex = activeIndex * currentItemsPerPage;
  const endIndex = Math.min(startIndex + currentItemsPerPage, totalItems);
  const childrenArray = React.Children.toArray(children);
  const visibleChildren = childrenArray.slice(startIndex, endIndex);

  return (
    <div className='flex w-full flex-col items-center'>
      <div className={cn('relative w-full overflow-hidden', className)}>
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={activeIndex}
            className={cn(
              'flex w-full flex-wrap justify-center gap-4',
              contentClassName
            )}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {visibleChildren}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className='mt-6 flex items-center justify-center gap-2 md:mt-8'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'h-2.5 cursor-pointer rounded-full transition-all duration-300 md:h-3',
                index === activeIndex
                  ? 'bg-primary-200 w-8'
                  : 'w-4 bg-neutral-300'
              )}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pagination;
