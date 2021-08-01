import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, decreaseAsync, increase, increaseAsync } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <Counter number = {number} onIncrease = {() => dispatch(increaseAsync())} onDecrease = {() => dispatch(decreaseAsync())} />
    );
};

export default CounterContainer;