import { createAction, handleActions } from 'redux-actions';

const TODO_INSERT = 'todo/TODO_INSERT';
const TODO_TOGGLE = 'todo/TODO_TOGGLE';
const TODO_REMOVE = 'todo/TODO_REMOVE';

let id = 1;
export const todoInsert = createAction(
    TODO_INSERT, 
    text => (
        {
            id : id++,
            text,
            done : false
        }
    )
);
export const todoToggle = createAction(TODO_TOGGLE, id => id);
export const todoRemove = createAction(TODO_REMOVE, id => id);


const initialState = {
    count : 1,
    todos : [
        {
            id : 1,
            text : '리덕스 만들기',
            done : false
        }
    ]
};

const todo = handleActions(
    {
        [TODO_INSERT] : (state, {payload : todo}) => (
            {
                ...state,
                todos : state.todos.concat(todo),
                count : state.count++

            }
        ),
        [TODO_TOGGLE] : (state, {payload : id}) => (
            {
                ...state,
                todos : state.todos.map(todo => todo.id === id ? {...todo, done : !todo.done} : todo)
            }
        ),

        [TODO_REMOVE] : (state, {payload : id}) => (
            {
                ...state,
                todos : state.todos.filter(todo => todo.id !== id),
                count : state.count--
            }
        )
    },initialState
)


export default todo;