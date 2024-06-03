import React, {useContext,} from 'react';

import './App.css';
import { CardList } from './Components/CardList/CardList';
import { StoreContext } from './Store/Store';

const App:React.FC = () => {

  const { cardsState, shuffleCards, sortCards } = useContext<any>( StoreContext)
  console.log(cardsState)
  return (
    <div className="App">
        <h1>Deck of cards</h1>
        <button onClick={() =>  shuffleCards()}>Shuffle</button>
        <button onClick={() => sortCards()}>sort</button>
        <CardList cards={cardsState}/>
    </div>
  );
}

export default App;
