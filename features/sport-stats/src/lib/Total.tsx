import {
  TOTAL_DISTANCE,
  TOTAL_ELEVATION,
  TOTAL_MOVING_TIME,
  TOTAL_RUNS,
} from '../data/Running';

const totalStats = [
  `${TOTAL_RUNS} Runs`,
  `${TOTAL_DISTANCE.toFixed(2)}km Distance`,
  `${TOTAL_ELEVATION.toFixed(2)}m Elevation`,
  `+${TOTAL_MOVING_TIME.hours} Hours`,
];
export function Total() {
  return (
    <div className="w-full flex flex-row flex-wrap justify-around items-start h-64 gap-4">
      {totalStats.map((stat, index) => (
        <div
          key={index}
          className="border h-full w-64 flex items-center justify-center"
        >
          <h1>{stat}</h1>
        </div>
      ))}
    </div>
  );
}
