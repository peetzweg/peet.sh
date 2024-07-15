import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useStore } from './store';
import { useEffect } from 'react';
import { cubicBezier, circOut } from 'framer-motion';
export const Progress = () => {
  const progress = useStore((state) => state.progress);
  const motionProgress = useMotionValue(0);
  useEffect(() => {
    motionProgress.set(progress);
  }, [progress]);

  const clipPathRight = useTransform(motionProgress, [0, 1], ['100%', '0%'], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });
  const motionClipPath = useMotionTemplate`inset(0 ${clipPathRight} 0 0)`;
  return (
    <motion.div layout key="progress" className="w-full relative mt-[-0.75rem]">
      <div className="relative mx-6">
        <div className="h-[3px] rounded-full bg-slate-600 " />
        <motion.div
          className="absolute w-full top-0 h-[3px] rounded-full bg-white"
          style={{
            // TODO hacky way of doing it, probably not finishing on time when reaching the last word
            // clipPath: motionClipPath,
            clipPath: `inset(0 ${100 - progress * 100}% 0 0)`,
            transition: 'clip-path 0.7s',
          }}
        />
      </div>
    </motion.div>
  );
};
