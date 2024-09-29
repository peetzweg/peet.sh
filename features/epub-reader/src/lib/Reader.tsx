import { useEffect, useMemo, useState } from 'react';
import { useStore } from './store';
import { cn } from 'lib-utils';

interface Props {
  text: string;
}

export const Reader = ({ text }: Props) => {
  const isPlaying = useStore((state) => state.isPlaying);
  const pause = useStore((state) => state.pause);
  const setProgress = useStore((state) => state.setProgress);
  const [current, setCurrent] = useState<number>(0);
  const [words, total] = useMemo(() => {
    setCurrent(0);
    const words = text.replaceAll('—', ' — ').split('\n').join(' ').split(' ');

    const total = words.length;
    return [words, total];
  }, [text]);
  const [interval, saveInterval] = useState<
    undefined | ReturnType<typeof setInterval>
  >(undefined);

  useEffect(() => {
    if (isPlaying) {
      const newInterval = setInterval(() => {
        setCurrent((prev) => {
          const newCurrent = prev + 1;

          setProgress(newCurrent / total);
          if (newCurrent >= total) {
            clearInterval(newInterval);
            pause();
          }
          return newCurrent;
        });
      }, 250);
      saveInterval(newInterval);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(interval);
    }
  }, [interval, isPlaying]);
  // console.log(words[current]);

  return (
    <div className="flex flex-col justify-center font-serif items-center w-full">
      <div className="w-full max-w-96 px-8 flex flex-col gap-1">
        <div className="h-32 flex flex-col justify-end">
          <p
            className={cn('opacity-45 text-justify', {
              hidden: isPlaying,
            })}
          >
            {words.slice(Math.max(current - 20, 0), current).join(' ')}
          </p>
        </div>
        <h1 className="text-5xl">{`${words[current]}`}</h1>
        <div className="h-32 flex flex-col justify-start">
          <p
            className={cn('opacity-45 text-justify h-36', {
              hidden: isPlaying || current === 0,
            })}
          >
            {words.slice(Math.max(current + 1, 0), current + 20).join(' ')}
          </p>
        </div>
      </div>
    </div>
  );
};
