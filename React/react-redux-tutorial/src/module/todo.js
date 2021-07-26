import { createAction, handleActions } from 'redux-actions'; 
const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const DELETE = 'todo/DELETE';

// export const changeInput = input => (
//     {
//         type : CHANGE_INPUT,
//         input
//     }
// );

// let nextId = 3;
// export const insert = text => (
//     {
//         type : INSERT,
//         next : {
//             id : nextId++,
//             text,
//             checked : false
//         }
//     }
// );

// export const toggle = id => (
//     {
//         type : TOGGLE,
//         id
//     }
// );

// export const Tdelete = id => (
//     {
//         type : DELETE,
//         id
//     }
// );

export const changeInput = createAction(CHANGE_INPUT, input => input);
let nextId = 3;
export const insert = createAction(INSERT, text => (
    {
        id : nextId++,
        text,
        checked : false
    }
));

export const toggle = createAction(TOGGLE, id => id);
export const Tdelete = createAction(DELETE, id => id);


const initialState = {
    input : ' ',
    todos :[
        {
            id : 1,
            text : '안녕하세요',
            checked : true
        },

        {   
            id : 2,
            text : '안녕하세요2',
            checked : false
        }
    ]
};

// function todo(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return{
//                 ...state,
//                 input : action.input
//             };
//         case INSERT:
//             return{
//                 ...state,
//                 todos : state.todos.concat(action.next)
//             };
//         case TOGGLE:
//             return{
//                 ...state,
//                 todos : state.todos.map(todo => todo.id === action.id ? {...todo, checked : !todo.checked} : todo)
//             };
//         case DELETE:
//             return{
//                 ...state,
//                 todos : state.todos.filter(todo => todo.id !== action.id)
//             };
    
//         default:
//             return state;
//     }
// }

const todo = handleActions(
    {
        [CHANGE_INPUT] : (state,{payload : input}) => ({
            ...state,
            input : input
        }),

        [INSERT] : (state,{payload : text}) => ({
            ...state,
            todos : state.todos.concat(text)
        }),

        [TOGGLE] : (state,{payload : id}) => ({
            ...state,
            todos : state.todos.map(todo => todo.id === id ? {...todo, checked : !todo.checked} : todo)
        }),

        [DELETE] : (state,{payload : id}) => ({
            ...state,
            todos : state.todos.filter(todo => todo.id !== id)
        })
    },
    initialState
)

export default todo;