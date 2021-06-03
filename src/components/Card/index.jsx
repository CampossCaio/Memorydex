
import pokebolaIcon from '../../assets/icon.svg';

import { flipper, flipped, container, memorized, content, back, front } from './styles.module.scss';

export function Card({card, handleFlipCard, isFlipped, isMemorized}) {
  return (
    <div className={`${flipper} ${(isFlipped || isMemorized) && flipped}`}>
       <div className={`${container} ${isMemorized && memorized}`} onClick={() => handleFlipCard(card)}>
          <div className={content}>
            <img className={back} src={card.image} alt=""/> 
            <img className={front} src={pokebolaIcon} alt=""/>
          </div> 
      </div>
    </div>
  )
}