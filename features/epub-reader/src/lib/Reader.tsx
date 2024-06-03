import { useEffect, useMemo, useState } from 'react';

interface Props {
  text: string;
}
export const Reader = ({ text }: Props) => {
  const [isPlaying, setPlaying] = useState(false);
  const [current, setCurrent] = useState<number>(0);
  const words = useMemo(() => {
    setPlaying(false);
    setCurrent(0);
    return text.split(' ');
  }, [text]);
  const [interval, saveInterval] = useState<
    undefined | ReturnType<typeof setInterval>
  >(undefined);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        console.log('Space bar pressed');
        setPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const newInterval = setInterval(() => {
        setCurrent((prev) => prev + 2);
      }, 500);
      saveInterval(newInterval);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(interval);
    }
  }, [interval, isPlaying]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-96 text-3xl leading-3 tracking-tight">
      <h1>{`${words[current]} ${words[current + 1]}`}</h1>
    </div>
  );
};
