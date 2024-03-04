import {
  P5CanvasInstance,
  ReactP5Wrapper,
  SketchProps,
} from '@p5-wrapper/react';

interface ChromieSquiggleProps extends SketchProps {
  width: number;
  height: number;
}

function sketch(p5: P5CanvasInstance<ChromieSquiggleProps>) {
  let start = 0;
  let end = 0;
  let blue = 0;
  let green = 0;
  let offset = 0;

  let color = undefined;

  p5.setup = () => {
    p5.createCanvas(960, 768);
    start = p5.width * 0.1;
    end = p5.width * 0.9;
    blue = p5.map(p5.noise(offset / 10), 0, 1, 0, 255);
    green = p5.map(p5.noise(offset / 10), 0, 1, 0, 255);

    p5.noStroke();
    p5.frameRate(60);
    p5.noiseDetail(2, 0.9);
  };

  p5.draw = () => {
    p5.clear();
    offset += 0.015;

    blue = p5.map(p5.noise(offset), 0, 1, 0, 255);
    green = p5.map(p5.noise(offset), 0, 1, 0, 255);

    for (let x = start; x < end; x += 1 + offset * 3) {
      const value = p5.noise(x / 100 + offset);
      const mappedValue = p5.map(
        value,
        0,
        1,
        -1 * (p5.height / 2),
        p5.height / 2,
      );
      const rValue = p5.map(x, start, end, 0, 255);
      color = p5.color(rValue, green, blue);
      p5.fill(color);
      p5.circle(
        x,
        p5.height / 2 + mappedValue,
        Math.min(p5.width * 0.09 + offset * 3, 200),
      );
    }
  };
}

export function ChromieSquiggle() {
  return <ReactP5Wrapper sketch={sketch} width={960} height={1500} />;
}

export default ChromieSquiggle;
