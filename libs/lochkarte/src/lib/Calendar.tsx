import { clsx } from 'clsx';
import React, { useMemo } from 'react';

import {
  digestTimestamps,
  longestStreak,
  padData,
  padStartToDay,
} from './util';

export interface Props {
  timestamps: number[];
  classNames?: string;
  renderDay: (day: Date, count: number) => React.ReactNode;
}

export function Calendar({ timestamps, classNames, renderDay }: Props) {
  const [days, count] = useMemo(() => {
    const result = digestTimestamps(timestamps);
    const padded = padData(result);
    return padStartToDay(padded, 1);
  }, []);

  const streak = useMemo(() => {
    return longestStreak([days, count]);
  }, [days, count]);

  return (
    <div className={clsx(classNames, 'flex flex-col')}>
      <div className="grid grid-flow-col gap-y-0 gap-x-4">
        {Object.keys(new Array(Math.ceil(days.length / 31)).fill(0)).map(
          (day) => (
            <div className="text-gray-800 align-middle flex items-center text-lg  pr-4">
              {Number(day) + 1}
            </div>
          ),
        )}
      </div>

      <div className="w-full overflow-scroll">
        <div className="grid grid-rows-31 grid-flow-col  py-4">
          {days.map((day, index) => renderDay(day, count[index]))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
