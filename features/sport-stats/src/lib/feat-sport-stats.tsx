import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { AccumulatedGraph } from './AccumulatedGraph';

/* eslint-disable-next-line */
export interface FeatSportStatsProps {}

export function FeatSportStats(props: FeatSportStatsProps) {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-8">
      <ParentSize>
        {({ width, height }) => (
          <AccumulatedGraph width={width} height={height} />
        )}
      </ParentSize>
    </div>
  );
}
