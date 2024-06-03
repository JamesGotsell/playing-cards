import React from 'react'
import { Card } from '../Card/Card'
import './CardList.css'
import { CardListProps } from '../../types'

export const CardList:React.FC<CardListProps> = ({ cards }) => {
     return (
        <div className='flex flex-wrap items-center justify-center '>
            { cards?.map((card) => {return <Card {...card}/> }) } 
        </div>
    )
}