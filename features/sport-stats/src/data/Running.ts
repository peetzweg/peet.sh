import data from 'db/elevate';

interface ElevateRow {
  'Distance (km)': number;
  Name: string;
  'Power Stress Score': string;
  'Moving Time': string;
  'Running Stress Score': string;
  Hrss: string;
  'Avg HR (bpm)': string;

  'Avg Pace (/km)': string;
  Type: 'Run' | 'Ride' | 'VirtualRide';

  'Avg Speed (kph)': string;
  'Elevation Gain (m)': string;
  'Avg Active Cadence (rpm or spm)': string;
  Date: string;
  'Avg Watts (w)': string;
}
type ElevateData = Array<ElevateRow>;

export interface Run {
  index: number;
  distance: number;
  date: Date;
  moving_time: number;
  elevation: number;
}
export interface AccumulatedRun extends Run {
  accDistance: number;
  accElevation: number;
}

export type RunningData = Array<Run>;
export type AccumulatedRunningData = Array<AccumulatedRun>;

export const RUNS = (data as unknown as ElevateData)
  .filter((d) => d.Type === 'Run')
  .map(
    (d, i) =>
      ({
        index: i,
        distance: Number(d['Distance (km)']) || 0,
        date: new Date(d.Date),
        moving_time: d['Moving Time']
          ? parseTimeToSeconds(d['Moving Time'])
          : 0,
        elevation: Number(d['Elevation Gain (m)']) || 0,
      }) as Run,
  ) as RunningData;

let accElevation = 0;
let accDistance = 0;

export const ACCUMULATED: AccumulatedRunningData = RUNS.map((d, i) => {
  const distance = d.distance;
  const elevation = d.elevation;

  accElevation += elevation;
  accDistance += distance;
  return {
    index: i,
    distance,
    elevation,
    accDistance,
    accElevation,
    date: d.date,
  } as AccumulatedRun;
});

function parseTimeToSeconds(timeString: string) {
  const parts = timeString.split(':').map(Number);

  let totalSeconds = 0;

  if (parts.length === 3) {
    // Format hh:mm:ss
    const [hours, minutes, seconds] = parts;
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
  } else if (parts.length === 2) {
    // Format mm:ss
    const [minutes, seconds] = parts;
    totalSeconds = minutes * 60 + seconds;
  } else if (parts.length === 1) {
    // Format ss
    const [seconds] = parts;
    totalSeconds = seconds;
  }

  return totalSeconds;
}

function secondsToTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds };
}

export const TOTAL_DISTANCE = RUNS.reduce((acc, d) => acc + d.distance, 0);
export const TOTAL_ELEVATION = RUNS.reduce((acc, d) => acc + d.elevation, 0);
export const TOTAL_MOVING_TIME = secondsToTime(
  RUNS.reduce((acc, d) => acc + d.moving_time, 0),
);
export const TOTAL_RUNS = RUNS.length;
