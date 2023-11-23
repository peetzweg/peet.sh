import styles from './feat-portfolio-diy.module.css';

/* eslint-disable-next-line */
export interface FeatPortfolioDiyProps {}

const ENTRIES = [
  {
    title: 'Bathroom Lamp',
    src: '/hardware/BathroomLamp.jpeg',
  },
  {
    title: 'Wooden Wakizashi',
    src: '/hardware/woodenwakizashi.jpg',
  },
  {
    title: 'Concrete Lamp',
    src: '/hardware/concretelamp.jpg',
  },
  {
    title: 'Leather easy chair',
    src: '/hardware/bernd.jpg',
  },
  {
    title: 'Bed',
    src: '/hardware/bed.jpg',
  },
  {
    title: 'Pot',
    src: '/hardware/pottery.jpg',
  },
  {
    title: 'Potence01',
    src: '/hardware/potence01.jpg',
  },
  {
    title: 'Bike Mount',
    src: '/hardware/bikewallmount.jpg',
  },
  {
    title: 'Rack',
    src: '/hardware/Rack01.jpg',
  },
  {
    title: 'Curtain-hanger',
    src: '/hardware/CurtainPole.jpg',
  },
  {
    title: 'Chandelier',
    src: '/hardware/Lamp.jpg',
  },
  {
    title: 'Shades',
    src: '/hardware/shades.jpg',
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
