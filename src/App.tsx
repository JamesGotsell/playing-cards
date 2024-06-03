import React, {useEffect, useState } from 'react';

import './App.css';
import { CardList } from './Components/CardList/CardList';
import { createDeck } from './lib/helper';
import { CardType } from './types';

const App = () => {
  const [cardsState, setCardState] = useState<CardType[]>(createDeck())
  
  const shuffle = () => {
      const newCardState = [...cardsState] 
      newCardState?.sort( () => Math.random() - 0.5);
      setCardState(newCardState)
  
  }

  useEffect(() => {
    console.log(cardsState, "cards states")
  }, [cardsState])
  
  return (
    <div className="App">
         <button onClick={() => shuffle()}>Shuffle</button>
        <CardList cards={cardsState || []}/>
    </div>
  );
}

export default App;
