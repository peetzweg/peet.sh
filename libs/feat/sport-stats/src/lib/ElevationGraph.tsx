import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveStep } from '@visx/curve';
import { Group } from '@visx/group';
import { scaleLinear, scaleTime } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { extent, max } from 'd3-array';
import { ACCUMULATED as data, Run } from '../data/Running';

const getX = (d: Run) => d.date;
const getY = (d: Run) => d.elevation;

const xScale = scaleTime({
  domain: extent(data, (r: Run) => r.date) as [Date, Date],
});
const yScale = scaleLinear({
  domain: [0, max(data, getY)],
});

export function ElevationGraph({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  xScale.range([0, width - 50]);
  yScale.range([height, 0]);
  return (
    <svg width={width} height={height}>
      <Group>
        {data.map((d, j) => (
          <circle
            key={j}
            r={2}
            cx={xScale(getX(d))}
            cy={height - yScale(getY(d))}
            stroke="rgba(33,33,33,0.5)"
            fill="transparent"
          />
        ))}
        <LinePath<Run>
          curve={curveStep}
          data={data}
          x={(d) => xScale(getX(d)) ?? 0}
          y={(d) => height - yScale(getY(d)) ?? 0}
          stroke="#333"
        />
        <AxisBottom
          top={height - 50}
          left={50}
          scale={xScale}
          tickFormat={(d) => d.toLocaleDateString()}
          stroke={'#1b1a1e'}
          tickStroke={'#1b1a1e'}
          tickLabelProps={() => ({
            fill: '#1b1a1e',
            fontSize: 11,
            textAnchor: 'middle',
          })}
        />

        <AxisLeft
          left={50}
          scale={yScale}
          tickFormat={(d) => d + 'm'}
          stroke={'#1b1a1e'}
          tickStroke={'#1b1a1e'}
          tickLabelProps={() => ({
            fill: '#1b1a1e',
            fontSize: 11,
            textAnchor: 'end',
          })}
        />
      </Group>
    </svg>
  );
}
