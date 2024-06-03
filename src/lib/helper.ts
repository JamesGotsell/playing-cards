import { CardType } from "../types";

// function to create a ordered deck of card
/**
 * 
 * @returns array od CardType {
    suit: string;
    rank: number
}
 */
export const createDeck = (): CardType[] => {
    
    const cards = []
    const suits = ["H", "D", "C", "S"]

    const ranks = [ "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q"]
    for (let i = 0; i < suits.length; i++) {

        for (let j= 0; j < ranks.length; j++) {
            let object = {
                suit: suits[i],
                rank: ranks[j],
                id: `${suits[i]}-${ranks[j]}`
            }
            cards.push(object)
        }
    }
   

    
    return cards
}

export const shuffle = (cards?: CardType[] ) => {
    cards?.sort( () => Math.random() - 0.5);
}

export const suitMapper: Record<string,string> = {
    "H": "Hearts",
    "C": "Clubs",
    "S": "Spades",
    "D": "Dimonds"
}
