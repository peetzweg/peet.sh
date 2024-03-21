import { clsx } from 'clsx';
import { useMemo } from 'react';
import timestamps from '../data/timestamps.json';
import {
  digestTimestamps,
  longestStreak,
  padData,
  padStartToDay,
} from './util';

export interface Props {}

export function Feature(props: Props) {
  const [days, count] = useMemo(() => {
    const result = digestTimestamps(timestamps);
    const padded = padData(result);
    return padStartToDay(padded, 1);
  }, []);

  const streak = useMemo(() => {
    return longestStreak([days, count]);
  }, [days, count]);

  return (
    <div className=" h-screen w-screen flex justify-center items-center flex-row px-4">
      <div className="grid grid-rows-7 grid-flow-col gap-y-0 gap-x-4">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
          <div className="text-gray-800 align-middle flex items-center text-lg h-[40px] pr-4">
            {day}
          </div>
        ))}
      </div>
      <div className="w-full md:w-3/4 overflow-scroll">
        <div className="grid grid-rows-7 grid-flow-col gap-y-0 gap-x-4 py-4">
          {days.map((day, index) => {
            return (
              <>
                <div
                  className={clsx(
                    {
                      'text-gray-800': count[index] === 0,
                    },
                    'h-[40px] text-2xl align-bottom relative',
                  )}
                  title={day.toLocaleDateString()}
                >
                  {count[index] > 0 ? 'x' : 'o'}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Feature;
