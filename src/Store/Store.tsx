import React, { createContext, useState } from "react";
import _ from 'lodash'
import { CardType, StoreType } from "../types";
import { createDeck } from "../lib/helper";
import { StoreContextType } from "../types/store-types";

export const StoreContext = createContext<StoreContextType >({
    removeCards: function (id: string): void {
        throw new Error("Function not implemented.");
    }
})

const StoreProvider: React.FC<StoreType> = ({children}) => {

    const [cardsState, setCardState] = useState<CardType[]>(createDeck())
  
    const shuffleCards = () => {
        const newCardState = [...cardsState] 
        newCardState?.sort( () => Math.random() - 0.5);   
        setCardState(newCardState)
    
    }

    const sortCards = (): void => {
        const newCardState = [...cardsState]
        const suits = ["H", "D", "C", "S"]
        const sorted = []
        for (let i = 0; i < suits.length; i++ ) {
            let stuff = newCardState.filter((data) => data.suit === suits[i]).sort((a,b) => (a.rank> b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0))
            sorted.push(stuff)
        }

        const flattenSortedArray = _.flatten(sorted)
        setCardState(flattenSortedArray)
    }
  
    const removeCards = (id: string) => {
        setCardState(cardsState => cardsState.filter((card) => card.id !=id))
    }   
    return (
        <StoreContext.Provider value={{
            cardsState,
            setCardState,
            shuffleCards,
            sortCards,
            removeCards
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;
