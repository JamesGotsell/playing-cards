import React, { useContext } from "react"
import { CardType } from "../../types"
import './Card.css'
import { suitMapper } from "../../lib/helper";
import { StoreContext } from "../../Store/Store";
import { StoreContextType } from "../../types/store-types";

export const Card:React.FC<CardType> = ({
    suit, rank, id
}) => {
     const { setCardState, removeCards } = useContext<StoreContextType >( StoreContext)


    return (
        <>
            <div className="card">
                <div>{rank}</div>
                <div>{` of ${suitMapper[`${suit}`]}`}</div>
                <button onClick={() => removeCards(id)}> draw card </button>
            </div>
        </>
       
    )
}