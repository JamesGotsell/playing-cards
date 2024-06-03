import React, {useContext,} from 'react';

import './App.css';
import { CardList } from './Components/CardList/CardList';
import { StoreContext } from './Store/Store';

const App:React.FC = () => {

  const { cardsState, shuffleCards, sortCards } = useContext<any>( StoreContext)
  console.log(cardsState)
  return (
    <div>
        <div className=' flex flex-col items-center justify-center '>
          <h1 className='font-bold'>Deck of cards</h1>
          <div className='m-0.5 p-2'>
            <button className="m-0.5 p-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() =>  shuffleCards()}>Shuffle</button>
            <button className="m-0.5 p-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => sortCards()}>Sort</button>
          </div>

        </div>
      
        <CardList cards={cardsState}/>
    </div>
  );
}

export default App;
