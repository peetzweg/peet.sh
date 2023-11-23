import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react';

function sketch(globalP5: P5CanvasInstance) {
  let start = 0;
  let end = 0;
  let blue = 0;
  let green = 0;

  let color = undefined;

  function setup(p5: P5CanvasInstance) {
    return () => {
      p5.createCanvas(500, 500);
      start = p5.width * 0.1;
      end = p5.width * 0.9;
      blue = p5.map(p5.random(), 0, 1, 0, 255);
      green = p5.map(p5.random(), 0, 1, 0, 255);
      p5.noStroke();

      p5.noiseDetail(2, 0.9);
    };
  }

  function draw(p5: P5CanvasInstance) {
    return () => {
      p5.background(255, 0);
      for (let x = start; x < end; x += 2) {
        const value = p5.noise(x / 100);
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
        p5.circle(x, p5.height / 2 + mappedValue, p5.width * 0.09);
      }
    };
  }

  globalP5.setup = setup(globalP5);

  globalP5.draw = draw(globalP5);
}

export function ChromieSquiggle() {
  return <ReactP5Wrapper sketch={sketch} />;
}

export default ChromieSquiggle;
