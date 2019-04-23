import React from 'react';
import NumberButton from './NumberButton';

const numbers = [
     {text:'1', buttonStyle: 'number'},
     {text:'2', buttonStyle: 'number'},
     {text:'3', buttonStyle: 'number'}, 
     {text:'4', buttonStyle: 'number'},
     {text:'5', buttonStyle: 'number'}, 
     {text:'6', buttonStyle: 'number'}, 
     {text:'7', buttonStyle: 'number'}, 
     {text:'8', buttonStyle: 'number'}, 
     {text:'9', buttonStyle: 'number'}, 
]

function IndNumberButton () {
    return (
        <div>
            {numbers.map(numberFromMap => {
                return <NumberButton numberProp={numberFromMap} />
            })} 
        </div>
    )
}

export default IndNumberButton;