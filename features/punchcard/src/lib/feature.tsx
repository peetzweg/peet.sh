import { useEffect, useMemo } from 'react';
import timestamps from '../data/timestamps.json';

export interface Props {}

const digestTimestamps = (timestamps: number[]): [Date[], number[]] => {
  const days = [];
  const count: number[] = [];
  let currentDate = new Date(timestamps[0]);
  count.push(1);
  days.push(currentDate);
  timestamps.forEach((timestamp, index) => {
    let nextDate = new Date(timestamp);
    if (nextDate.getUTCDay() === currentDate.getUTCDay()) {
      count[count.length - 1] += 1;
    } else {
      days.push(nextDate);
      count.push(1);
      currentDate = nextDate;
    }
  });
  console.log({ days, count });
  return [days, count];
};

const padData = (days: Date[], count: number[]): [Date[], number[]] => {
  const currentDay = new Date(days[0]);
  const paddedDays: Date[] = [];
  const paddedCount: number[] = [];
  days.forEach((day, index) => {
    paddedDays.push(new Date(day));
    paddedCount.push(count[index]);

    const currentDay = new Date(day);
    currentDay.setUTCDate(currentDay.getUTCDate() + 1);
    const nextDay = days[index + 1];

    while (nextDay && nextDay.getUTCDay() !== currentDay.getUTCDay()) {
      paddedDays.push(new Date(currentDay));
      paddedCount.push(0);
      currentDay.setUTCDate(currentDay.getUTCDate() + 1);
    }
  });

  return [paddedDays, paddedCount];
};

export function Feature(props: Props) {
  const [days, count] = useMemo(() => {
    const result = digestTimestamps(timestamps);
    return padData(result[0], result[1]);
  }, []);
  console.log({ days, count });

  return (
    <div className="w-screen h-screen flex justify-center items-center p-8">
      <div className="grid grid-rows-7 grid-flow-col gap-4">
        {days.map((day, index) => (
          <div style={{ opacity: count[index] > 0 ? 1 : 0.2 }}>
            {count[index] > 0 ? 'x' : 'o'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
