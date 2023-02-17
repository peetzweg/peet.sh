import ChromieSquiggle from './sketches/ChromieSquiggle';
import Subscapes from './sketches/Subscapes';

/* eslint-disable-next-line */
export interface FeatPortfolioP5Props {}

export function FeatPortfolioP5(props: FeatPortfolioP5Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Subscapes />
      <ChromieSquiggle />
    </div>
  );
}

export default FeatPortfolioP5;
