import React from 'react';
import './Display.css';

function DisplayButton (props) {
    return (
        <div>
            <button className= {props.buttonStyle}>{props.text}</button>
        </div>
    )
}

export default DisplayButton;