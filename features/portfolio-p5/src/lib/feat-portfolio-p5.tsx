import ChromieSquiggle from './sketches/ChromieSquiggle';
import Subscapes from './sketches/Subscapes';

/* eslint-disable-next-line */
export interface FeatPortfolioP5Props {}

export function FeatPortfolioP5(props: FeatPortfolioP5Props) {
  return (
    <div className="h-screen flex flex-row flex-wrap justify-around items-center">
      <Subscapes />
      <ChromieSquiggle />
    </div>
  );
}

export default FeatPortfolioP5;
