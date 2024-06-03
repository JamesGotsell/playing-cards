import { CardType } from "../types";


// export const facecards: Record<number, string> = {
//     "1": "Ace",
//     "11": "Jack",
//      "12": "King",
//      "13": "Queen"
// }


const facecards: Record<string, string> = {
    "A": "1",
    "J": "11",
     "K": "12",
     "Q": "13"
}
// function to create a ordered deck of card
/**
 * 
 * @returns array of CardType {
    suit: string;
    rank: number
}
 */
export const createDeck = (): CardType[] => {

    const cards = []
    const suits = ["H", "D", "C", "S"]
    const ranks = [ facecards["A"], 2, 3, 4, 5, 6, 7, 8, 9, 10, facecards["J"], facecards["K"], facecards["Q"]]
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

export const suitMapper: Record<string,string> = {
    "H": "Hearts",
    "C": "Clubs",
    "S": "Spades",
    "D": "Dimonds"
}
