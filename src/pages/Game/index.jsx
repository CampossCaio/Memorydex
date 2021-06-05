import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { cards } from '../../cards';

import { container, cardsContainer } from './styles.module.scss'; 
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GameFinishModal } from '../../components/GameFinishModal';

export function Game() {

  const [ flippedCards, setFlippedCards ] = useState([]); 
  const [ memorizedCards, setMemorizedCards ] = useState([]); 
  const [ modalIsOpen, setIsOpen ] = useState(false);

  function closeModal() {
    setIsOpen(false);
    window.location.reload();
  }

  function openModal() {
    setIsOpen(true);
  }

  function checkIfTheGameIsFinished() {
    if(memorizedCards.length === (cards.length)) {
      setFlippedCards([]);
      setMemorizedCards([]);
      openModal();
    }
  }

  useEffect(() => {
    checkIfTheGameIsFinished();
  });

  function memorizeCards(card) {
    if (flippedCards.length <= 1 && flippedCards[0]?.value === card.value) {
      setMemorizedCards([...memorizedCards, flippedCards[0], card]);
    }
  }

  function handleFlipCard(card) {
    
    memorizeCards(card);
   
    if(flippedCards.length >= 2) {
      setFlippedCards([card]);
      return;
    } 
    
    setFlippedCards([...flippedCards, card]);
  }

  function verifyIfIsFlipped(cardId) {
    return !!flippedCards.find(card => card.id === cardId);
  }

  function verifyIfIsMemorized(cardId) {
    return !!memorizedCards.find(card => card.id === cardId);
  }

  return (
    <>
      <GameFinishModal isOpen={modalIsOpen} closeModal={closeModal}/>
      <div className={container}>
        <Header/>
        <div className={cardsContainer}>
          {
            cards.map((card) => (
              <Card 
                key={card.id} 
                card={card} 
                handleFlipCard={handleFlipCard} 
                isFlipped={verifyIfIsFlipped(card.id)}
                isMemorized={verifyIfIsMemorized(card.id)}
              />
            ))
          }
        </div>
        <Footer/>
      </div>
    </>
  );
}

