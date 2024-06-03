
export interface CardType {
    suit?: string | undefined;
    rank?: number | string
    id?: string
}

export interface CardListProps {
    cards: CardType[]
}