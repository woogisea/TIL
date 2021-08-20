import React, { useState, useReducer } from 'react';

type Action  = { type : 'INCREASE'} | { type : 'DECREASE'};

function reducer(state : number, action : Action) {
    switch(action.type) {
        case 'INCREASE' : 
            return state + 1;
        case 'DECREASE' :
            return state - 1;
        default :
            throw new Error('Unhandled action');
    }
}

function Counter() {
    // const [number, setNumber] = useState<number>(0);
    // const onIncrease = () => setNumber(number + 1);
    // const onDecrease = () => setNumber(number - 1);

    const [number, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type : 'DECREASE'});
    return(
        <div>
            <h2>{number}</h2>
            <button onClick = {onIncrease}>+1</button>
            <button onClick = {onDecrease}>-1</button>
        </div>
    );
}

export default Counter;