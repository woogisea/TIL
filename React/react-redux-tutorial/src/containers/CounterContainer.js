import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter'
import { increase, decrease } from '../modules/counter';

//리덕스와 연동된 컴포넌트를 컨테이너라고 부른다, 리덕스 스토어에서 상태를 받아오고 디스패치를 해주는 역활
const CounterContainer = ( {number, increase, decrease}) => {
    return (
        <Counter number = {number} onIncrease = {increase} onDecrease = {decrease}/>
    );
};

//상태를 넘겨 받는 함수
const mapStateToProps = state => ({
    number : state.counter.number,
});

//액션 함수를 넘겨 받는 함수
const mapDispatchToProps = dispatch => ({
    increase : () => {
        dispatch(increase());
    },
    decrease : () => {
        dispatch(decrease());
    }
});


export default connect(mapDispatchToProps,mapStateToProps)(CounterContainer);