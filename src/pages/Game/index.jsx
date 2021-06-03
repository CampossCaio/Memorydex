import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { cards } from '../../cards';

import { container, cardsContainer } from './styles.module.scss'; 
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

function Game() {

  const [ flippedCards, setFlippedCards ] = useState([]); 
  const [ memorizedCards, setMemorizedCards ] = useState([]); 

  function checkIfTheGameIsFinished() {
    if(memorizedCards.length === (cards.length)) {
      setFlippedCards([]);
      setMemorizedCards([]);
      window.location.reload();
      return alert("Meus parabéns, você capturou todos os pokemons!");
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
  );
}

export default Game;
