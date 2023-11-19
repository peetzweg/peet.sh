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
const getY = (d: AccumulatedRun) => d.accDistance;

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

export function AccumulatedGraph({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const [foreground, background] = useMemo(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    return prefersDark ? ['#e0e0e0', '#1b1a1e'] : ['#1b1a1e', '#e0e0e0'];
  }, []);
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  xScale.range([0, xMax]);
  yScale.range([yMax, 0]);

  const [marathons, halfs] = useMemo(function calcTotals() {
    let marathons = 0,
      halfs = 0;
    data.forEach((d) =>
      d.distance >= 42 ? marathons++ : d.distance >= 21 ? halfs++ : undefined,
    );
    return [marathons, halfs];
  }, []);
  return (
    <svg width={width} height={height}>
      <Group left={margin.left} top={margin.top}>
        <Group left={30} top={30}>
          <text x="0" y="0" fontSize={11} fill={foreground}>
            Cumulated Running Distance (km)
          </text>

          <text x="0" y="15" fontSize={11} fill={COLOR.MARATHON}>
            {`Marathon (${marathons})`}
          </text>
          <text x="0" y="30" fontSize={11} fill={COLOR.HALF}>
            {`Half-Marathon (${halfs})`}
          </text>
        </Group>

        <GridColumns
          scale={xScale}
          width={xMax}
          height={yMax}
          stroke={background}
        />

        <GridRows
          scale={yScale}
          width={xMax}
          height={yMax}
          stroke={background}
        />

        <LinePath<Run>
          curve={curveStep}
          data={data}
          x={(d) => xScale(getX(d)) ?? 0}
          y={(d) => yMax - yScale(getY(d)) ?? 0}
          stroke={foreground}
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
          stroke={foreground}
          tickStroke={foreground}
          tickLabelProps={() => ({
            fill: foreground,
            fontSize: 11,
            textAnchor: 'middle',
          })}
        />

        <AxisRight
          left={xMax}
          scale={yScale}
          tickFormat={(d) =>
            d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'km'
          }
          stroke={foreground}
          tickStroke={foreground}
          tickLabelProps={() => ({
            x: 11,
            fill: foreground,
            fontSize: 11,
            textAnchor: 'start',
          })}
        />
      </Group>
    </svg>
  );
}
