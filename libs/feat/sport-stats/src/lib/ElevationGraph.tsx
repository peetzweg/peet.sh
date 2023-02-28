import { AxisBottom, AxisLeft, AxisRight } from '@visx/axis';
import { curveStep } from '@visx/curve';
import { GridColumns, GridRows } from '@visx/grid';
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

const margin = { top: 20, right: 60, bottom: 60, left: 20 };

export function ElevationGraph({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  xScale.range([0, xMax]);
  yScale.range([yMax, 0]);
  return (
    <svg width={width} height={height}>
      <Group left={margin.left} top={margin.top}>
        <text x="0" y="0" fontSize={11}>
          Cumulated Running Elevation Gain (m)
        </text>
        {data.map((d, j) => (
          <circle
            key={j}
            r={2}
            cx={xScale(getX(d))}
            cy={yMax - yScale(getY(d))}
            stroke="rgba(33,33,33,0.5)"
            fill="transparent"
          />
        ))}
        <LinePath<Run>
          curve={curveStep}
          data={data}
          x={(d) => xScale(getX(d)) ?? 0}
          y={(d) => yMax - yScale(getY(d)) ?? 0}
          stroke="#333"
        />

        <GridRows scale={yScale} width={xMax} height={yMax} stroke="#e0e0e0" />

        <GridColumns
          scale={xScale}
          width={xMax}
          height={yMax}
          stroke="#e0e0e0"
        />

        <AxisBottom
          top={yMax}
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

        <AxisRight
          left={xMax}
          scale={yScale}
          tickFormat={(d) => d + 'm'}
          stroke={'#1b1a1e'}
          tickStroke={'#1b1a1e'}
          tickLabelProps={() => ({
            fill: '#1b1a1e',
            fontSize: 11,
            textAnchor: 'start',
          })}
        />
      </Group>
    </svg>
  );
}
