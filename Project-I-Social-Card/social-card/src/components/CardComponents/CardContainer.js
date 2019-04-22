import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from'./CardContent';

function CardContainer() {
    return (
        <a class = 'card-link' href = 'https://reactjs.org' target='_blank'>
        <div className = 'card-container'>
            <CardBanner />
            <CardContent />
        </div>
        </a>
        
        
    )
}

export default CardContainer;