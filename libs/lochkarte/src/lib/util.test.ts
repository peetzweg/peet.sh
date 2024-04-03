import { describe, expect, it } from 'vitest';
import { chunkData, digestTimestamps, padData, padStartToDay } from './util';

describe('digestTimestamps', () => {
  it('vanilla', () => {
    const timestamps = [
      new Date('2022-04-12T00:01:00.000Z'),
      new Date('2022-04-12T00:30:00.000Z'),

      new Date('2022-04-13T00:01:00.000Z'),
      new Date('2022-04-13T00:30:00.000Z'),
      new Date('2022-04-13T23:00:00.000Z'),
      new Date('2022-04-13T23:30:00.000Z'),

      new Date('2022-04-18T00:02:00.000Z'),
    ].map((t) => t.getTime());

    const [days, count] = digestTimestamps([...timestamps]);

    // correct number of days and counts
    expect(days.length).toBe(3);
    expect(count.length).toBe(3);

    console.log({ days, count });

    // correct count per day
    expect(count[0]).toBe(2);
    expect(count[1]).toBe(4);
    expect(count[2]).toBe(1);

    // only as many as given
    expect(count.reduce((prev, cur) => prev + cur, 0)).toBe(timestamps.length);
  });

  it('only two', () => {
    const timestamps = [
      new Date('2022-04-01T00:01:00.000Z'),
      new Date('2022-05-20T00:02:00.000Z'),
    ].map((t) => t.getTime());

    const [days, count] = digestTimestamps([...timestamps]);
    expect(days.length === count.length).toBe(true);
    expect(days.length).toBe(2);
    expect(count.length).toBe(2);
  });
});

describe('padData', () => {
  it('pads inside month correctly', () => {
    const timestamps = [
      new Date('2022-04-01T00:01:00.000Z'),
      new Date('2022-04-20T00:02:00.000Z'),
    ].map((t) => t.getTime());

    const [days, count] = digestTimestamps([...timestamps]);

    const padded = padData([days, count]);
    expect(padded[0].length).toBe(20);
  });

  it('pads across months correctly', () => {
    const timestamps = [
      new Date('2022-04-01T00:01:00.000Z'),
      new Date('2022-05-20T00:02:00.000Z'),
    ].map((t) => t.getTime());

    const [days, count] = digestTimestamps([...timestamps]);
    console.log({ days, count });

    const padded = padData([days, count]);
    console.log({ padded });
  });
});

describe('padStartToDay', () => {
  it('pads to monday inside month', () => {
    const timestamps = [
      new Date('2022-05-15T00:02:00.000Z'), // Sunday
      new Date('2022-05-20T00:02:00.000Z'),
    ].map((t) => t.getTime());

    const [days, count] = digestTimestamps([...timestamps]);

    const padded = padData([days, count]);
    expect(padded[0].length).toBe(6);
    const paddedToMonday = padStartToDay(padded, 1);
    expect(paddedToMonday[0].length).toBe(12);
  });

  it('pads to monday outside month', () => {
    const timestamps = [
      new Date('2022-05-01T00:02:00.000Z'), // Sunday
      new Date('2022-05-10T00:02:00.000Z'),
    ].map((t) => t.getTime());

    const [days, count] = digestTimestamps([...timestamps]);

    const padded = padData([days, count]);
    expect(padded[0].length).toBe(10);
    const paddedToMonday = padStartToDay(padded, 1);
    expect(paddedToMonday[0].length).toBe(16);
  });
});

describe('chunkData', () => {
  it('chunks single month correctly', () => {
    const timestamps = [
      new Date('2022-04-01T00:01:00.000Z'),
      new Date('2022-04-20T00:02:00.000Z'),
    ].map((t) => t.getTime());

    const [days, count] = digestTimestamps([...timestamps]);

    const padded = padData([days, count]);
    const chunks = chunkData(padded[0], padded[1]);
    expect(chunks.length).toBe(1);
  });

  it('chunks across months correctly', () => {
    const timestamps = [
      new Date('2022-04-01T00:01:00.000Z'),
      new Date('2022-05-20T00:02:00.000Z'),
    ].map((t) => t.getTime());

    const [days, count] = digestTimestamps([...timestamps]);

    const padded = padData([days, count]);
    const chunks = chunkData(padded[0], padded[1]);

    expect(chunks.length).toBe(2);
  });
});
