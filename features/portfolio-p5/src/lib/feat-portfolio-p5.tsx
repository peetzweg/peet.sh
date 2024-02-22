import ChromieSquiggle from './sketches/ChromieSquiggle';
import Subscapes from './sketches/Subscapes';

/* eslint-disable-next-line */
export interface FeatPortfolioP5Props {}

export function Feature(props: FeatPortfolioP5Props) {
  return (
    <div className="h-auto flex flex-col flex-wrap justify-around items-center overflow-hidden">
      <div className="flex flex-col w-full md:w-1/2">
        <ChromieSquiggle />
        <a
          href="https://github.com/peetzweg/peet.sh/blob/main/features/portfolio-p5/src/lib/sketches/ChromieSquiggle.tsx"
          target="_blank"
          rel="noreferrer noopener"
          className="underline font-mono"
        >
          ChromieSquiggle - source ↗
        </a>
      </div>
      <Subscapes />
    </div>
  );
}

export default Feature;
