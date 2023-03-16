import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './feat-quotes.module.css';
import debounce from 'lodash.debounce';
/* eslint-disable-next-line */
export interface FeatQuotesProps {}

const DURATION = 1;
const CARD_OFFSET = 5;
const DECK_HEIGHT = 3;
const DATA = [
  {
    id: 1,
    quote:
      "I'm not a great programmer; I'm just a good programmer with great habits.",
  },
  {
    id: 2,
    quote: 'Talk is cheap. Show me the code.',
  },
  {
    id: 3,
    quote:
      'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
  },
  {
    id: 4,
    quote: 'Code is like humor. When you have to explain it, it’s bad.',
  },
  {
    id: 5,
    quote: 'Before software can be reusable it first has to be usable.',
  },
  {
    id: 6,
    quote: 'Simplicity is prerequisite for reliability.',
  },
];

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function FeatQuotes(props: FeatQuotesProps) {
  const [cards, setCards] = useState(DATA);

  const deckRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(deckRef);

  const cardControl = useAnimationControls();
  const deckControl = useAnimationControls();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.repeat) return;
      const topCard = cards.at(-1);
      if (!topCard) return;

      // Move Top Card up an down
      cardControl.start((cardId) => {
        if (cardId === topCard.id) {
          const flip = getRandomArbitrary(-2, 2);
          return {
            y: [0, -340, -340, DECK_HEIGHT * CARD_OFFSET],
            rotate: [0, flip, flip, 0],

            scale: [1, 1.02, 0.98, 1],

            transition: { duration: DURATION, type: 'spring', bounce: 5 },
          };
        }
        return {};
      });

      // Move Cards to new zIndices
      cardControl.start((cardId) => {
        // Move Top Card to bottom
        if (cardId === topCard.id) {
          return {};
        }
        // Move other cards up
        const currentCardIndex = cards.findIndex((id) => id === cardId);
        return {
          y: Math.min(3, DATA.length - currentCardIndex - 2) * 4,
          transition: { delay: DURATION * 0.8, type: 'easeInOut' },
        };
      });

      setTimeout(() => {
        setCards((prev) => [...prev.slice(-1), ...prev.slice(0, -1)]);
      }, DURATION * 1000 * 0.5);
    },
    [cardControl, cards]
  );

  useEffect(
    function listenToKeyboardEvents() {
      if (!isInView) return;
      const debouncedKeyDown = debounce(handleKeyDown, DURATION * 1000, {
        leading: true,
      });
      window.addEventListener('keydown', debouncedKeyDown);
      return () => window.removeEventListener('keydown', debouncedKeyDown);
    },
    [handleKeyDown, isInView]
  );

  console.log(cards);
  return (
    <div className={styles['container']}>
      <motion.div
        className={styles['deck']}
        animate={deckControl}
        ref={deckRef}
      >
        {cards.map((d, index) => (
          <motion.div
            key={'card' + d.id}
            className={styles['card']}
            custom={d.id}
            style={{
              zIndex: index * 100,
              backgroundColor: `hsl(${d.id * 30}, 100%, 50%)`,
              y: Math.min(DECK_HEIGHT, DATA.length - index - 2) * CARD_OFFSET,
            }}
            animate={cardControl}
          >
            <div className={styles['card-content']}>
              <h1>{`id:${d.id} / index:${index}`}</h1>
              <p>{d.quote}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default FeatQuotes;
