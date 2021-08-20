import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';
type State = {
    count : number,
    text : string,
    color : Color,
    isGood : boolean
};

type Action = 
    {type : 'SET_COUNT', count : number} | 
    {type : 'SET_TEXT', text : string} | 
    {type : 'SET_COLOR', color : Color} | 
    {type : 'SET_ISGOOD'};

function reducer(state : State, action : Action) {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count : action.count
            }
        
        case 'SET_TEXT' :
            return {
                ...state,
                text : action.text
            }
        case 'SET_COLOR' :
            return {
                ...state,
                color : action.color
            }
        case 'SET_ISGOOD':
            return {
                ...state,
                isGood : !state.isGood,
            }
        default:
            throw new Error('Unhandled action');
    }
}
function ReducerSample () {
    const [state, dispatch] = useReducer(reducer, {
        count : 0,
        text : 'hello',
        color : 'red',
        isGood : true
    });

    const setCount = () => dispatch({type : 'SET_COUNT', count : 5});
    const setText = () => dispatch({type : 'SET_TEXT', text : 'bye'});
    const setColor = () => dispatch({type : 'SET_COLOR', color : 'yellow'});
    const setIsGood = () => dispatch({type : 'SET_ISGOOD'});
    return (
        <div>
            <span>{state.count}</span>
            <button onClick = {setCount}>클릭</button>
            <span>{state.text}</span>
            <button onClick = {setText}>클릭</button>
            <span>{state.color}</span>
            <button onClick = {setColor}>클릭</button>
            <span>{state.isGood}</span>
            <button onClick = {setIsGood}>클릭</button>
        </div>
    );
};

export default ReducerSample;