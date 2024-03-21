type Timestamps = Array<number>;
type Digest = [Date[], number[]];

export const digestTimestamps = (timestamps: Timestamps): Digest => {
  if (timestamps.length === 0) return [[], []];

  const days = [];
  const count: number[] = [];
  let currentDate = new Date(timestamps.shift()!);
  count.push(1);
  days.push(currentDate);

  timestamps.forEach((timestamp, index) => {
    let nextDate = new Date(timestamp);
    if (
      nextDate.getUTCDate() === currentDate.getUTCDate() &&
      nextDate.getUTCMonth() === currentDate.getUTCMonth()
    ) {
      count[count.length - 1] += 1;
    } else {
      days.push(nextDate);
      count.push(1);
      currentDate = nextDate;
    }
  });

  return [days, count];
};

export const padStartToDay = ([days, count]: Digest, day = 1): Digest => {
  let firstDay = days[0];
  if (firstDay.getUTCDay() === day) return [days, count];

  const paddedDays: Date[] = [...days];
  const paddedCount: number[] = [...count];

  let currentDay = paddedDays[0].getUTCDay();
  while (currentDay !== day) {
    paddedDays.unshift(new Date(paddedDays[0].getTime() - 86400000));
    paddedCount.unshift(0);
    currentDay = paddedDays[0].getUTCDay();
  }
  return [paddedDays, paddedCount];
};

export const padStartOfMonth = ([days, count]: Digest) => {
  let firstDay = days[0];
  if (firstDay.getUTCDate() === 1) return [days, count];

  const paddedDays: Date[] = [...days];
  const paddedCount: number[] = [...count];

  let currentDate = paddedDays[0].getUTCDate();
  while (currentDate !== 1) {
    paddedDays.unshift(new Date(paddedDays[0].getTime() - 86400000));
    paddedCount.unshift(0);
    currentDate = paddedDays[0].getUTCDate();
  }
  return [paddedDays, paddedCount];
};

export const padData = ([days, count]: Digest): Digest => {
  const paddedDays: Date[] = [];
  const paddedCount: number[] = [];

  days.forEach((day, index) => {
    // add given day to list
    paddedDays.push(new Date(day));
    paddedCount.push(count[index]);

    // add missing days to list
    const nextDay = days[index + 1];

    if (nextDay) {
      const currentDay = new Date(day);
      currentDay.setUTCDate(currentDay.getUTCDate() + 1);

      while (
        nextDay.getUTCDate() !== currentDay.getUTCDate() ||
        nextDay.getUTCMonth() !== currentDay.getUTCMonth()
      ) {
        // add zero day
        paddedDays.push(new Date(currentDay));
        paddedCount.push(0);

        currentDay.setUTCDate(currentDay.getUTCDate() + 1);
      }
    }
  });

  return [paddedDays, paddedCount];
};

export const chunkData = (
  days: Date[],
  count: number[],
): Array<Array<[Date, number]>> => {
  let currentMonth = days[0].getUTCMonth();
  let currentChunk: Array<[Date, number]> = [];
  const chunks: Array<typeof currentChunk> = [];

  days.forEach((day, index) => {
    if (day.getUTCMonth() === currentMonth) {
      currentChunk.push([day, count[index]]);
    } else {
      // push current chunk and start new one
      chunks.push([...currentChunk]);
      currentChunk = [];
      currentMonth = day.getUTCMonth();
      currentChunk.push([day, count[index]]);
    }
  });
  // push last chunk
  chunks.push([...currentChunk]);

  return chunks;
};

export const longestStreak = ([days, count]: Digest) => {
  let longest = 0;
  let current = 0;
  days.forEach((day, index) => {
    if (count[index] > 0) {
      current += 1;
    } else {
      if (current > longest) {
        longest = current;
      }
      current = 0;
    }
  });
  return longest;
};
