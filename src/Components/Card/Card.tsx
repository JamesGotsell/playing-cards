import React, { useContext } from "react"
import { CardType } from "../../types"
import './Card.css'
import { suitMapper } from "../../lib/helper";
import { StoreContext } from "../../Store/Store";
import { StoreContextType } from "../../types/store-types";

export const Card:React.FC<CardType> = ({
    suit, rank, id
}) => {
 const { removeCards } = useContext<StoreContextType >( StoreContext)

 const facecards: Record<number, string> = {
     "1": "Ace",
    "11": "Jack",
     "12": "King",
     "13": "Queen"
}
    const cardRank = facecards[rank] || rank 
    return (
        <>
            <div className="card">
                <div className="flex flex-col">{`${cardRank} of ${suitMapper[`${suit}`]}`}  
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => removeCards(id)}> Draw Card </button></div>
            </div>
        </>
       
    )
}