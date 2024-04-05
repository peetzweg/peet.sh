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
  elevation: number;
}
export interface AccumulatedRun extends Run {
  accDistance: number;
  accElevation: number;
}

export type RunningData = Array<Run>;
export type AccumulatedRunningData = Array<AccumulatedRun>;

export default (data as unknown as ElevateData)
  .filter((d) => d.Type === 'Run')
  .map(
    (d, i) =>
      ({
        index: i,
        distance: Number(d['Distance (km)']) || 0,
        date: new Date(d.Date),
        elevation: Number(d['Elevation Gain (m)']) || 0,
      }) as Run,
  ) as RunningData;

let accElevation = 0;
let accDistance = 0;

export const ACCUMULATED: AccumulatedRunningData = (
  data as unknown as ElevateData
)
  .filter((d) => d.Type === 'Run')
  .map((d, i) => {
    const distance = Number(d['Distance (km)']) || 0;
    const elevation = Number(d['Elevation Gain (m)']) || 0;

    accElevation += elevation;
    accDistance += distance;
    return {
      index: i,
      distance,
      elevation,
      accDistance,
      accElevation,
      date: new Date(d.Date),
    } as AccumulatedRun;
  });
