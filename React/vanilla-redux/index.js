//스토어 만들기
import { createStore} from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

//상태에 변화를 일으키는 액션 정의
const TOGGLE_SWITCH = "'TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";


//액션 생성 함수, type 값은 반드시 가지고 있어야 한다.
//type 값은 액션의 이름
const toggleSwitch = () => ({type : TOGGLE_SWITCH});
const increase = difference => ({type : INCREASE, difference});
const decrease = () => ({type : DECREASE});


//초기값 설정 
const initialState = {
    toggle : false,
    counter : 0
}

//reducer 함수, 현재상태와 전달받은 action 객체
//맨 처음 undefine 상태에서는 초기값으로 설정
function reducer (state = initialState, action) {
    switch(action.type) {
        //불변성 유지
        case TOGGLE_SWITCH :
            return {
                ...state,
                toggle : !state.toggle
            };
        case INCREASE :
            return {
                ...state,
                counter : state.counter + action.difference
            };
        case DECREASE :
            return {
                ...state,
                counter : state.counter - 1
            };
        default:
            return state;
    }
}

//리덕스를 적용하기 위한 store, 한개의 프로젝트는 하나의 store만 가질 수 있다.
const store = createStore(reducer);

const render = () => {
    const state = store.getState();

    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }

    counter.innerText = state.counter;
};

render();
//dispatch 되어 상태가 업데이트 되면 호출
store.subscribe(render);

//dispatch 호출되면 새로운 상태를 만들어 준다.
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
}
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
}

btnDecrease.onclick = () => {
    store.dispatch(decrease());
}