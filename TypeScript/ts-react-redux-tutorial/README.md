# TypeScript

### 리덕스 사용하기
```
$ yarn add redux react-redux @types/react-redux
//자체적으로 타입스크립트 지원이 되지 않는 react-redux의 경우 @types/를 붙여서 설치

```
<br>

### 리덕스 모듈
```js
//as const를 붙여줌으로써 action.type의 값을 추론 가능하게 해준다.
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

//액션 객체들에 대한 타입을 준비
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;


//리듀서에서는 state와 함수의 반환값이 일치하도록 작성
function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState
```
<br>

### 컨테이너
```js

//루트리듀서의 반환값을 유추해주고 컨테이너에서 사용할수 있게 내보내 주는 과정(index.ts)
export type RootState = ReturnType<typeof rootReducer>;

//상태를 조회할때는 state의 타입을 RootState로
const count = useSelector((state: RootState) => state.counter.count);

//액션 객체들에 대한 타입을 준비
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;


//리듀서에서는 state와 함수의 반환값이 일치하도록 작성
function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState
```
<br>


### typesafe-actions
createStandardAction, createAction, createReducer, ActionType
```js
//커스터마이징된 payload를 지원, createAction 사용
export const addTodo = createAction(ADD_TODO, (text : string) => ({
    id : nextId++,
    text
}))<Todo>();

export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();


//모든 액션 타입을 하나로 모아서 준비
const actions = {
  addTodo,
  toggleTodo,
  removeTodo
};
type TodosAction = ActionType<typeof actions>;


//createReducer를 통한 reducer 만들기
const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload, // id, text 를 이 안에 넣기
      done: false
    }),
  // 바구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있음
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id)
});

```