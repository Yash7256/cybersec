'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, useTransform, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 25,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);

  useEffect(() => {
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const controls = animate(translation, [from, to], {
      ease: 'linear',
      duration: currentSpeed,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [width, height, gap, reverse, currentSpeed, direction, translation]);

  const x = useTransform(translation, (v) => `${v}px`);
  const y = useTransform(translation, (v) => `${v}px`);

  const MotionDiv = motion.div as any;

  return (
    <div className={cn('overflow-hidden', className)}>
      <MotionDiv
        className='flex w-max'
        style={{
          x: direction === 'horizontal' ? x : undefined,
          y: direction === 'vertical' ? y : undefined,
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
      >
        {children}
        {children}
      </MotionDiv>
    </div>
  );
}
