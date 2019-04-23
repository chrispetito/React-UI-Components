import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div>
        <h4 className = 'content-header'>Get started with React</h4>
        <p className='content-text'>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
        <a className = 'content-link'href='reactjs.org'>reactjs.org</a>
        </div>
    )
}

export default CardContent;