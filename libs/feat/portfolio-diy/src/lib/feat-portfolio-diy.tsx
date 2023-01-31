import styles from './feat-portfolio-diy.module.css';

/* eslint-disable-next-line */
export interface FeatPortfolioDiyProps {}

import BathroomLamp from './images/BathroomLamp.jpeg';
import Bed from './images/bed.jpg';
import Bernd from './images/bernd.jpg';
import WallMount from './images/bikewallmount.jpg';
import ConcreteLamp from './images/concretelamp.jpg';
import Curtain from './images/CurtainPole.jpg';
import Lamp from './images/Lamp.jpg';
import Potence01 from './images/potence01.jpg';
import Pottery from './images/pottery.jpg';
import Rack from './images/Rack01.jpg';
import Shades from './images/shades.jpg';
import Wakizashi from './images/woodenwakizashi.jpg';

const ENTRIES = [
  {
    title: 'Bathroom Lamp',
    src: BathroomLamp,
  },
  {
    title: 'Wooden Wakizashi',
    src: Wakizashi,
  },
  {
    title: 'Concrete Lamp',
    src: ConcreteLamp,
  },
  {
    title: 'Leather easy chair',
    src: Bernd,
  },
  {
    title: 'Bed',
    src: Bed,
  },
  {
    title: 'Pot',
    src: Pottery,
  },
  {
    title: 'Potence01',
    src: Potence01,
  },
  {
    title: 'Bike Mount',
    src: WallMount,
  },
  {
    title: 'Rack',
    src: Rack,
  },

  {
    title: 'Curtain-hanger',
    src: Curtain,
  },
  {
    title: 'Chandelier',
    src: Lamp,
  },
  {
    title: 'Shades',
    src: Shades,
  },
];

export const FeatPortfolioDiy = () => (
  <div className={styles['page']}>
    <div className={styles['header']}>
      <h1>Hardware Made by Me ↓</h1>
    </div>
    <div className={styles['grid']}>
      {ENTRIES.map((entry, index, array) => (
        <div className={styles['frame']}>
          <img className={styles['photo']} src={entry.src} />
        </div>
      ))}
    </div>
  </div>
);

export default FeatPortfolioDiy;
