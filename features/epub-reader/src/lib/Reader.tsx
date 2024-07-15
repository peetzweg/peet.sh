import { useEffect, useMemo, useState } from 'react';
import { useStore } from './store';

interface Props {
  text: string;
}
export const Reader = ({ text }: Props) => {
  const isPlaying = useStore((state) => state.isPlaying);
  const setProgress = useStore((state) => state.setProgress);
  const [current, setCurrent] = useState<number>(0);
  const [words, total] = useMemo(() => {
    setCurrent(0);
    const words = text.split('\n').join(' ').split(' ');

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
    <div className="flex flex-col justify-center font-serif items-center w-full h-96 text-5xl ">
      <h1>{`${words[current]}`}</h1>
    </div>
  );
};
