//루트 리듀서  , combineReducer 유틸 함수 를 이용해 쉽게 처리 할 수 있다.

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;