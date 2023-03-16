import { useState } from 'react';
import { motion } from 'framer-motion';

const CARD_DATA = [
  { id: 1, title: 'Card 1', description: 'Description for card 1.' },
  { id: 2, title: 'Card 2', description: 'Description for card 2.' },
  { id: 3, title: 'Card 3', description: 'Description for card 3.' },
];

const Card = ({ card, isFlipped }) => {
  return (
    <motion.div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      layout
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 500 }}
    >
      <motion.div className="card-front" layout />
      <motion.div className="card-back" layout>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </motion.div>
    </motion.div>
  );
};

const CardDeck = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = CARD_DATA[currentCardIndex];
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipButtonClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextButtonClick = () => {
    setCurrentCardIndex((currentCardIndex + 1) % CARD_DATA.length);
    setIsFlipped(false);
  };

  return (
    <div className="card-deck">
      <Card card={currentCard} isFlipped={isFlipped} />
      <div className="button-container">
        <button className="flip-button" onClick={handleFlipButtonClick}>
          {isFlipped ? 'Flip Back' : 'Flip'}
        </button>
        <button className="next-button" onClick={handleNextButtonClick}>
          Next Card
        </button>
      </div>
    </div>
  );
};

export default CardDeck;
