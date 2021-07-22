const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const DELETE = 'todo/DELETE';

let nextId = 3;
export const insert = text => ({
    type : INSERT,
    todo : {
        id : nextId++,
        text,
        checked : false
    }
});

export const toggle = id => ({
    type : TOGGLE,
    id
});

export const deleteS = id => ({
    type : DELETE,
    id
});


const initialState = {
    todos : [
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

function todo (state = initialState, action) {
    switch (action.type) {
        case INSERT:
            return{
                ...state,
                todos : state.todos.concat(action.todo)
            };
        case TOGGLE:
            return{
                ...state,
                todos : state.todos.map(todo => todo.id === action.id ? {checked : !todo.checked} : todo)
            };
        case DELETE:
            return{
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
};


export default todo;