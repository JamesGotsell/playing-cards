import React from "react"
import { CardType } from "../../types"
import './Card.css'
import { suitMapper } from "../../lib/helper";

export const Card:React.FC<CardType> = ({
    suit, rank
}) => {
    return (
        <>
            <div className="card">
                <div>{rank}</div>
                <div>{` of ${suitMapper[`${suit}`]}`}</div>
                <button> draw card </button>
            </div>
        </>
       
    )
}