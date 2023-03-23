import { AxisBottom, AxisRight } from '@visx/axis';
import { curveStep } from '@visx/curve';
import { GridColumns, GridRows } from '@visx/grid';
import { Group } from '@visx/group';
import { scaleLinear, scaleTime } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { extent, max } from 'd3-array';
import { useMemo } from 'react';
import { ACCUMULATED as data, AccumulatedRun, Run } from '../data/Running';

const getX = (d: Run) => d.date;
const getY = (d: AccumulatedRun) => d.accElevation;

const COLOR = {
  MARATHON: '#d95972',
  HALF: '#e59d4d',
};

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
  const [marathons, halfs] = useMemo(function calcTotals() {
    let marathons = 0,
      halfs = 0;
    data.forEach((d) =>
      d.distance >= 42 ? marathons++ : d.distance >= 21 ? halfs++ : undefined
    );
    return [marathons, halfs];
  }, []);
  return (
    <svg width={width} height={height}>
      <Group left={margin.left} top={margin.top}>
        <GridColumns
          scale={xScale}
          width={xMax}
          height={yMax}
          stroke="#e0e0e0"
        />
        <Group left={30} top={30}>
          <text x="0" y="0" fontSize={11}>
            Cumulated Running Elevation Gain (m)
          </text>

          <text x="0" y="15" fontSize={11} fill={COLOR.MARATHON}>
            {`Marathons (${marathons})`}
          </text>
          <text x="0" y="30" fontSize={11} fill={COLOR.HALF}>
            {`Half-Marathons (${halfs})`}
          </text>
        </Group>

        <GridRows scale={yScale} width={xMax} height={yMax} stroke="#e0e0e0" />

        <LinePath<Run>
          curve={curveStep}
          data={data}
          x={(d) => xScale(getX(d)) ?? 0}
          y={(d) => yMax - yScale(getY(d)) ?? 0}
          stroke="#333"
        />

        {data.map((d, i) => {
          if (d.distance >= 42) {
            return (
              <circle
                key={`circle-${i}`}
                r={4}
                cx={xScale(getX(d))}
                cy={yMax - yScale(getY(d))}
                fill={COLOR.MARATHON}
              />
            );
          }
          if (d.distance >= 21) {
            return (
              <circle
                key={`circle-${i}`}
                r={4}
                cx={xScale(getX(d))}
                cy={yMax - yScale(getY(d))}
                fill={COLOR.HALF}
              />
            );
          }
        })}

        <AxisBottom
          top={yMax}
          scale={xScale}
          tickFormat={(d) => d.getFullYear()}
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
          tickFormat={(d) =>
            d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'm'
          }
          stroke={'#1b1a1e'}
          tickStroke={'#1b1a1e'}
          tickLabelProps={() => ({
            x: 11,
            fill: '#1b1a1e',
            fontSize: 11,
            textAnchor: 'start',
          })}
        />
      </Group>
    </svg>
  );
}
