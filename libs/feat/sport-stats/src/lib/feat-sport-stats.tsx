import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { ElevationGraph } from './ElevationGraph';
import styles from './feat-sport-stats.module.css';

/* eslint-disable-next-line */
export interface FeatSportStatsProps {}

export function FeatSportStats(props: FeatSportStatsProps) {
  return (
    <div
      className={styles['container']}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '90vw',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ParentSize>
          {({ width, height }) => (
            <ElevationGraph width={width} height={height} />
          )}
        </ParentSize>
      </div>
    </div>
  );
}

export default FeatSportStats;
