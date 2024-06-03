import React, { createContext, useState } from "react";
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
        //  need to update tthis
        newCardState!.sort((a:CardType,b: CardType) => {
         
                return a?.suit!.localeCompare(b?.suit!)
        
        })
        console.log(newCardState)
        setCardState(newCardState)
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
