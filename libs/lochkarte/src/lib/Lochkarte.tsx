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

export function Lochkarte({ timestamps, classNames, renderDay }: Props) {
  const [days, count] = useMemo(() => {
    const result = digestTimestamps(timestamps);
    const padded = padData(result);
    return padStartToDay(padded, 1);
  }, []);

  return (
    <div className={clsx(classNames, 'flex flex-row')}>
      <div className="w-full overflow-scroll">
        <div className="flex flex-row">
          <div className="fixed">
            <div className="grid grid-rows-7 border-gray-500 grid-flow-col items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              {['Mon', 'Tue', 'Wes', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                (day, index) => (
                  <div
                    key={index}
                    className="px-2 h-[40px] text-2xl font-semibold"
                    style={{ fontVariant: 'small-caps' }}
                  >
                    {day.toLocaleLowerCase()}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="grid pl-16 grid-rows-7 grid-flow-col gap-x-4">
            {days.map((day, index) => (
              <React.Fragment key={index}>
                {renderDay(day, count[index])}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lochkarte;
