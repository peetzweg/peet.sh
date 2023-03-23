import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import styles from './feat-quotes.module.css';
import Quotes from './quotes.json';

const DURATION = 0.1;
const CARD_OFFSET = 2;
const DECK_HEIGHT = 3;

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function FeatQuotes() {
  const shuffledQuotes = useMemo(
    () => Quotes.sort((a, b) => 0.5 - Math.random()),
    []
  );
  const initialOrder = shuffledQuotes.map((d) => d.id);
  const cardOrder = useRef<Array<number>>(initialOrder);
  const midAir = useRef<number>(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(deckRef);
  const cardControl = useAnimationControls();
  const deckControl = useAnimationControls();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.repeat) return;
      const orderNow = [...cardOrder.current.slice(-5)];
      console.log({ orderNow });
      const topCardId = orderNow.at(-1);

      cardOrder.current = [
        ...cardOrder.current.slice(-1),
        ...cardOrder.current.slice(0, -1),
      ];
      midAir.current++;

      // Move Top Card up an down
      cardControl.start((cardId) => {
        if (cardId === topCardId) {
          const flip = getRandomArbitrary(-2, 2);
          return {
            y: [0, -340, DECK_HEIGHT * CARD_OFFSET],
            rotate: [0, flip, 0],
            scale: [1, 1.02, 1],
            zIndex: 1000 + midAir.current,

            transition: { duration: DURATION, type: 'spring', bounce: 5 },
          };
        }
        return {};
      });

      // Move Cards to new zIndices
      cardControl
        .start((cardId) => {
          // Move Top Card to bottom
          if (cardId === topCardId) {
            return {
              zIndex: -1000 - midAir.current,
              transition: { delay: DURATION / 2 },
            };
          }
          // Move other cards up
          const currentCardIndex = orderNow.findIndex((id) => id === cardId);
          if (currentCardIndex) {
            return {
              zIndex: currentCardIndex + 1,
              y:
                Math.min(DECK_HEIGHT, Quotes.length - currentCardIndex - 3) *
                CARD_OFFSET,
              transition: { delay: DURATION * 0.3, type: 'easeInOut' },
            };
          } else {
            return {};
          }
        })
        .then(() => {
          midAir.current--;
        });
    },
    [cardControl]
  );

  useEffect(
    function listenToKeyboardEvents() {
      if (!isInView) return;
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    },
    [handleKeyDown, isInView]
  );
  return (
    <div className={styles['container']}>
      <motion.div
        className={styles['deck']}
        animate={deckControl}
        ref={deckRef}
      >
        {shuffledQuotes.map((d, i) => (
          <motion.div
            key={'card' + i}
            className={styles['card']}
            custom={d.id}
            style={{
              zIndex: i,
              // backgroundColor: `hsl(${d.id * 30}, 100%, 50%)`,
              y: Math.max(
                Math.min(DECK_HEIGHT, Quotes.length - i - 2) * CARD_OFFSET,
                100
              ),
            }}
            animate={cardControl}
          >
            <div className={styles['card-content']}>
              <p>{d.content}</p>
              <p>{d.bookTitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default FeatQuotes;
