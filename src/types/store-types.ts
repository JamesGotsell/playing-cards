import { Dispatch, SetStateAction } from "react";
import { CardType } from "./card-type";

export type StoreType = {
    children: string | JSX.Element | JSX.Element[] 
  }

  export type StoreContextType = {
    cardsState?: CardType[]
    setCardState?: Dispatch<SetStateAction<CardType[]>> |  undefined
    shuffleCards?: () => void
    sortCards?: () => void
    removeCards: (id: string) => void
  }
