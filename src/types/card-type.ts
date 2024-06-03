
export interface CardType {
    suit?: string;
    rank?: number | string
    id: string
}

export interface CardListProps {
    cards: CardType[]
}