import counter from './counter';
import todos from './todos';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
    {
        counter,
        todos
    }
);

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>