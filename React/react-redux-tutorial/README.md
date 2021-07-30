# Redux
  - 프레젠테이셔널 컴포넌트 : props를 받아서 UI를 보여주기만 함 <br>
  - 컨테이너 컴포넌트 : 리덕스와 연동되어 있는 컴포넌트, 리덕스로 부터 상태를 받아오거나          리덕스 스토어에 액션을 디스패치
  - createStore를 통해 스토어를 만들 때는 리듀서를 하나만 사용해야 한다.

<br>

```js
//액션 타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함수
export const increase = () => ({type : INCREASE});
export const decrease = () => ({type : DECREASE});


//초기 상태와 리듀서 함수
const initialState = {
    number : 0
};

function counter(state = initialState, action) {
    switch(action.type) {
        case INCREASE : 
            return{
                number : state.number + 1
            };
        case DECREASE :
            return {
                number : state.number - 1
            };
    }
}

//redux-actions를 사용하는 경우
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const counter = handleActions(
    {
        [INCREASE] : (state,aciton) => ({number : state.number + 1}),
        [DECREASE] : (state,action) => ({number : state.number - 1})
    },
    initialState,
)

//액션 함수에 파라미터를 받는 함수가 있다면 리듀서 함수에서 payload 사용(action.payload)
```

<br>

```js
    //기존에 만들었던 리듀서를 하나로 합쳐주는 과정이 필요하다.
    import { combineReducers } from 'redux';
    import counter from './counter';
    import todos from './todos';

    const rootReducer = combineReducer(
        {
            counter,
            todos
        }
    );

    export default rootReducer;
```


## 컨테이너 컴포넌트
위에서 만든 리덕스 스토어에 접근해서 상태를 받아오고 액션를 디스패치 해준다.
```js
    //첫번째 인자는 리덕스 스토어 안에 있는 상태를 props로
    //두번째 인자는 액션 생성 함수를 props로
    connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
```


## Hooks 사용해서 컨테이너 컴포넌트 만들기
```js
    //mapStateToProps와 형태는 같고 더 간단하다
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();

    //간단한 useDispatch 사용
    const onIncrease = () => dispatch(increase());
```

